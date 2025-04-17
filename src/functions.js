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

const templates = [
    // {
    //     layout: {
    //         pek: pek,
    //         sha: sha,
    //         hrb: hrb
    //     },
    //     name: 'Отель',
    //     iframe: 'hotel-preview'
    // },
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
        },
        name: 'Турмаршрут',
        iframe: 'route-preview'
    }
]

// export async function generateAll() {
//     const insSelect = document.getElementById('template-insurance').value
//     const cityFrom = document.getElementById('city-from').value
//     const cityTo = document.getElementById('city-to').value

//     const hotel = await fetch(`src/pdf-templates/booking-${cityTo}.pdf`).then(res => res.arrayBuffer())
//     const insurance = await fetch(`src/pdf-templates/${insSelect}.pdf`).then(res => res.arrayBuffer())
//     const route = await fetch(`src/pdf-templates/route-${cityTo}.pdf`).then(res => res.arrayBuffer())

//     const listPdfBytes = [hotel, insurance, route]
//     const modifiedPDFs = []

//     for (let i = 0; i < listPdfBytes.length; i++) {
//         const pdfDoc = await PDFDocument.load(listPdfBytes[i])
        
//         pdfDoc.registerFontkit(fontkit)
//         const verdanaBytes = await fetch('src/fonts/Verdana-Bold.ttf').then(res => res.arrayBuffer())
//         const verdanaBold = await pdfDoc.embedFont(verdanaBytes)
//         const golosTextBytes = await fetch('src/fonts/GolosText-Regular.ttf').then(res => res.arrayBuffer())
//         const golosText = await pdfDoc.embedFont(golosTextBytes)

//         const pages = pdfDoc.getPages()
//         const firstPage = pages[0]

//         if (templates[i].name == 'Турмаршрут') {
//             drawLayout(firstPage, templates[i].layout[cityTo], golosText)
//         } else if (templates[i].name == 'Страховка') {
//             drawLayout(firstPage, templates[i].layout[insSelect], verdanaBold)
//         } else {
//             drawLayout(firstPage, templates[i].layout[cityTo], verdanaBold)
//         }

//         const pdfBytes = await pdfDoc.save()
//         modifiedPDFs.push(pdfBytes)

//         const blob = new Blob([pdfBytes], { type: 'application/pdf' })
//         const url = URL.createObjectURL(blob)
//         document.getElementById(templates[i].iframe).src = url
//     }

//     generateTickets()

//     return modifiedPDFs
// }

export async function generateAll() {
    const insSelect = document.getElementById('template-insurance').value
    const cityFrom = document.getElementById('city-from').value
    const cityTo = document.getElementById('city-to').value

    const insurance = await fetch(`src/pdf-templates/${insSelect}.pdf`).then(res => res.arrayBuffer())
    const route = await fetch(`src/pdf-templates/route-${cityTo}.pdf`).then(res => res.arrayBuffer())

    const listPdfBytes = [ insurance, route]
    const modifiedPDFs = []

    for (let i = 0; i < listPdfBytes.length; i++) {
        const pdfDoc = await PDFDocument.load(listPdfBytes[i])
        
        pdfDoc.registerFontkit(fontkit)
        const verdanaBytes = await fetch('src/fonts/Verdana-Bold.ttf').then(res => res.arrayBuffer())
        const verdanaBold = await pdfDoc.embedFont(verdanaBytes)
        const golosTextBytes = await fetch('src/fonts/GolosText-Regular.ttf').then(res => res.arrayBuffer())
        const golosText = await pdfDoc.embedFont(golosTextBytes)

        const pages = pdfDoc.getPages()
        const firstPage = pages[0]

        if (templates[i].name == 'Турмаршрут') {
            drawLayout(firstPage, templates[i].layout[cityTo], golosText)
        } else if (templates[i].name == 'Страховка') {
            drawLayout(firstPage, templates[i].layout[insSelect], verdanaBold)
        }

        const pdfBytes = await pdfDoc.save()
        modifiedPDFs.push(pdfBytes)

        const blob = new Blob([pdfBytes], { type: 'application/pdf' })
        const url = URL.createObjectURL(blob)
        document.getElementById(templates[i].iframe).src = url
    }

    generateTickets()
    generateBooking()

    return modifiedPDFs
}




function drawLayout(page, layout, font) {
    const cityFrom = document.getElementById('city-from')
    const cityTo = document.getElementById('city-to')
    const dateFrom = document.getElementById('date-from')
    const dateTo = document.getElementById('date-to')
    const touristList = getTourists()

    for (let i = 0; i < layout.length; i++) {
        page.drawRectangle({
            width: layout[i].width,
            height: layout[i].height,
            x: layout[i].x,
            y: layout[i].y,
            color: layout[i].bgColor
        })



        if (eval(layout[i].content) != undefined || eval(layout[i].content) != null) {
            page.drawText(eval(layout[i].content), {
                x: layout[i].textX,
                y: layout[i].textY,
                size: layout[i].size,
                color: layout[i].textColor,
                font: font
            })
        }
    }
}


