import { rgb } from 'pdf-lib'

export function templateEvroins(firstPage, font, rgb) {


    // Серийный номер 

    firstPage.drawRectangle({
        width: 130,
        height: 15,
        x: 425,
        y: 797,
        color: rgb(1, 1, 1)
    })

    firstPage.drawText(number, {
        x: 426,
        y: 802,
        size: 9,
        color: rgb(0, 0, 0),
        font: font
    });

    // Страхователь

    firstPage.drawRectangle({
        width: 205,
        height: 14,
        x: 29,
        y: 770,
        color: rgb(1, 1, 1)
    })

    firstPage.drawText(name, {
        x: 32,
        y: 776.4,
        size: 7.2,
        color: rgb(0, 0, 0),
        font: font
    });

    // Дата рождения

    firstPage.drawRectangle({
        width: 60,
        height: 14,
        x: 236,
        y: 770,
        color: rgb(1, 1, 1)
    })

    firstPage.drawText(birthDate, {
        x: 240,
        y: 776.4,
        size: 7.2,
        color: rgb(0, 0, 0),
        font: font
    });

    // Паспорт №

    firstPage.drawRectangle({
        width: 75,
        height: 14,
        x: 301,
        y: 770,
        color: rgb(1, 1, 1)
    })

    firstPage.drawText(passport, {
        x: 303,
        y: 776.4,
        size: 7.2,
        color: rgb(0, 0, 0),
        font: font
    });

    // Адрес

    firstPage.drawRectangle({
        width: 186,
        height: 14,
        x: 379,
        y: 770,
        color: rgb(1, 1, 1)
    })

    firstPage.drawText(address, {
        x: 381,
        y: 775.2,
        size: 7.2,
        color: rgb(0, 0, 0),
        font: font
    });

    // Терриитория действия

    firstPage.drawRectangle({
        width: 160,
        height: 14,
        x: 379,
        y: 751,
        color: rgb(1, 1, 1)
    })

    firstPage.drawText(area, {
        x: 381,
        y: 756,
        size: 7.2,
        color: rgb(0, 0, 0),
        font: font
    });

    firstPage.drawRectangle({
        width: 25,
        height: 14,
        x: 541,
        y: 751,
        color: rgb(0, 0, 0)
    })



    // Список застрахованных

    firstPage.drawRectangle({
        width: 14,
        height: 15,
        x: 29,
        y: 733,
        color: rgb(0, 0, 0)
    })

    firstPage.drawRectangle({
        width: 106,
        height: 15,
        x: 45,
        y: 733,
        color: rgb(0, 0, 0)
    })

    firstPage.drawRectangle({
        width: 48,
        height: 15,
        x: 154,
        y: 733,
        color: rgb(0, 0, 0)
    })

    firstPage.drawRectangle({
        width: 14,
        height: 15,
        x: 29,
        y: 716,
        color: rgb(0, 0, 0)
    })

    firstPage.drawRectangle({
        width: 106,
        height: 15,
        x: 45,
        y: 716,
        color: rgb(0, 0, 0)
    })

    firstPage.drawRectangle({
        width: 48,
        height: 15,
        x: 154,
        y: 716,
        color: rgb(0, 0, 0)
    })

    // Сроки поездки

    firstPage.drawRectangle({
        width: 48,
        height: 15,
        x: 401,
        y: 733,
        color: rgb(1, 1, 1)
    })

    firstPage.drawText(dateFrom, {
        x: 402,
        y: 737,
        size: 7.2,
        color: rgb(0, 0, 0),
        font: font
    });

    firstPage.drawRectangle({
        width: 48,
        height: 15,
        x: 473,
        y: 733,
        color: rgb(1, 1, 1)
    })

    firstPage.drawText(dateTo, {
        x: 474,
        y: 737,
        size: 7.2,
        color: rgb(0, 0, 0),
        font: font
    });

    firstPage.drawRectangle({
        width: 25,
        height: 15,
        x: 541,
        y: 733,
        color: rgb(1, 1, 1)
    })

    firstPage.drawText(days, {
        x: 547,
        y: 740,
        size: 7.2,
        color: rgb(0, 0, 0),
        font: font
    });

    // Медицинские расходы

    firstPage.drawRectangle({
        width: 99,
        height: 15,
        x: 421,
        y: 699,
        color: rgb(0, 0, 0)
    })

    // Отмена поездки

    firstPage.drawRectangle({
        width: 99,
        height: 15,
        x: 421,
        y: 682,
        color: rgb(0, 0, 0)
    })

    // Общая премия

    firstPage.drawRectangle({
        width: 186,
        height: 15,
        x: 379,
        y: 662,
        color: rgb(0, 0, 0)
    })

    // Программа страхования

    firstPage.drawRectangle({
        width: 189,
        height: 15,
        x: 107,
        y: 682,
        color: rgb(0, 0, 0)
    })

    // Дата и время выдачи

    firstPage.drawRectangle({
        width: 189,
        height: 15,
        x: 107,
        y: 662,
        color: rgb(0, 0, 0)
    })
}

