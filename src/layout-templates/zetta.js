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


export const zetta = [
    {
        width: 100,
        height: 10,
        x: 351,
        y: 752,
        bgColor: rgb(1, 1, 1),
        textX: 352, 
        textY: 754,
        size: 8,
        textColor: rgb(0, 0, 0),
        description: 'Серийный номер',
        content: () => "TRV-" + randomNumber("0000000000")
    },
    {
        width: 100,
        height: 10,
        x: 109,
        y: 731.7,
        bgColor: rgb(0.86, 0.86, 0.86),
        textX: 111, 
        textY: 733.7,
        size: 8,
        textColor: rgb(0, 0, 0),
        description: 'Страхователь',
        content: (ctx) => ctx.touristList[0].name
    },
    {
        width: 60,
        height: 10,
        x: 121,
        y: 714.7,
        bgColor: rgb(0.86, 0.86, 0.86),
        textX: 124, 
        textY: 717,
        size: 7.5,
        textColor: rgb(0, 0, 0),
        description: 'Дата выдачи',
        content: () => standartDate(today())
    },
    {
        width: 60,
        height: 10,
        x: 278,
        y: 714.7,
        bgColor: rgb(0.86, 0.86, 0.86),
        textX: 280, 
        textY: 717,
        size: 7.5,
        textColor: rgb(0, 0, 0),
        description: 'Период с',
        content: (ctx) => standartDate(ctx.dateFrom.value)
    },
    {
        width: 60,
        height: 10,
        x: 385,
        y: 714.7,
        bgColor: rgb(0.86, 0.86, 0.86),
        textX: 387, 
        textY: 717,
        size: 7.5,
        textColor: rgb(0, 0, 0),
        description: 'Период до',
        content: (ctx) => standartDate(ctx.dateTo.value)
    },
    {
        width: 40,
        height: 10,
        x: 516,
        y: 714.7,
        bgColor: rgb(0.86, 0.86, 0.86),
        textX: 518, 
        textY: 717,
        size: 7.5,
        textColor: rgb(0, 0, 0),
        description: 'Кол-во дней',
        content: (ctx) => dayCount(ctx.dateFrom.value, ctx.dateTo.value)
    },
    {
        width: 140,
        height: 8,
        x: 29.5,
        y: 656,
        bgColor: rgb(1, 1, 1),
        textX: 32, 
        textY: 657.5,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№1 имя',
        content: (ctx) => ctx.touristList[0].name
    },
    {
        width: 45,
        height: 8,
        x: 184,
        y: 656,
        bgColor: rgb(1, 1, 1),
        textX: 185.5, 
        textY: 657.5,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№1 дата',
        content: (ctx) => standartDate(ctx.touristList[0].date)
    },
    {
        width: 40,
        height: 8,
        x: 235,
        y: 656,
        bgColor: rgb(1, 1, 1),
        textX: 236, 
        textY: 657.5,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№1 паспорт',
        content: (ctx) => ctx.touristList[0].passport
    },
    {
        width: 140,
        height: 8,
        x: 29.5,
        y: 644.5,
        bgColor: rgb(1, 1, 1),
        textX: 32, 
        textY: 646,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№2 имя',
        content: (ctx) => ctx.touristList[1] != undefined ? ctx.touristList[1].name : ""
    },
    {
        width: 45,
        height: 8,
        x: 184,
        y: 644.5,
        bgColor: rgb(1, 1, 1),
        textX: 185.5, 
        textY: 646,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№2 дата',
        content: (ctx) => ctx.touristList[1] != undefined ? standartDate(ctx.touristList[1].date) : ""
    },
    {
        width: 40,
        height: 8,
        x: 235,
        y: 644.5,
        bgColor: rgb(1, 1, 1),
        textX: 236, 
        textY: 646,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№2 паспорт',
        content: (ctx) => ctx.touristList[1] != undefined ? ctx.touristList[1].passport : ""
    },
    {
        width: 140,
        height: 8,
        x: 29.5,
        y: 633,
        bgColor: rgb(1, 1, 1),
        textX: 32, 
        textY: 634.5,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№3 имя',
        content: (ctx) => ctx.touristList[2] != undefined ? ctx.touristList[2].name : ""
    },
    {
        width: 45,
        height: 8,
        x: 184,
        y: 633,
        bgColor: rgb(1, 1, 1),
        textX: 185.5, 
        textY: 634.5,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№3 дата',
        content: (ctx) => ctx.touristList[2] != undefined ? standartDate(ctx.touristList[2].date) : ""
    },
    {
        width: 40,
        height: 8,
        x: 235,
        y: 633,
        bgColor: rgb(1, 1, 1),
        textX: 236, 
        textY: 634.5,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№3 паспорт',
        content: (ctx) => ctx.touristList[2] != undefined ? ctx.touristList[2].passport : ""
    },
    {
        width: 140,
        height: 8,
        x: 29.5,
        y: 621.5,
        bgColor: rgb(1, 1, 1),
        textX: 32, 
        textY: 623,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№4 имя',
        content: (ctx) => ctx.touristList[3] != undefined ? ctx.touristList[3].name : ""
    },
    {
        width: 45,
        height: 8,
        x: 184,
        y: 621.5,
        bgColor: rgb(1, 1, 1),
        textX: 185.5, 
        textY: 623,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№4 дата',
        content: (ctx) => ctx.touristList[3] != undefined ? standartDate(ctx.touristList[3].date) : ""
    },
    {
        width: 40,
        height: 8,
        x: 235,
        y: 621.5,
        bgColor: rgb(1, 1, 1),
        textX: 236, 
        textY: 623,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№4 паспорт',
        content: (ctx) => ctx.touristList[3] != undefined ? ctx.touristList[3].passport : ""
    },
    {
        width: 140,
        height: 8,
        x: 29.5,
        y: 610.5,
        bgColor: rgb(1, 1, 1),
        textX: 32, 
        textY: 612,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№5 имя',
        content: (ctx) => ctx.touristList[4] != undefined ? ctx.touristList[4].name : ""
    },
    {
        width: 45,
        height: 8,
        x: 184,
        y: 610.5,
        bgColor: rgb(1, 1, 1),
        textX: 185.5, 
        textY: 612,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№5 дата',
        content: (ctx) => ctx.touristList[4] != undefined ? standartDate(ctx.touristList[4].date) : ""
    },
    {
        width: 40,
        height: 8,
        x: 235,
        y: 610.5,
        bgColor: rgb(1, 1, 1),
        textX: 236, 
        textY: 612,
        size: 6.5,
        textColor: rgb(0, 0, 0),
        description: '№5 паспорт',
        content: (ctx) => ctx.touristList[4] != undefined ? ctx.touristList[4].passport : ""
    },
]