// ГЕНЕРАЦИЯ БИЛЕТОВ

async function generateTickets() {
    const cityFrom = document.getElementById('city-from').value
    const cityTo = document.getElementById('city-to').value

    const ticket = await fetch(`src/pdf-templates/${cityFrom}-${cityTo}.pdf`).then(res => res.arrayBuffer())
    const ticketLayout = await import(`../src/layout-templates/${cityFrom}-${cityTo}.js`)
    const ticketPDFs = []
    const touristList = getTourists()

    for (let i = 0; i < touristList.length; i++) {
        const pdfDoc = await PDFDocument.load(ticket)
        pdfDoc.registerFontkit(fontkit)

        const golosTextBytes = await fetch('src/fonts/GolosText-Regular.ttf').then(res => res.arrayBuffer())
        const golosText = await pdfDoc.embedFont(golosTextBytes)

        const pages = pdfDoc.getPages()
        const firstPage = pages[0]
        drawTicketLayout(firstPage, ticketLayout[`${cityFrom}${cityTo}`], touristList[i], golosText)

        const pdfBytes = await pdfDoc.save()
        ticketPDFs.push(pdfBytes)
    }

    const blob = new Blob([ticketPDFs[0]], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    document.getElementById('ticket-preview').src = url

    return ticketPDFs
}

// ОТРИСОВКА БИЛЕТОВ

function drawTicketLayout(page, layout, tourist, font) {
    const cityFrom = document.getElementById('city-from')
    const cityTo = document.getElementById('city-to')
    const dateFrom = document.getElementById('date-from')
    const dateTo = document.getElementById('date-to')

    for (let i = 0; i < layout.length; i++) {
        page.drawRectangle({
            width: layout[i].width,
            height: layout[i].height,
            x: layout[i].x,
            y: layout[i].y,
            color: layout[i].bgColor
        })

        page.drawText(eval(layout[i].content), {
            x: layout[i].textX,
            y: layout[i].textY,
            size: layout[i].size,
            color: layout[i].textColor,
            font: font
        })
    }
}

// ГЕНЕРАЦИЯ ОТЕЛЕЙ

async function generateBooking() {
    const cityTo = document.getElementById('city-to').value

    const booking = await fetch(`src/pdf-templates/booking-${cityTo}.pdf`).then(res => res.arrayBuffer())
    const bookingLayout = await import(`../src/layout-templates/${cityTo}.js`)
    const bookingPDFs = []
    const touristList = getTourists()

    if (touristList.length <= 2) {
        const pdfDoc = await PDFDocument.load(booking)
            pdfDoc.registerFontkit(fontkit)
    
            const verdanaBytes = await fetch('src/fonts/Verdana-Bold.ttf').then(res => res.arrayBuffer())
            const verdanaBold = await pdfDoc.embedFont(verdanaBytes)
    
            const pages = pdfDoc.getPages()
            const firstPage = pages[0]
            drawLayout(firstPage, bookingLayout[`${cityTo}`], verdanaBold)
    
            const pdfBytes = await pdfDoc.save()
            bookingPDFs.push(pdfBytes)
    } else if (touristList.length <= 4) {
        for (let i = 0; i < 2; i++) {
            const pdfDoc = await PDFDocument.load(booking)
            pdfDoc.registerFontkit(fontkit)
    
            const verdanaBytes = await fetch('src/fonts/Verdana-Bold.ttf').then(res => res.arrayBuffer())
            const verdanaBold = await pdfDoc.embedFont(verdanaBytes)
    
            const pages = pdfDoc.getPages()
            const firstPage = pages[0]
            drawLayout(firstPage, bookingLayout[`${cityTo}`], verdanaBold)
    
            const pdfBytes = await pdfDoc.save()
            bookingPDFs.push(pdfBytes)
        }
    } else {
        for (let i = 0; i < 3; i++) {
            const pdfDoc = await PDFDocument.load(booking)
            pdfDoc.registerFontkit(fontkit)
    
            const verdanaBytes = await fetch('src/fonts/Verdana-Bold.ttf').then(res => res.arrayBuffer())
            const verdanaBold = await pdfDoc.embedFont(verdanaBytes)
    
            const pages = pdfDoc.getPages()
            const firstPage = pages[0]
            drawLayout(firstPage, bookingLayout[`${cityTo}`], verdanaBold)
    
            const pdfBytes = await pdfDoc.save()
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
    const zip = new JSZip()
    const ticketFolder = zip.folder('Билеты')
    const bookingFolder = zip.folder('Отели')

    const pdfBuffers = await generateAll()
    const tickets = await generateTickets()
    const booking = await generateBooking()

    const cityFrom = document.getElementById('city-from').value
    const cityTo = document.getElementById('city-to').value
    const tourists = getTourists()

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
}