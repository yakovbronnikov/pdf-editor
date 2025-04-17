import { rgb } from 'pdf-lib'
import { randomNumber, dateFormat } from '../formats.js'


export const route = [
    {
        textX: 84, 
        textY: 656.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№1',
        content: '"1."'
    },
    {
        textX: 112, 
        textY: 656.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№1 Имя',
        content: 'touristList[0].name'
    },
    {
        textX: 396, 
        textY: 656.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№1 Паспорт',
        content: 'touristList[0].passport'
    },
    {
        textX: 84, 
        textY: 631.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№2',
        content: 'if(touristList[1] != undefined){"2."}'
    },
    {
        textX: 112, 
        textY: 631.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№2 Имя',
        content: 'if(touristList[1] != undefined){touristList[1].name}'
    },
    {
        textX: 396, 
        textY: 631.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№2 Паспорт',
        content: 'if(touristList[1] != undefined){touristList[1].passport}'
    },
    {
        textX: 84, 
        textY: 606.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№3',
        content: 'if(touristList[2] != undefined){"3."}'
    },
    {
        textX: 112, 
        textY: 606.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№3 Имя',
        content: 'if(touristList[2] != undefined){touristList[2].name}'
    },
    {
        textX: 396, 
        textY: 606.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№3 Паспорт',
        content: 'if(touristList[2] != undefined){touristList[2].passport}'
    },
    {
        textX: 84, 
        textY: 581.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№4',
        content: 'if(touristList[3] != undefined){"4."}'
    },
    {
        textX: 112, 
        textY: 581.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№4 Имя',
        content: 'if(touristList[3] != undefined){touristList[3].name}'
    },
    {
        textX: 396, 
        textY: 581.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№4 Паспорт',
        content: 'if(touristList[3] != undefined){touristList[3].passport}'
    },
    {
        textX: 84, 
        textY: 556.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№5',
        content: 'if(touristList[4] != undefined){"5."}'
    },
    {
        textX: 112, 
        textY: 556.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№5 Имя',
        content: 'if(touristList[4] != undefined){touristList[4].name}'
    },
    {
        textX: 396, 
        textY: 556.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№5 Паспорт',
        content: 'if(touristList[4] != undefined){touristList[4].passport}'
    },
    {
        textX: 84, 
        textY: 531.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№6',
        content: 'if(touristList[5] != undefined){"6."}'
    },
    {
        textX: 112, 
        textY: 531.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№6 Имя',
        content: 'if(touristList[5] != undefined){touristList[5].name}'
    },
    {
        textX: 396, 
        textY: 531.5,
        size: 10,
        textColor: rgb(0, 0, 0),
        description: '№6 Паспорт',
        content: 'if(touristList[5] != undefined){touristList[5].passport}'
    },
    {
        textX: 305, 
        textY: 433,
        size: 11,
        textColor: rgb(0, 0, 0),
        description: 'Дата с',
        content: 'standartDate(dateFrom.value)'
    },
    {
        textX: 305, 
        textY: 373,
        size: 11,
        textColor: rgb(0, 0, 0),
        description: 'Дата с',
        content: 'standartDate(dateFrom.value) + " - " + standartDate(dateTo.value)'
    },
    {
        textX: 305, 
        textY: 311,
        size: 11,
        textColor: rgb(0, 0, 0),
        description: 'Дата с',
        content: 'standartDate(dateTo.value)'
    },
]