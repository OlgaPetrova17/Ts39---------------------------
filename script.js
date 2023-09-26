"use strict";
class Phone {
    constructor(phoneNumber, phoneModel, phoneWeight) {
        this.number = phoneNumber;
        this.model = phoneModel;
        this.weight = phoneWeight;
    }
    receiveCall(name) {
        console.log(`Звонит ${name} на телефоне ${this.model}. Вес ${this.weight}`);
    }
}
let catalogPhones = new Array(10); //создание массива определённой длины
let olgaPhone = new Phone('1111', 'xiaomi', 119);
catalogPhones[0] = olgaPhone;
for (let index = 0; index < catalogPhones.length; index++) {
    catalogPhones[index] = new Phone('1111', 'xiaomi', 119);
    catalogPhones[index].weight = catalogPhones[index].weight + index;
}
let sergeyPhone = catalogPhones[4];
sergeyPhone.model = `samsung`;
for (let index = 0; index < catalogPhones.length; index++) {
    console.log(catalogPhones[index], `индекс массива = ${index}`);
}
olgaPhone.receiveCall('Olga');
let namesOfCalling = [`Алексей`, `Сергей`, `Ира`, `Петра`, `Роберт`, `Аги`, `Лена`, `Оля Б.`, `Сергей Ф.`, `Паша`];
console.log(namesOfCalling);
// for (let index = 0; index < catalogPhones.length; index++) {    //задача 5
//     catalogPhones[index].receiveCall(namesOfCalling[index])
// }
catalogPhones.forEach(element => {
});
//forEach стрелочная функция 2 параметра элемент массива и 2ой параметр индекс
//# sourceMappingURL=script.js.map