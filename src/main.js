import './style.css'
import { removeTourist, addTourist, getTourists } from './tourists.js'
import { selectFrom, selectTo } from './select.js';

import {
    generateAll,
    createZip,
    xyzCheck
} from './functions.js'



document.querySelector('#app').innerHTML = `
    <div id="x">
        <div class="input">
            <input id="y" type="text" placeholder="Введите пароль" required>
            <label for="y">Пароль</label>
        </div>
        <div class="tip">Неверный пароль. Попробуйте еще раз.</div>
        <label for="checkbox" class="checkbox-label">
            <input type="checkbox" id="checkbox">
            <div class="checkbox-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 10L8.5 13L14.5 7" stroke="white" stroke-linejoin="round" stroke-width="1.25"/>
                </svg>
            </div>
            <p>Запомнить меня</p>
        </label>
        <button class="button" id="b">Войти</button>
    </div>
    <div class="loader">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="loader-40">
            <circle cx="20" cy="20" r="12" stroke="#0075FF"/>
            <style>
                .loader-40 circle {
                    stroke-width: 2.5;
                    stroke-linecap: round;
                    animation: circle-40 3s 0s linear infinite;
                }

                @keyframes circle-40 {
                    0%{stroke-dashoffset: 144px; stroke-dasharray: 72px 0px;}
                    50%{stroke-dasharray: 0px 72px;}
                    100%{stroke-dashoffset: -144px; stroke-dasharray: 72px 0px;}
                }
            </style>
        </svg>
        Генерация файлов...
    </div>
    <div class="page">
        <div id="form">
            <div class="form-block">
                <h1>Данные о поездке</h1>
                <div class="input">
                    <select id="city-from" placeholder="Выберите направление" required>
                        <option value="vvo">Владивосток</option>
                        <option value="msk" selected>Москва</option>
                    </select>
                    <label for="city-from">Откуда</label>
                    <div>Выберите город отправления</div>
                </div>
                <div class="input">
                    <select id="city-to" placeholder="Выберите направление" required>
                        <option value="pek">Пекин</option>
                        <option value="hrb">Харбин</option>
                        <option value="sha">Шанхай</option>
                        <option value="can" selected>Гуанчжоу</option>
                    </select>
                    <label for="city-to">Куда</label>
                    <div>Выберите город прибытия</div>
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
                        <option value="zetta" selected>Zetta</option>
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
                            <input id="tourist-date-01" type="date" placeholder="ДД.ММ.ГГГГ" value="1995-01-16"
                                required>
                            <label for="tourist-date-01">Дата рождения</label>
                        </div>
                        <div class="input">
                            <input id="tourist-passport-01" type="text" placeholder="00000000" value="76000000"
                                required>
                            <label for="tourist-passport-01">Паспорт</label>
                        </div>
                    </div>
                </div>
            </div>
            <button class="button button-link" id="add-tourist">Добавить туриста</button>
            <button class="button" id="generate">Заполнить шаблоны</button>
            <a class="button button-link" id="download">Скачать архив</a>
            <div class="box"></div>
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

const from = document.getElementById('city-from')
const to = document.getElementById('city-to')
from.addEventListener('change', selectFrom)
to.addEventListener('change', selectTo)

console.log(typeof document.getElementById('date-from').value)

document.getElementById('generate').addEventListener('click', generateAll)
document.getElementById('add-tourist').addEventListener('click', addTourist)
document.getElementById('y').addEventListener('change', xyzCheck)
document.getElementById('b').addEventListener('click', xyzCheck)
document.getElementById('download').addEventListener('click', () => {
    createZip()
})

const remember = JSON.parse(localStorage.getItem('remember'))

if (remember == undefined || remember == null) {
    console.log(remember)
} else if(remember.remember) {
    document.getElementById('x').style.display = 'none'
}