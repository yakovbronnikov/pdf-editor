// RANDOM NUMBER (ID, BOOKING ETC.)

export function randomNumber(template) {
    return template.split('').map(char => {
        if (char === 'A') {
            return String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
        } else if (char === '0') {
            return Math.floor(Math.random() * 10); // 0-9
        } else {
            return char; // оставляем как есть
        }
    }).join('');
}

// DATE FORMAT

export function dateFormat(inputDate) {
    const date = new Date(inputDate)
    const [year, month, day] = inputDate.split('-')
    let weekday = date.getDay()
    let monthName = date.getMonth()
    let dateList = {
        day: day,
        year: year,
        month: month,
        weekday: dayList[weekday],
        monthName: monthList[monthName]
    }

    return dateList
}

const monthList = [
    {
        ru: 'янв',
        ruCaps: 'ЯНВ',
        en: 'Jan',
        enCaps: 'JAN'
    },
    {
        ru: 'фев',
        ruCaps: 'ФЕВ',
        en: 'Feb',
        enCaps: 'FEB'
    },
    {
        ru: 'мар',
        ruCaps: 'МАР',
        en: 'Mar',
        enCaps: 'MAR'
    },
    {
        ru: 'апр',
        ruCaps: 'АПР',
        en: 'Apr',
        enCaps: 'APR'
    },
    {
        ru: 'мая',
        ruCaps: 'МАЙ',
        en: 'May',
        enCaps: 'MAY'
    },
    {
        ru: 'июн',
        ruCaps: 'ИЮН',
        en: 'Jun',
        enCaps: 'JUN'
    },
    {
        ru: 'июл',
        ruCaps: 'ИЮЛ',
        en: 'Jul',
        enCaps: 'JUL'
    },
    {
        ru: 'авг',
        ruCaps: 'АВГ',
        en: 'Aug',
        enCaps: 'AUG'
    },
    {
        ru: 'сен',
        ruCaps: 'СЕН',
        en: 'Sep',
        enCaps: 'SEP'
    },
    {
        ru: 'окт',
        ruCaps: 'ОКТ',
        en: 'Oct',
        enCaps: 'OCT'
    },
    {
        ru: 'нояб',
        ruCaps: 'НОЯБ',
        en: 'Nov',
        enCaps: 'NOV'
    },
    {
        ru: 'дек',
        ruCaps: 'ДЕК',
        en: 'Dec',
        enCaps: 'DEC'
    },
]


const dayList = [
    {
        ru: 'воскресенье',
        en: 'Sunday'
    },
    {
        ru: 'понедельник',
        en: 'Monday'
    },
    {
        ru: 'вторник',
        en: 'Tuesday'
    },
    {
        ru: 'среда',
        en: 'Wednesday'
    },
    {
        ru: 'четверг',
        en: 'Thursday'
    },
    {
        ru: 'пятница',
        en: 'Friday'
    },
    {
        ru: 'суббота',
        en: 'Saturday'
    },
]


// DAY COUNT

export function dayCount(dateFrom, dateTo) {
    const from = new Date(dateFrom)
    const to = new Date(dateTo)

    const diffTime = Math.abs(from - to);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays
}

export function today() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // месяцы с 0 до 11
    const dd = String(today.getDate()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}`;
}

export function standartDate(date) {
    return dateFormat(date).day + "." + dateFormat(date).month + "." + dateFormat(date).year
}

export function monthNameDate(date, lang) {
    return dateFormat(date).day + " " + dateFormat(date).monthName[lang] + " " + dateFormat(date).year
}

export function monthNameDateOnly(date, lang) {
    return dateFormat(date).day + " " + dateFormat(date).monthName[lang]
}