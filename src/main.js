import './style.css'
import { removeTourist, addTourist, getTourists } from './tourists.js'

import {
    generateAll,
    createZip,
} from './functions.js'



document.querySelector('#app').innerHTML = `
      <div class="page">
        <div id="form">
            <div class="form-block">
                <h1>Данные о поездке</h1>
                <div class="input">
                    <select id="city-from" placeholder="Выберите направление" required>
                        <option value="vvo">Владивосток</option>
                    </select>
                    <label for="city-from">Откуда</label>
                </div>
                <div class="input">
                    <select id="city-to" placeholder="Выберите направление" required>
                        <option value="pek" selected>Пекин</option>
                        <option value="hrb">Харбин</option>
                        <option value="sha" selected>Шанхай</option>
                    </select>
                    <label for="city-to">Куда</label>
                </div>
                <div class="input-group">
                    <div class="input">
                        <input id="date-from" type="date" placeholder="ДД.ММ.ГГГГ" value="2025-06-24" required>
                        <label for="date-from">Дата с</label>
                    </div>
                    <div class="input">
                        <input id="date-to" type="date" placeholder="ДД.ММ.ГГГГ" value="2025-07-04" required>
                        <label for="date-to">Дата по</label>
                    </div>
                </div>
                <div class="input">
                    <select name="template" id="template-insurance" placeholder="Выберите шаблон" required>
                        <option value="euroins">ЕВРОИНС</option>
                        <option value="tit">TIT</option>
                        <option value="zetta">Zetta</option>
                    </select>
                    <label for="template-insurance">Страховка</label>
                </div>
            </div>
            <div id="tourist-list">
                <div class="tourist form-block" id="tourist-01">
                    <div class="tourist-header">
                        <h4>Турист</h4>
                    </div>
                    <div class="input">
                        <input id="tourist-name-01" type="text" placeholder="NAME SURNAME" value="IVAN IVANOV" required>
                        <label for="tourist-name-01">Имя туриста</label>
                    </div>
                    <div class="input-group">
                        <div class="input">
                            <input id="tourist-date-01" type="date" placeholder="ДД.ММ.ГГГГ" value="1995-01-16" required>
                            <label for="tourist-date-01">Дата рождения</label>
                        </div>
                        <div class="input">
                            <input id="tourist-passport-01" type="text" placeholder="00000000" value="76000000" required>
                            <label for="tourist-passport-01">Паспорт</label>
                        </div>
                    </div>
                </div>
            </div>
            <button class="button button-link" id="add-tourist">Добавить туриста</button>
            <button class="button" id="generate">Заполнить шаблоны</button>
            <a class="button button-link" id="download">Скачать архив</a>
        </div>
    </div>
    <div class="preview">
        <h1>Билеты</h1>
        <iframe id="ticket-preview"></iframe>
        <h1>Бронирование отеля</h1>
        <iframe id="hotel-preview"></iframe>
        <h1>Страховка</h1>
        <iframe id="insurance-preview"></iframe>
        <h1>Турмаршрут</h1>
        <iframe id="route-preview"></iframe>
    </div>
`;

document.getElementById('generate').addEventListener('click', generateAll)
document.getElementById('add-tourist').addEventListener('click', addTourist)
document.getElementById('download').addEventListener('click', () => {
    createZip()
})

