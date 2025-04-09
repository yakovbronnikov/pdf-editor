import './style.css'
import evroins from '/src/pdf-templates/evroins.pdf'
import derdanaBold from '/src/Verdana-Bold.ttf'
import { evroinsLayout } from './layout-templates/evroins.js'
import { evroinsForm } from './form-templates/evroins.js'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit';

document.querySelector('#app').innerHTML = `
  <div class="page">
        <div class="page_wrapper">
            <h1>Выберите шаблон и заполните поля</h1>
            <div class="input">
                <select name="template" id="template" placeholder="Выберите шаблон" required>
                    <option value="0">ЕВРОИНС Страховой полис</option>
                    <option value="0">ЕВРОИНС Страховой полис</option>
                    <option value="0">ЕВРОИНС Страховой полис</option>
                    <option value="0">ЕВРОИНС Страховой полис</option>
                </select>
                <label for="template">Шаблон</label>
            </div>
            <div class="tip">Если хотите стереть поле в файле, просто вставьте пробел</div>
            <div id="form"></div>
            <button class="button" id="generate">Применить поля</button>
            <a href="#" class="button" id="download">Скачать файл</a>
        </div>
    </div>
    <iframe id="preview"></iframe>
`;

const templates = [
    {
        pdf: evroins,
        form: evroinsForm,
        layout: evroinsLayout,
        name: 'Имя Фамилия ЕВРОИНС.pdf'
    }
]

const tSelect = document.getElementById('template')
const form = document.getElementById('form')
form.innerHTML = templates[tSelect.value].form



tSelect.addEventListener('change', (e) => {
    form.innerHTML = templates[tSelect.value].form
})

document.getElementById('generate').addEventListener('click', generatePdf)

async function generatePdf() {
    // Загрузка PDF из публичной папки
    const existingPdfBytes = await fetch(templates[tSelect.value].pdf).then(res => res.arrayBuffer());
    
    // Загрузка кастомного шрифта
    const fontBytes = await fetch(derdanaBold).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);
    const verdanaBold = await pdfDoc.embedFont(fontBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    formToLayout(firstPage, templates[tSelect.value].layout, verdanaBold)

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    document.getElementById('preview').src = url

    const a = document.getElementById('download')
    a.href = url;
    a.download = templates[tSelect.value].name;
}

function formToLayout(page, layout, font) {
    const formFields = document.querySelectorAll('input')

    for (let i = 0; i < formFields.length; i++) {
        if (formFields[i].value !== '' || formFields[i].value == ' ') {
            page.drawRectangle({
                width: layout[i].width,
                height: layout[i].height,
                x: layout[i].x,
                y: layout[i].y,
                color: layout[i].bgColor
            })

            page.drawText(formFields[i].value, {
                x: layout[i].textX,
                y: layout[i].textY,
                size: layout[i].size,
                color: layout[i].textColor,
                font: font
            })
        }
    }
}

generatePdf()


