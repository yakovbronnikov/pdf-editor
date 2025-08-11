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

import { centeredText } from '../functions.js'



export const mskcan = [
    {
        width: 95,
        height: 24,
        x: 470,
        y: 674,
        bgColor: rgb(1, 1, 1),
        textX: (ctx) => centeredText(ctx.text, 518, ctx.font['robotoBold'], 22),
        textY: 679,
        size: 22,
        textColor: rgb(0, 0, 0),
        description: 'Номер брони',
        font: 'robotoBold',
        content: () => randomNumber("0A0A0A")
    },
    {
        width: 230,
        height: 15,
        x: 15,
        y: 711,
        bgColor: rgb(1, 1, 1),
        textX: 17.5, 
        textY: 713,
        size: 14,
        textColor: rgb(0, 0, 0),
        description: 'Имя туристa',
        font: 'robotoBold',
        content: (ctx) => ctx.tourist.name
    },
    {
        width: 60,
        height: 10,
        x: 16,
        y: 673,
        bgColor: rgb(1, 1, 1),
        textX: 17, 
        textY: 674.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: 'Паспорт',
        font: 'robotoRegular',
        content: (ctx) => ctx.tourist.passport
    },
    {
        width: 100,
        height: 10,
        x: 78,
        y: 673,
        bgColor: rgb(1, 1, 1),
        textX: 80, 
        textY: 674.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: 'Номер заказа',
        font: 'robotoRegular',
        content: () => randomNumber("000") + " " + randomNumber("0000000000")
    },
    {
        width: 75,
        height: 10,
        x: 16,
        y: 770,
        bgColor: rgb(1, 1, 1),
        textX: 17, 
        textY: 771.5,
        size: 9,
        textColor: rgb(0, 0, 0),
        description: 'Дата покупки',
        font: 'robotoRegular',
        content: () => monthNameDate(today(), "ru")
    },
    {
        width: 60,
        height: 10,
        x: 16,
        y: 422,
        bgColor: rgb(1, 1, 1),
        textX: 17, 
        textY: 424,
        size: 8,
        textColor: rgb(0.35, 0.35, 0.35),
        description: 'Дата вылета',
        font: 'robotoRegular',
        content: (ctx) => monthNameDate(ctx.dateFrom.value, "ru")
    },
    {
        width: 60,
        height: 10,
        x: 167,
        y: 422,
        bgColor: rgb(1, 1, 1),
        textX: 168, 
        textY: 424,
        size: 8,
        textColor: rgb(0.35, 0.35, 0.35),
        description: 'Дата посадки',
        font: 'robotoRegular',
        content: (ctx) => monthNameDate(ctx.dateFrom.value, "ru", 1)
    },
    {
        width: 60,
        height: 10,
        x: 16,
        y: 241,
        bgColor: rgb(1, 1, 1),
        textX: 17, 
        textY: 242,
        size: 8,
        textColor: rgb(0.35, 0.35, 0.35),
        description: 'Дата вылета',
        font: 'robotoRegular',
        content: (ctx) => monthNameDate(ctx.dateTo.value, "ru")
    },
    {
        width: 60,
        height: 10,
        x: 167,
        y: 241,
        bgColor: rgb(1, 1, 1),
        textX: 168, 
        textY: 242,
        size: 8,
        textColor: rgb(0.35, 0.35, 0.35),
        description: 'Дата посадки',
        font: 'robotoRegular',
        content: (ctx) => monthNameDate(ctx.dateTo.value, "ru")
    },
]