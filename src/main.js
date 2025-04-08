import './style.css'
import evroins from '/public/pdf-templates/evroins.pdf'
import derdanaBold from '/src/Verdana-Bold.ttf'
import { templateEvroins } from './layout-templates/evroins.js'
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
            <div id="form">
                <div class="input">
                    <input id="number" type="text" placeholder="Введите номер" required>
                    <label for="number">Номер полиса</label>
                </div>

                <div class="input">
                    <input id="name" type="text" placeholder="Имя и фамилия" required>
                    <label for="name">Страхователь</label>
                </div>

                <div class="input">
                    <input id="birth-date" type="text" placeholder="Введите дату" required>
                    <label for="birth-date">Дата рождения</label>
                </div>

                <div class="input">
                    <input id="passport" type="text" placeholder="Серия и номер" required>
                    <label for="passport">Паспорт</label>
                </div>

                <div class="input">
                    <input id="address" type="text" placeholder="Страна, город" required>
                    <label for="address">Адрес</label>
                </div>

                <div class="input">
                    <input id="area" type="text" placeholder="Введите страну" required>
                    <label for="area">Территория действия</label>
                </div>

                <div class="input">
                    <input id="date-from" type="text" placeholder="Введите дату" required>
                    <label for="date-from">Поездка с</label>
                </div>

                <div class="input">
                    <input id="date-to" type="text" placeholder="Введите дату" required>
                    <label for="date-to">Поездка до</label>
                </div>

                <div class="input">
                    <input id="days" type="text" placeholder="Введите количество" required>
                    <label for="days">Количество дней</label>
                </div>
            </div>
            <button class="button" id="generate">Применить поля</button>
        </div>
    </div>
    <iframe id="preview"></iframe>
`;


document.getElementById('generate').addEventListener('click', generatePdf) 

async function generatePdf() {
    // Загрузка PDF из публичной папки
    const existingPdfBytes = await fetch(evroins).then(res => res.arrayBuffer());
  
    // Загрузка кастомного шрифта
    const fontBytes = await fetch(derdanaBold).then(res => res.arrayBuffer());
  
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);
    const verdanaBold = await pdfDoc.embedFont(fontBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
  
    templateEvroins(firstPage, verdanaBold, rgb)
  
    const pdfBytes = await pdfDoc.save();
  
  
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
  
    document.getElementById('preview').src = url
  
    // Скачивание
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'output.pdf';
    // a.click();
    // URL.revokeObjectURL(url);
  }

  generatePdf()