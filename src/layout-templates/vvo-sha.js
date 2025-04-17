import { rgb } from 'pdf-lib'
import { randomNumber, dateFormat } from '../formats.js'


export const vvosha = [
    {
        width: 130,
        height: 25,
        x: 33,
        y: 660,
        bgColor: rgb(1, 1, 1),
        textX: 35, 
        textY: 676.5,
        size: 8,
        textColor: rgb(0, 0, 0),
        description: 'Имя туриста',
        content: 'tourist.name'
    },
    {
        width: 80,
        height: 10,
        x: 165,
        y: 674,
        bgColor: rgb(1, 1, 1),
        textX: 166, 
        textY: 676.5,
        size: 8,
        textColor: rgb(0, 0, 0),
        description: 'Паспорт',
        content: 'tourist.passport'
    },
    {
        width: 80,
        height: 10,
        x: 247,
        y: 674,
        bgColor: rgb(1, 1, 1),
        textX: 248.5, 
        textY: 676.5,
        size: 8,
        textColor: rgb(0, 0, 0),
        description: 'Номер билета',
        content: 'randomNumber("0000000000000")'
    },
    {
        width: 60,
        height: 10,
        x: 338,
        y: 674,
        bgColor: rgb(1, 1, 1),
        textX: 339, 
        textY: 676.5,
        size: 8,
        textColor: rgb(0, 0, 0),
        description: 'S7 priority',
        content: '"S7" + randomNumber("000000000")'
    },
    {
        width: 100,
        height: 16,
        x: 438,
        y: 691,
        bgColor: rgb(0.92, 0.92, 0.92),
        textX: 439.5, 
        textY: 693.5,
        size: 16,
        textColor: rgb(0.93, 0.64, 0),
        description: 'Номер заказа',
        content: 'randomNumber("AA0A0A0")'
    },
    {
        width: 80,
        height: 16,
        x: 438,
        y: 644,
        bgColor: rgb(0.92, 0.92, 0.92),
        textX: 439.5, 
        textY: 646.5,
        size: 16,
        textColor: rgb(0.93, 0.64, 0),
        description: 'Номер бронирования',
        content: 'randomNumber("A0AAAA")'
    },
    {
        width: 100,
        height: 16,
        x: 438,
        y: 597,
        bgColor: rgb(0.92, 0.92, 0.92),
        textX: 439.5, 
        textY: 599.5,
        size: 16,
        textColor: rgb(0.93, 0.64, 0),
        description: 'Дата оформления',
        content: 'monthNameDate(today(), "ru")'
    },
    {
        width: 140,
        height: 16,
        x: 438,
        y: 550,
        bgColor: rgb(0.92, 0.92, 0.92),
        textX: 439.5, 
        textY: 552.5,
        size: 16,
        textColor: rgb(0.93, 0.64, 0),
        description: 'Дата оформления',
        content: '"Подтверждено"'
    },
    {
        width: 70,
        height: 12,
        x: 110,
        y: 463,
        bgColor: rgb(1, 1, 1),
        textX: 112, 
        textY: 464.7,
        size: 11,
        textColor: rgb(0.96, 0.66, 0),
        description: 'Дата вылета',
        content: 'monthNameDateOnly(dateFrom.value, "ru")'
    },
    {
        width: 70,
        height: 12,
        x: 189,
        y: 463,
        bgColor: rgb(1, 1, 1),
        textX: 191, 
        textY: 464.7,
        size: 11,
        textColor: rgb(0.96, 0.66, 0),
        description: 'Дата посадки',
        content: 'monthNameDateOnly(dateFrom.value, "ru")'
    },
    {
        width: 70,
        height: 12,
        x: 110,
        y: 407,
        bgColor: rgb(1, 1, 1),
        textX: 112, 
        textY: 408.7,
        size: 11,
        textColor: rgb(0.96, 0.66, 0),
        description: 'Дата вылета',
        content: 'monthNameDateOnly(dateTo.value, "ru")'
    },
    {
        width: 70,
        height: 12,
        x: 189,
        y: 407,
        bgColor: rgb(1, 1, 1),
        textX: 191, 
        textY: 408.7,
        size: 11,
        textColor: rgb(0.96, 0.66, 0),
        description: 'Дата посадки',
        content: 'monthNameDateOnly(dateTo.value, "ru")'
    },
]