import { rgb } from 'pdf-lib'
import { randomNumber, dateFormat } from '../formats.js'


export const pek = [
    {
        width: 70,
        height: 12,
        x: 497,
        y: 796,
        bgColor: rgb(1, 1, 1),
        textX: 497, 
        textY: 799,
        size: 9,
        textColor: rgb(0, 0.61, 1),
        description: 'Код подтверждения',
        content: 'randomNumber("0000") + "." + randomNumber("000") + "." + randomNumber("000")'
    },
    {
        width: 60,
        height: 12,
        x: 449,
        y: 784,
        bgColor: rgb(1, 1, 1),
        textX: 450, 
        textY: 786.5,
        size: 9,
        textColor: rgb(0, 0.61, 1),
        description: 'ПИН-код',
        content: 'randomNumber("0000")'
    },
    {
        width: 35,
        height: 20,
        x: 343,
        y: 744,
        bgColor: rgb(0.95, 0.95, 0.95),
        textX: 345, 
        textY: 746,
        size: 18.5,
        textColor: rgb(0, 0, 0),
        description: 'Заезд - день',
        content: 'dateFormat(dateFrom.value).day'
    },
    {
        width: 35,
        height: 9,
        x: 349,
        y: 733,
        bgColor: rgb(0.95, 0.95, 0.95),
        textX: 350, 
        textY: 734,
        size: 8,
        textColor: rgb(0, 0, 0),
        description: 'Заезд - месяц',
        content: 'dateFormat(dateFrom.value).monthName.en'
    },
    {
        width: 35,
        height: 8,
        x: 344,
        y: 721.5,
        bgColor: rgb(0.95, 0.95, 0.95),
        textX: 345, 
        textY: 723.5,
        size: 7,
        textColor: rgb(0.5, 0.5, 0.5),
        description: 'Заезд - день недели',
        content: 'dateFormat(dateFrom.value).weekday.en'
    },
    {
        width: 35,
        height: 20,
        x: 425,
        y: 744,
        bgColor: rgb(0.95, 0.95, 0.95),
        textX: 426, 
        textY: 746,
        size: 18.5,
        textColor: rgb(0, 0, 0),
        description: 'Выезд - день',
        content: 'dateFormat(dateTo.value).day'
    },
    {
        width: 35,
        height: 9,
        x: 430,
        y: 733,
        bgColor: rgb(0.95, 0.95, 0.95),
        textX: 431, 
        textY: 734,
        size: 8,
        textColor: rgb(0, 0, 0),
        description: 'Выезд - месяц',
        content: 'dateFormat(dateTo.value).monthName.en'
    },
    {
        width: 35,
        height: 8,
        x: 425,
        y: 721.5,
        bgColor: rgb(0.95, 0.95, 0.95),
        textX: 426, 
        textY: 723.5,
        size: 7,
        textColor: rgb(0.5, 0.5, 0.5),
        description: 'Выезд - день недели',
        content: 'dateFormat(dateTo.value).weekday.en'
    },
    {
        width: 30,
        height: 20,
        x: 529,
        y: 744,
        bgColor: rgb(0.95, 0.95, 0.95),
        textX: 530, 
        textY: 746,
        size: 18.5,
        textColor: rgb(0, 0, 0),
        description: 'Кол-во ночей',
        content: 'String(dayCount(dateFrom.value, dateTo.value))'
    },
    {
        width: 160,
        height: 40,
        x: 390,
        y: 327,
        bgColor: rgb(1, 1, 1),
        description: 'Стоимость отмены'
    },
    {
        width: 300,
        height: 10,
        x: 40,
        y: 390,
        bgColor: rgb(1, 1, 1),
        description: 'Гости'
    },
]