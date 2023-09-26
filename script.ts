class Phone {
    number: string;
    model: string;
    weight: number;

    constructor(phoneNumber: string, phoneModel: string, phoneWeight: number) {
        this.number = phoneNumber;
        this.model = phoneModel;
        this.weight = phoneWeight
    }

    receiveCall(name: string) {
        console.log(`Звонит ${name} на телефоне ${this.model}. Вес ${this.weight}`)
    }
}

let catalogPhones: Phone[] = new Array(10) //создание массива определённой длины

let olgaPhone: Phone = new Phone('1111', 'xiaomi', 119)
catalogPhones[0] = olgaPhone

for (let index = 0; index < catalogPhones.length; index++) {
    catalogPhones[index] = new Phone('1111', 'xiaomi', 119);
    catalogPhones[index].weight = catalogPhones[index].weight + index
}

let sergeyPhone = catalogPhones[4];
sergeyPhone.model = `samsung`

for (let index = 0; index < catalogPhones.length; index++) {
    console.log(catalogPhones[index], `индекс массива = ${index}`);
}

olgaPhone.receiveCall('Olga')

let namesOfCalling: string[] = [`Алексей`, `Сергей`, `Ира`, `Петра`, `Роберт`, `Аги`, `Лена`, `Оля Б.`, `Сергей Ф.`, `Паша`]
console.log(namesOfCalling)


// for (let index = 0; index < catalogPhones.length; index++) {    //задача 5, решение правильное
//     catalogPhones[index].receiveCall(namesOfCalling[index])
// }

// catalogPhones.forEach((catalogPhones[index], index: number) => {                         1.ВАРИАНТ
//     catalogPhones[index].receiveCall(namesOfCalling[index]
// });

// receiveCall.forEach((catalogPhones[index], index: number) => {                         //2.ВАРИАНТ
//         catalogPhones[index].receiveCall(namesOfCalling[index]
//     });

//forEach стрелочная функция 2 параметра элемент массива и 2ой параметр индекс

// scores.forEach((value, ind) => {
    // console.log(`Работаем с ${ind} элементом массива. Его значение = ${value}`)
//     if (value > max) {   //здесь считать значение max
//         max = value
//         overMax++
//         console.log(`  Число превышений максимума = ${overMax}`)
//     }
//     if (value < min) {
//         min = value
//         overMin++
//         console.log(`  Число превышений минимума = ${overMin}`)
//     }
// })