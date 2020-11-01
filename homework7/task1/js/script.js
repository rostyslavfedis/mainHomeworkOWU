// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу


//dog 
let dog = {
    name: "Lord",
    age: 5,
    color: "black",
    "likes to play": true,
    temper: "trained"
}
console.log(dog);

//man
let man = {
    name: "Rostyk",
    age: 19,
    education: "unfinished higher",
    car: null,
    birthplace: "Stryi"

}
console.log(man);

//car
let car = {
    brand: "opel",
    model: "astra",
    motor: 1.9,
    fuel: "disel",
    color: "black"
}
console.log(car);

//apartment
let apartment = {
    price: 30000 + "$",
    rooms: 3,
    placing: "center",
    square: 120 + " sq.m.",
    floor: "second"
}
console.log(apartment);

//book
let book = {
    title: "NIKE",
    author: "Fill Nite",
    language: "us",
    pages: 512,
    year: 2016,
}
console.log(book);

//-- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let arrDog = ['Bulldog', ' doberman', ' pug', ' poodle', ' fox terrier.']
console.log(arrDog);

let arrMan = ['Oleg', ' Dima', ' Max', ' Ivan', ' Den.']
console.log(arrMan);

let arrCars = ['Renault', ' Opel', ' Nissan', ' Fiat', ' BMW.']
console.log(arrCars);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

let house = {
    floor: ['garage', 'first', 'second', 'loft'],
    location: {
        street: 'Shevchenka',
        city: 'Stryi',
        country: 'Ukraine',
    },
    type: "pivat",
    price: 200000 + ' $',
    square: 300 + 'sq.m.',
}
console.log(house);


let driver = {
    car: ['Skoda', 'BMW', 'Opel'],
    salary: 1250 + '$',
    corporation: {
        name: "BestDrivers",
        location: "UKR Kiev",
        profit:10000+'$' ,
    },
    married: true,
    children: true
}
console.log(driver);

let plasticine={
    color:['red','blue','green','white','black'],
    compound:{
        'natural ingredients':true,
        'plasticity':false,
        component:'clay'
    },
    inventor:'William Harbut',
    year:1897,
    country:'Germany'
}
console.log(plasticine);

let table={
    price:100+'$',
    style:'loft',
    size:{
        height:60+'cm',
        width:100+'cm',
        depth:50+'cm'
    },
    colorDateils:['legs',['black'],'slab',['brown']],
    producer:'IKEA'
}
console.log(table);

let bag={
    producer:'ZARA',
    color:['black','white'],
    'natural leather':true,
    price:177.45+'$',
    storehouse:{
        Lviv:'FORUM LVOV',
        Kyiv:'KHRESHATIK, 23',
        Kharkov:'DAFI'
    }
}
console.log(bag);

// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
            ];

console.log(users[7].status);   //andreyStatus
console.log(users[4].status,users[10].status);   //max'sStatus 
console.log(users[9].name);   //olyaName
console.log(users[2].name);   //kolyaName
console.log(users[6].age);   //olegAge
console.log(users[3].age,users[9].age);   //olyaAge
console.log(users[4].age+' '+users[4].name);    //maxNameAge
console.log(users[5].age+' '+users[5].status);  // anyaNameAge





