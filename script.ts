class Phone {
    number: string;
    model: string;
    weight: number;

    constructor(phoneNumber: string, phoneModel: string, phoneWeight: number) {
        this.number = phoneNumber;
        this.model = phoneModel;
        this.weight = phoneWeight
    }
}

let catalogPhones: Phone[] = []
let olga: Phone = new Phone('1111', 'xiaomi', 119)
catalogPhones[1] = olga

// let myPhone: Phone = new Phone('+375291309753', 'xiaomi11', 120) //объект класса
// console.log(`вес: ${myPhone.weight}  модель: ${myPhone.model} телефон: ${myPhone.number}`)

// const model: Phone = new Phone()
// const weight: Phone = new Phone()

// console.log(number)
// console.log(model)
// console.log(weight)