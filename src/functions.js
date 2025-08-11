import { removeTourist, addTourist, getTourists } from './tourists.js'

import {
    randomNumber,
    dateFormat,
    dayCount,
    standartDate,
    monthNameDate,
    today,
    monthNameDateOnly
} from './formats.js'

import { euroins } from './layout-templates/euroins.js'
import { tit } from './layout-templates/tit.js'
import { zetta } from './layout-templates/zetta.js'
import { pek } from './layout-templates/pek.js'
import { sha } from './layout-templates/sha.js'
import { hrb } from './layout-templates/hrb.js'
import { route } from './layout-templates/route.js'

import { PDFDocument, StandardFonts, rgb, TextAlignment } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { loadFonts } from './fonts.js'

const templates = [
    {
        layout: {
            euroins: euroins,
            tit: tit,
            zetta: zetta,
        },
        name: 'Страховка',
        iframe: 'insurance-preview'
    },
    {
        layout: {
            pek: route,
            sha: route,
            hrb: route,
            can: route,
        },
        name: 'Турмаршрут',
        iframe: 'route-preview'
    }
]

export async function generateAll() {

    const insSelect = document.getElementById('template-insurance').value
    const cityFrom = document.getElementById('city-from').value
    const cityTo = document.getElementById('city-to').value

    document.querySelector('.loader').classList.add('loader-active')

    const insurance = await fetch(`pdf-templates/${insSelect}.pdf`).then(res => res.arrayBuffer())
    const route = await fetch(`pdf-templates/route-${cityTo}.pdf`).then(res => res.arrayBuffer())

    const listPdfBytes = [insurance, route]
    const modifiedPDFs = []

    for (let i = 0; i < listPdfBytes.length; i++) {
        const pdf = await getPdfPage(listPdfBytes[i])

        if (templates[i].name == 'Турмаршрут') {
            drawLayout(pdf.page, templates[i].layout[cityTo], pdf.fonts)
        } else if (templates[i].name == 'Страховка') {
            drawLayout(pdf.page, templates[i].layout[insSelect], pdf.fonts)
        }

        const pdfBytes = await pdf.doc.save()
        modifiedPDFs.push(pdfBytes)

        const blob = new Blob([pdfBytes], { type: 'application/pdf' })
        const url = URL.createObjectURL(blob)
        document.getElementById(templates[i].iframe).src = url
    }

    generateTickets()
    generateBooking()

    document.querySelector('.loader').classList.remove('loader-active')

    return modifiedPDFs
}




function drawLayout(page, layout, font, tourist) {
    const context = {
        cityFrom: document.getElementById('city-from'),
        cityTo: document.getElementById('city-to'),
        dateFrom: document.getElementById('date-from'),
        dateTo: document.getElementById('date-to'),
        touristList: getTourists(),
        tourist: tourist,
        font: font,
        text: ''
    }

    for (let i = 0; i < layout.length; i++) {
        page.drawRectangle({
            width: layout[i].width,
            height: layout[i].height,
            x: layout[i].x,
            y: layout[i].y,
            color: layout[i].bgColor
        })

        const content = funcOrNot(layout[i].content, context)
        const displayText = content !== undefined && content !== null ? content : '';
        context.text = String(displayText)
        const textX = funcOrNot(layout[i].textX, context) 

        page.drawText(String(displayText), {
            x: textX,
            y: layout[i].textY,
            size: layout[i].size,
            color: layout[i].textColor,
            font: font[layout[i].font] || font.default
        })
    }
}




// ГЕНЕРАЦИЯ БИЛЕТОВ