export const evroinsLayout = [
    {
        width: 130,
        height: 15,
        x: 425,
        y: 797,
        bgColor: rgb(1, 1, 1),
        textX: 426, 
        textY: 802,
        size: 9,
        textColor: rgb(0, 0, 0),
        description: 'Серийный номер'
    },
    {
        width: 205,
        height: 14,
        x: 29,
        y: 770,
        bgColor: rgb(1, 1, 1),
        textX: 32, 
        textY: 776.4,
        size: 7.2,
        textColor: rgb(0, 0, 0),
        description: 'Страхователь'
    },
    {
        width: 60,
        height: 14,
        x: 236,
        y: 770,
        bgColor: rgb(1, 1, 1),
        textX: 240, 
        textY: 776.4,
        size: 7.2,
        textColor: rgb(0, 0, 0),
        description: 'Дата рождения'
    },
    {
        width: 75,
        height: 14,
        x: 301,
        y: 770,
        bgColor: rgb(1, 1, 1),
        textX: 303, 
        textY: 776.4,
        size: 7.2,
        textColor: rgb(0, 0, 0),
        description: 'Паспорт №'
    },
    {
        width: 14,
        height: 15,
        x: 29,
        y: 733,
        bgColor: rgb(1, 1, 1),
        textX: 35, 
        textY: 739.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№1'
    },
    {
        width: 106,
        height: 15,
        x: 45,
        y: 733,
        bgColor: rgb(1, 1, 1),
        textX: 47, 
        textY: 739.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№1 Имя'
    },
    {
        width: 48,
        height: 15,
        x: 154,
        y: 733,
        bgColor: rgb(1, 1, 1),
        textX: 157, 
        textY: 739.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№1 Дата'
    },
    {
        width: 14,
        height: 15,
        x: 29,
        y: 716,
        bgColor: rgb(1, 1, 1),
        textX: 35, 
        textY: 722.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№2'
    },
    {
        width: 106,
        height: 15,
        x: 45,
        y: 716,
        bgColor: rgb(1, 1, 1),
        textX: 47, 
        textY: 722.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№2 Имя'
    },
    {
        width: 48,
        height: 15,
        x: 154,
        y: 716,
        bgColor: rgb(1, 1, 1),
        textX: 157, 
        textY: 722.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№2 Дата'
    },
    {
        width: 14,
        height: 15,
        x: 29,
        y: 699,
        bgColor: rgb(1, 1, 1),
        textX: 35, 
        textY: 705.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№3'
    },
    {
        width: 106,
        height: 15,
        x: 45,
        y: 699,
        bgColor: rgb(1, 1, 1),
        textX: 47, 
        textY: 705.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№3 Имя'
    },
    {
        width: 48,
        height: 15,
        x: 154,
        y: 699,
        bgColor: rgb(1, 1, 1),
        textX: 157, 
        textY: 705.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№3 Дата'
    },
    {
        width: 186,
        height: 14,
        x: 379,
        y: 770,
        bgColor: rgb(1, 1, 1),
        textX: 381, 
        textY: 775.2,
        size: 7.2,
        textColor: rgb(0, 0, 0),
        description: 'Адрес'
    },
    {
        width: 160,
        height: 14,
        x: 379,
        y: 751,
        bgColor: rgb(1, 1, 1),
        textX: 381, 
        textY: 756,
        size: 7.2,
        textColor: rgb(0, 0, 0),
        description: 'Терриитория действия'
    },
    {
        width: 48,
        height: 15,
        x: 401,
        y: 733,
        bgColor: rgb(1, 1, 1),
        textX: 402, 
        textY: 737,
        size: 7.2,
        textColor: rgb(0, 0, 0),
        description: 'Поездка с'
    },
    {
        width: 48,
        height: 15,
        x: 473,
        y: 733,
        bgColor: rgb(1, 1, 1),
        textX: 474, 
        textY: 737,
        size: 7.2,
        textColor: rgb(0, 0, 0),
        description: 'Поездка до'
    },
    {
        width: 25,
        height: 15,
        x: 541,
        y: 733,
        bgColor: rgb(1, 1, 1),
        textX: 547, 
        textY: 740,
        size: 7.2,
        textColor: rgb(0, 0, 0),
        description: 'Количество дней'
    },
]