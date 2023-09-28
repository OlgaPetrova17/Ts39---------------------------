"use strict";
class Phone {
    constructor(phoneNumber, phoneModel, phoneWeight) {
        this.number = phoneNumber;
        this.model = phoneModel;
        this.weight = phoneWeight;
    }
    receiveCall(name, person) {
        if (person === undefined) {
            console.log(`Звонит ${name} на телефоне ${this.model}. Вес ${this.weight}`);
        }
        else
            console.log(`Вес телефона  = ${person.weight} граммов. На него звонит ${name} с телефона с номером ${person.number} и моделью телефона ${person.model}`);
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
for (let index = 0; index < catalogPhones.length; index++) { //задача 5, решение правильное
    catalogPhones[index].receiveCall(namesOfCalling[index]);
}
function handlePhone(pm, r) {
    // pm.weight = 1378 +  pm.weight 
    pm.weight = 1638 - pm.weight;
}
catalogPhones.forEach(handlePhone);
catalogPhones.forEach((ph, index) => {
    ph.receiveCall(namesOfCalling[index]);
});
let hardPhones = catalogPhones.filter((a) => a.weight > 1500);
hardPhones.sort((g, b) => b.weight - g.weight);
hardPhones.forEach((nameAny, index) => {
    nameAny.receiveCall(namesOfCalling[index], nameAny);
});
//forEach стрелочная функция 2 параметра элемент массива и 2ой параметр индекс
// scores.forEach((value, ind) => {
//     console.log(`Работаем с ${ind} элементом массива. Его значение = ${value}`)
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
// function printString(x: string, y: string, callbackfunction2: (a: string, b: string) => string): void{
//     console.log(`Строка = ${callbackfunction2(x, y)}`);
// }
// function example1(name: string, phone: string): string{
//     return`Звонит ${name} с телефона ${phone}`
// }
// function example2(city: string, street: string): string{
//     return`Звонят из города ${city}, с улицы ${street}`
// }
// function example3(numberOfHouse: string, nomberOfFlat: string): string{
//     return `****** ${numberOfHouse}, ********** ${nomberOfFlat}`
// }
// printString(`оля`, `23334546`, example1)
// // printString(`Будапешт`, `Байза`, example2)
// // printString(`8`, `4/2`, example3)
// printString(`оля`, `23334546`, example2)
// printString(`оля`, `23334546`, example3)
// function printString2(x: number, y: number, callbackfunction1: (a: string, b: string) => string, callbackfunction2: (a: string, b: string) => string): void{
//    console.log(`-------`);
//    console.log(`Параметр x = ${x}, Результат функции1 = ${   callbackfunction1(x.toString(), `XXX`)    }`);
//    console.log(`Параметр y = ${y}, Результат функции2 = ${   callbackfunction2(`YYY`, y.toString())    }`);
// }
// printString2(21, 7, example3, (p1, p2) => {       //стрел.функ.используется как параметр
//     let hello = `HELLO`
//     return hello
// })
// printString2(21, 7, example3, (p1, p2) => `Моя стрелочная функция p1+p2 = ${p1 + p2}`
// )
//# sourceMappingURL=script.js.map