async function generateTickets() {
    const cityFrom = document.getElementById('city-from').value
    const cityTo = document.getElementById('city-to').value

    const ticket = await fetch(`pdf-templates/${cityFrom}-${cityTo}.pdf`).then(res => res.arrayBuffer())
    const ticketLayout = await import(`../src/layout-templates/${cityFrom}-${cityTo}.js`)
    const ticketPDFs = []
    const touristList = getTourists()

    for (let i = 0; i < touristList.length; i++) {
        const pdf = await getPdfPage(ticket)
        drawLayout(pdf.page, ticketLayout[`${cityFrom}${cityTo}`], pdf.fonts, touristList[i])
        const pdfBytes = await pdf.doc.save()
        ticketPDFs.push(pdfBytes)
    }

    const blob = new Blob([ticketPDFs[0]], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    document.getElementById('ticket-preview').src = url

    return ticketPDFs
}

// ГЕНЕРАЦИЯ ОТЕЛЕЙ

async function generateBooking() {
    const cityTo = document.getElementById('city-to').value

    const booking = await fetch(`pdf-templates/booking-${cityTo}.pdf`).then(res => res.arrayBuffer())
    const bookingLayout = await import(`../src/layout-templates/${cityTo}.js`)
    const bookingPDFs = []
    const touristList = chunkTourists(getTourists(), 2)

    if (touristList.length == 1) {
        const pdf = await getPdfPage(booking)
        drawLayout(pdf.page, bookingLayout[`${cityTo}`], pdf.fonts, touristList[0])
        const pdfBytes = await pdf.doc.save()
        bookingPDFs.push(pdfBytes)

    } else if (touristList.length == 2) {
        for (let i = 0; i < touristList.length; i++) {

            const pdf = await getPdfPage(booking)
            drawLayout(pdf.page, bookingLayout[`${cityTo}`], pdf.fonts, touristList[i])
            const pdfBytes = await pdf.doc.save()
            bookingPDFs.push(pdfBytes)

        }
    } else {
        for (let i = 0; i < touristList.length; i++) {

            const pdf = await getPdfPage(booking)
            drawLayout(pdf.page, bookingLayout[`${cityTo}`], pdf.fonts, touristList[i])
            const pdfBytes = await pdf.doc.save()
            bookingPDFs.push(pdfBytes)

        }
    }

    const blob = new Blob([bookingPDFs[0]], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    document.getElementById('hotel-preview').src = url

    return bookingPDFs
}


// СОЗДАНИЕ И СОХРАНЕНИЕ АРХИВА

export async function createZip() {
    const zip =
        new JSZip(),
        ticketFolder = zip.folder('Билеты'),
        bookingFolder = zip.folder('Отели'),

        pdfBuffers = await generateAll(),
        tickets = await generateTickets(),
        booking = await generateBooking(),

        cityFrom = document.getElementById('city-from').value,
        cityTo = document.getElementById('city-to').value,
        tourists = getTourists()

    document.querySelector('.loader').classList.add('loader-active')

    pdfBuffers.forEach((pdfBytes, index) => {
        zip.file(`${templates[index].name}.pdf`, pdfBytes)
    })

    tickets.forEach((pdfBytes, index) => {
        ticketFolder.file(`${tourists[index].name} Билеты.pdf`, pdfBytes)
    })

    booking.forEach((pdfBytes, index) => {
        bookingFolder.file(`Отель-${index + 1}.pdf`, pdfBytes)
    })

    

    const zipBlob = await zip.generateAsync({ type: 'blob' })
    saveAs(zipBlob, `${tourists[0].name} ${cityFrom}-${cityTo}.zip`)
    document.querySelector('.loader').classList.remove('loader-active')
}

async function getPdfPage(file) {
    const doc = await PDFDocument.load(file)
    doc.registerFontkit(fontkit)
    const fonts = await loadFonts(doc)

    const pages = doc.getPages()
    const page = pages[0]

    return {
        doc,
        fonts,
        page
    }
}

export function xyzCheck() {
    const x = document.getElementById('x')
    const y = document.getElementById('y')
    const z = '0000'
    const checkbox = document.getElementById('checkbox').checked

    if (y.value == z) {
        y.blur()
        x.classList.add('x-fall')
    } else {
        document.querySelector('#x > .tip').style.display = 'flex'
    }

    if (checkbox) {
        localStorage.setItem('remember', JSON.stringify({ remember: true }))
    } else {
        localStorage.setItem('remember', JSON.stringify({ remember: false }))
    }
}

function chunkTourists(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size))
    }
    return chunks
}


export function centeredText(text, center, font, fontSize) {
    const width = font.widthOfTextAtSize(text, fontSize)
    const x = center - width / 2
    return x
}

function funcOrNot(raw, ctx) {
    const value = typeof raw === 'function' ? raw(ctx) : raw
    return value
}