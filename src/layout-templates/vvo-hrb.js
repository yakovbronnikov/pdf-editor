import { rgb } from 'pdf-lib'
import { randomNumber, dateFormat } from '../formats.js'


export const vvohrb = [
    {
        width: 80,
        height: 16,
        x: 480,
        y: 785,
        bgColor: rgb(1, 1, 1),
        textX: 487, 
        textY: 788,
        size: 16,
        textColor: rgb(0, 0, 0),
        description: 'Номер брони',
        content: 'randomNumber("0A0A0A")'
    },
    {
        width: 230,
        height: 15,
        x: 18,
        y: 699,
        bgColor: rgb(1, 1, 1),
        textX: 20, 
        textY: 701.5,
        size: 14,
        textColor: rgb(0, 0, 0),
        description: 'Имя туристa',
        content: 'tourist.name'
    },
    {
        width: 60,
        height: 10,
        x: 17,
        y: 665,
        bgColor: rgb(1, 1, 1),
        textX: 18, 
        textY: 666.5,
        size: 9,
        textColor: rgb(0, 0, 0),
        description: 'Паспорт',
        content: 'tourist.passport'
    },
    {
        width: 75,
        height: 10,
        x: 17,
        y: 633.5,
        bgColor: rgb(1, 1, 1),
        textX: 18, 
        textY: 635.5,
        size: 9,
        textColor: rgb(0, 0, 0),
        description: 'Номер заказа',
        content: 'randomNumber("000") + " " + randomNumber("0000000000")'
    },
    {
        width: 75,
        height: 10,
        x: 100,
        y: 633.5,
        bgColor: rgb(1, 1, 1),
        textX: 101, 
        textY: 635.5,
        size: 9,
        textColor: rgb(0, 0, 0),
        description: 'Дата покупки',
        content: 'monthNameDate(today(), "en")'
    },
    {
        width: 60,
        height: 10,
        x: 17,
        y: 431,
        bgColor: rgb(1, 1, 1),
        textX: 18, 
        textY: 433.5,
        size: 9,
        textColor: rgb(0.35, 0.35, 0.35),
        description: 'Дата вылета',
        content: 'monthNameDate(dateFrom.value, "en")'
    },
    {
        width: 60,
        height: 10,
        x: 171,
        y: 431,
        bgColor: rgb(1, 1, 1),
        textX: 172, 
        textY: 433.5,
        size: 9,
        textColor: rgb(0.35, 0.35, 0.35),
        description: 'Дата посадки',
        content: 'monthNameDate(dateFrom.value, "en")'
    },
    {
        width: 60,
        height: 10,
        x: 17,
        y: 287,
        bgColor: rgb(1, 1, 1),
        textX: 18, 
        textY: 289.5,
        size: 9,
        textColor: rgb(0.35, 0.35, 0.35),
        description: 'Дата вылета',
        content: 'monthNameDate(dateTo.value, "en")'
    },
    {
        width: 60,
        height: 10,
        x: 171,
        y: 287,
        bgColor: rgb(1, 1, 1),
        textX: 172, 
        textY: 289.5,
        size: 9,
        textColor: rgb(0.35, 0.35, 0.35),
        description: 'Дата посадки',
        content: 'monthNameDate(dateTo.value, "en")'
    },
]