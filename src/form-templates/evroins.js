export const evroinsForm = `
    <div class="input">
        <input id="number" type="text" placeholder="Введите номер" required>
        <label for="number">Номер полиса</label>
    </div>

    <h3>Страхователь</h3>

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

    <h3>Список застрахованных</h3>

    <input id="insured-01" type="text" value="1" style="display:none;">

    <div class="input">
        <input id="insured-01-name" type="text" placeholder="Имя и фамилия" required>
        <label for="insured-01-name">Застрахованный №1</label>
    </div>

    <div class="input">
        <input id="insured-01-date" type="text" placeholder="Введите дату" required>
        <label for="insured-01-date">Дата рождения</label>
    </div>

    <input id="insured-02" type="text" value="2" style="display:none;">

    <div class="input">
        <input id="insured-02-name" type="text" placeholder="Имя и фамилия" required>
        <label for="insured-02-name">Застрахованный №2</label>
    </div>

    <div class="input">
        <input id="insured-02-date" type="text" placeholder="Введите дату" required>
        <label for="insured-02-date">Дата рождения</label>
    </div>

    <input id="insured-03" type="text" value="3" style="display:none;">

    <div class="input">
        <input id="insured-03-name" type="text" placeholder="Имя и фамилия" required>
        <label for="insured-03-name">Застрахованный №3</label>
    </div>

    <div class="input">
        <input id="insured-03-date" type="text" placeholder="Введите дату" required>
        <label for="insured-03-date">Дата рождения</label>
    </div>

    <h3>Остальное</h3>

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
`