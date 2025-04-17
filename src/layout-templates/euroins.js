import { rgb } from 'pdf-lib'
import {
    randomNumber,
    dateFormat,
    dayCount,
    standartDate,
    monthNameDate,
    today,
    monthNameDateOnly
} from '../formats.js'


export const euroins = [
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
        description: 'Серийный номер',
        content: () => "E0050-" + randomNumber("000000000")
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
        description: 'Страхователь',
        content: (ctx) => ctx.touristList[0].name
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
        description: 'Дата рождения',
        content: (ctx) => standartDate(ctx.touristList[0].date)
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
        description: 'Паспорт №',
        content: (ctx) => ctx.touristList[0].passport
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
        description: '№1',
        content: '1'
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
        description: '№1 Имя',
        content: (ctx) => ctx.touristList[0].name
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
        description: '№1 Дата',
        content: (ctx) => standartDate(ctx.touristList[0].date)
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
        description: '№2',
        content: (ctx) => ctx.touristList[1] != undefined ? "2" : ""
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
        description: '№2 Имя',
        content: (ctx) => ctx.touristList[1] != undefined ? ctx.touristList[1].name : ""
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
        description: '№2 Дата',
        content: (ctx) => ctx.touristList[1] != undefined ? standartDate(ctx.touristList[1].date) : ""
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
        description: '№3',
        content: (ctx) => ctx.touristList[2] != undefined ? "3" : ""
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
        description: '№3 Имя',
        content: (ctx) => ctx.touristList[2] != undefined ? ctx.touristList[2].name : ""
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
        description: '№3 Дата',
        content: (ctx) => ctx.touristList[2] != undefined ? standartDate(ctx.touristList[2].date) : ""
    },
    {
        width: 14,
        height: 15,
        x: 29,
        y: 682,
        bgColor: rgb(1, 1, 1),
        textX: 35, 
        textY: 688.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№4',
        content: (ctx) => ctx.touristList[3] != undefined ? "4" : ""
    },
    {
        width: 106,
        height: 15,
        x: 45,
        y: 682,
        bgColor: rgb(1, 1, 1),
        textX: 47, 
        textY: 688.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№4 Имя',
        content: (ctx) => ctx.touristList[3] != undefined ? ctx.touristList[3].name : ""
    },
    {
        width: 48,
        height: 15,
        x: 154,
        y: 682,
        bgColor: rgb(1, 1, 1),
        textX: 157, 
        textY: 688.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№4 Дата',
        content: (ctx) => ctx.touristList[3] != undefined ? standartDate(ctx.touristList[3].date) : ""
    },
    {
        width: 14,
        height: 15,
        x: 29,
        y: 665,
        bgColor: rgb(1, 1, 1),
        textX: 35, 
        textY: 671.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№5',
        content: (ctx) => ctx.touristList[4] != undefined ? "5" : ""
    },
    {
        width: 106,
        height: 15,
        x: 45,
        y: 665,
        bgColor: rgb(1, 1, 1),
        textX: 47, 
        textY: 671.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№5 Имя',
        content: (ctx) => ctx.touristList[4] != undefined ? ctx.touristList[4].name : ""
    },
    {
        width: 48,
        height: 15,
        x: 154,
        y: 665,
        bgColor: rgb(1, 1, 1),
        textX: 157, 
        textY: 671.5,
        size: 6.2,
        textColor: rgb(0, 0, 0),
        description: '№5 Дата',
        content: (ctx) => ctx.touristList[4] != undefined ? standartDate(ctx.touristList[4].date) : ""
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
        description: 'Поездка с',
        content: (ctx) => standartDate(ctx.dateFrom.value)
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
        description: 'Поездка до',
        content: (ctx) => standartDate(ctx.dateTo.value)
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
        description: 'Количество дней',
        content: (ctx) => dayCount(ctx.dateFrom.value, ctx.dateTo.value)
    },
    {
        width: 100,
        height: 12,
        x: 107,
        y: 630,
        bgColor: rgb(1, 1, 1),
        textX: 108, 
        textY: 634,
        size: 7.2,
        textColor: rgb(0, 0, 0),
        description: 'Страхователь',
        content: () => standartDate(today(), "en")
    },
]