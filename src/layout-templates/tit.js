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


export const tit = [
    {
        width: 200,
        height: 10,
        x: 370,
        y: 756,
        bgColor: rgb(1, 1, 1),
        textX: 375, 
        textY: 758,
        size: 8.5,
        textColor: rgb(0, 0, 0),
        description: 'Номер полиса',
        font: 'notoSerif',
        content: () => "№ UBK_DG_VZR25-01/25/02/" + randomNumber("000000")
    },
    {
        width: 60,
        height: 10,
        x: 468,
        y: 738,
        bgColor: rgb(1, 1, 1),
        textX: 469, 
        textY: 740.5,
        size: 7,
        textColor: rgb(0, 0, 0),
        description: 'Дата выдачи',
        font: 'notoSerif',
        content: () => standartDate(today())
    },
    {
        width: 200,
        height: 15,
        x: 172,
        y: 705,
        bgColor: rgb(1, 1, 1),
        textX: 175, 
        textY: 709.5,
        size: 7.5,
        textColor: rgb(0, 0, 0),
        description: 'Cтрахователь',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[0].name + ", " + standartDate(ctx.touristList[0].date)
    },
    {
        width: 90,
        height: 15,
        x: 469,
        y: 705,
        bgColor: rgb(1, 1, 1),
        textX: 471, 
        textY: 709.5,
        size: 7.5,
        textColor: rgb(0, 0, 0),
        description: 'Паспорт срахователя',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[0].passport
    },
    {
        width: 200,
        height: 9,
        x: 40,
        y: 662.5,
        bgColor: rgb(1, 1, 1),
        textX: 41, 
        textY: 664.3,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№1 Имя',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[0].name
    },
    {
        width: 60,
        height: 9,
        x: 245,
        y: 662.5,
        bgColor: rgb(1, 1, 1),
        textX: 245, 
        textY: 664.3,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№1 дата',
        font: 'notoSerif',
        content: (ctx) => standartDate(ctx.touristList[0].date)
    },
    {
        width: 60,
        height: 9,
        x: 320,
        y: 662.5,
        bgColor: rgb(1, 1, 1),
        textX: 321, 
        textY: 664.3,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№1 паспорт',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[0].passport
    },
    {
        width: 200,
        height: 9,
        x: 40,
        y: 651,
        bgColor: rgb(1, 1, 1),
        textX: 41, 
        textY: 652.8,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№2 Имя',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[1] != undefined ? ctx.touristList[1].name : ""
    },
    {
        width: 60,
        height: 9,
        x: 245,
        y: 651,
        bgColor: rgb(1, 1, 1),
        textX: 245, 
        textY: 652.8,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№2 дата',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[1] != undefined ? standartDate(ctx.touristList[1].date) : ""
    },
    {
        width: 60,
        height: 9,
        x: 320,
        y: 651,
        bgColor: rgb(1, 1, 1),
        textX: 321, 
        textY: 652.8,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№2 паспорт',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[1] != undefined ? ctx.touristList[1].passport : ""
    },
    {
        width: 200,
        height: 9,
        x: 40,
        y: 639.5,
        bgColor: rgb(1, 1, 1),
        textX: 41, 
        textY: 641.3,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№3 Имя',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[2] != undefined ? ctx.touristList[2].name : ""
    },
    {
        width: 60,
        height: 9,
        x: 245,
        y: 639.5,
        bgColor: rgb(1, 1, 1),
        textX: 245, 
        textY: 641.3,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№3 дата',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[2] != undefined ? standartDate(ctx.touristList[2].date) : ""
    },
    {
        width: 60,
        height: 9,
        x: 320,
        y: 639.5,
        bgColor: rgb(1, 1, 1),
        textX: 321, 
        textY: 641.3,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№3 паспорт',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[2] != undefined ? ctx.touristList[2].passport : ""
    },
    {
        width: 200,
        height: 9,
        x: 40,
        y: 628,
        bgColor: rgb(1, 1, 1),
        textX: 41, 
        textY: 629.8,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№4 Имя',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[3] != undefined ? ctx.touristList[3].name : ""
    },
    {
        width: 60,
        height: 9,
        x: 245,
        y: 628,
        bgColor: rgb(1, 1, 1),
        textX: 245, 
        textY: 629.8,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№4 дата',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[3] != undefined ? standartDate(ctx.touristList[3].date) : ""
    },
    {
        width: 60,
        height: 9,
        x: 320,
        y: 628,
        bgColor: rgb(1, 1, 1),
        textX: 321, 
        textY: 629.8,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№4 паспорт',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[3] != undefined ? ctx.touristList[3].passport : ""
    },
    {
        width: 200,
        height: 9,
        x: 40,
        y: 616.5,
        bgColor: rgb(1, 1, 1),
        textX: 41, 
        textY: 618.3,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№5 Имя',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[4] != undefined ? ctx.touristList[4].name : ""
    },
    {
        width: 60,
        height: 9,
        x: 245,
        y: 616.5,
        bgColor: rgb(1, 1, 1),
        textX: 245, 
        textY: 618.3,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№5 дата',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[4] != undefined ? standartDate(ctx.touristList[4].date) : ""
    },
    {
        width: 60,
        height: 9,
        x: 320,
        y: 616.5,
        bgColor: rgb(1, 1, 1),
        textX: 321, 
        textY: 618.3,
        size: 6.8,
        textColor: rgb(0, 0, 0),
        description: '№5 паспорт',
        font: 'notoSerif',
        content: (ctx) => ctx.touristList[4] != undefined ? ctx.touristList[4].passport : ""
    },
    {
        width: 105,
        height: 10,
        x: 358,
        y: 563,
        bgColor: rgb(1, 1, 1),
        textX: 360, 
        textY: 565,
        size: 7,
        textColor: rgb(0, 0, 0),
        description: 'Срок страхования',
        font: 'notoSerif',
        content: (ctx) => standartDate(ctx.dateFrom.value) + " - " + standartDate(ctx.dateTo.value)
    },
    {
        width: 40,
        height: 8,
        x: 388,
        y: 548,
        bgColor: rgb(1, 1, 1),
        textX: 390, 
        textY: 549,
        size: 7,
        textColor: rgb(0, 0, 0),
        description: 'Кол-во дней',
        font: 'notoSerif',
        content: (ctx) => dayCount(ctx.dateFrom.value, ctx.dateTo.value)
    },
]