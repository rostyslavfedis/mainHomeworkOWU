// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let phone = {
//     brand: 'Iphone',
//     color: 'red',
//     model: 'XR'
// }
// let car = {
//     fuel: 'disel',
//     motor: 1.9,
//     '4x4':true
// }
// let picture={
//     height:10,
//     width:5,
//     depth:1
// }
// let sofa={
//     price:10000 ,
//     material: 'leather',
//     double:true
// }
// let man={
//     name:'Wiil',
//     age:25,
//     country:'USA'
// }


// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let house = {
//     floor: ['garage', 'first', 'second', 'loft'],
//     location: {
//         street: 'Shevchenka',
//         city: 'Stryi',
//         country: 'Ukraine',
//     },
//     type: "pivat",
//     price: 200000 + ' $',
//     square: 300 + 'sq.m.',
// }



// let driver = {
//     car: ['Skoda', 'BMW', 'Opel'],
//     salary: 1250 + '$',
//     corporation: {
//         name: "BestDrivers",
//         location: "UKR Kiev",
//         profit:10000+'$' ,
//     },
//     married: true,
//     children: true
// }


// let plasticine={
//     color:['red','blue','green','white','black'],
//     compound:{
//         'natural ingredients':true,
//         'plasticity':false,
//         component:'clay'
//     },
//     inventor:'William Harbut',
//     year:1897,
//     country:'Germany'
// }


// let table={
//     price:100+'$',
//     style:'loft',
//     size:{
//         height:60+'cm',
//         width:100+'cm',
//         depth:50+'cm'
//     },
//     colorDateils:['legs',['black'],'slab',['brown']],
//     producer:'IKEA'
// }


// let bag={
//     producer:'ZARA',
//     color:['black','white'],
//     'natural leather':true,
//     price:177.45+'$',
//     storehouse:{
//         Lviv:'FORUM LVOV',
//         Kyiv:'KHRESHATIK, 23',
//         Kharkov:'DAFI'
//     }
// }

// // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for(let key in phone){
// console.log(key);
// }
// for(let key in car){
//     console.log(key);
// }
// for(let key in picture){
//      console.log(key);
// }
// for(let key in sofa){
//     console.log(key);
// }
// for(let key in man){
//      console.log(key);
// }
// for(let key in house){
//     console.log(key);
// }
// for(let key in driver){
//     console.log(key);
// }
// for(let key in plasticine){
//     console.log(key);
// }
// for(let key in table){
//     console.log(key);
// }
// for(let key in bag){
//     console.log(key);
// }


// // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// document.write(Object.keys(phone));
// document.write(Object.keys(car));
// document.write(Object.keys(picture));
// document.write(Object.keys(sofa));
// document.write(Object.keys(man));
// document.write(Object.keys(house));
// document.write(Object.keys(driver));
// document.write(Object.keys(plasticine));
// document.write(Object.keys(table));
// document.write(Object.keys(bag));
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)
// const cars=[{
//     model:'2101',
//     year:1970,
//     motor:1.3,
//     color:'white'
// },
// {
//     model:'2102',
//     year:1999,
//     motor:1.5,
//     color:'red'
// },{
//     model:'2103',
//     year:1972,
//     motor:1.2,
//     color:'black'
// },{
//     model:'2104',
//     year:1985,
//     motor:1.5,
//     color:'brown'
// },{
//     model:'2105',
//     year:1994,
//     motor:1.6,
//     color:'blue'
// },{
//     model:'2106',
//     year:2000,
//     motor:1.6,
//     color:'dark blue'
// },{
//     model:'2107',
//     year:1999,
//     motor:1.6,
//     color:'dark red'
// },{
//     model:'2108',
//     year:2001,
//     motor:1.4,
//     color:'white'
// },{
//     model:'2109',
//     year:1999,
//     motor:1.6,
//     color:'green'
// },{
//     model:'2110',
//     year:2003,
//     motor:1.6,
//     color:'yellow'
// },
// ];



// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities=[
// {
//  name:'Stryi',
//  population:60000,
//  country:"Ukraine",
//  region:"Lvivska ob."
// },
// {
//     name:'Dnipro',
//     population:990000,
//     country:'Ukraine',
//     region:'Dniprovska ob.'
//    },
//    {
//     name:'Lviv',
//     population:720000,
//     country:'Ukraine',
//     region:"Lvivska ob."
  
//    },
// ]

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars1=[{
    
//         model:'opel',
//         year:2005,
//         motor:2.0,
//         color:'white',
//         driver:{
//             name:'Vasya',
//             age:31,
//             gender: 'male',
//             experience: 5}
//     },
//     {
//         model:'BMW',
//         year:1999,
//         motor:1.9,
//         color:'red',
//         driver:{name:'Ivan',
//         age:30,
//         gender: 'male',
//         experience: 10}

//     },{
//         model:'renault',
//         year:2000,
//         motor:1.9,
//         color:'black',
//         driver:{
//             name:'Petya',
//             age:19,
//             gender: 'male',
//             experience: 1
//         }   
//         }
// ]

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i=0;
// while(i<=cars.length){
    
//     console.log(cars[i]);
//     i++;
// } 
// let a=0;
// while(a<cities.length){
//     console.log(cities[a]);
//     a++;
// }
// let b=0;
// while(b<cars1.length){
//     console.log(cars1[b]);
//     b++;
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for(let i=0; i<cars.length; i++){
//     console.log(cars[i]);
    
//     };
// for(i=0; i<cities.length; i++){
//         console.log(cities[i]);
// }
// for(let i=0; i<cars1.length; i++){
//     console.log(cars1[i]);
//         }
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// let i,a,b=0;
// for(i of cars){
//     console.log(i);
// }
// for(a of cities){
//     console.log(a);
// }
// for(b of cars1){
//     console.log(b);
// }
// - взять объекты из задания 1 и превратить каждый в json.
// let p =JSON.stringify(phone);
// let c =JSON.stringify(car);
// let pic =JSON.stringify(picture);
// let s =JSON.stringify(sofa);
// let m =JSON.stringify(man);

// console.log(s,c,pic,s,m);
// - взять json из задания 11 и превратить их обратно в объекты.
// let q =JSON.parse(p);
// let w =JSON.parse(c);
// let e =JSON.parse(pic);
// let r =JSON.parse(s);
// let t =JSON.parse(m);

// console.log(q,w,e,r,t);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// let i=0;
// for(i of cars){
//     i=JSON.stringify(i)
//     console.log(i);
// }
// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let a=0
// for(a of cities){
//     a=JSON.stringify(a)
//     console.log(a);
// }


// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let arr=[];
// for(item of cars1){
//     item=JSON.stringify(item);
//     arr.push(item);
// }
// console.log(arr);

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
// {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']}, 
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
// {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}];

//  for(let user of users){
//      console.log('name:'+user.name);
//      for(let skill of user.skills){
//          console.log(skill);
//      }
//      }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let newArr=[];
//  for(let user of users){
//      console.log(user);
//      for(let skill of user.skills){
         
//          newArr.push(skill);
//      }
//      }
//      console.log(newArr);
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let array=[];
// for(let i of users){
//     array.push(i.address);
// }
// console.log(array);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for(let user of users){
//     let div=document.createElement('div');
//     div.innerHTML=user.name+user.age+user.status+user.address.city+user.address.country;
//     document.body.appendChild(div);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for(let user of users){
//     let name=document.createElement('div');
//     let age=document.createElement('div');
//     let status=document.createElement('div');
    
//     name.innerHTML=user.name;
//     age.innerHTML=user.age;
//     status.innerHTML=user.status;
 
//     document.body.appendChild(name);
//     document.body.appendChild(age);
//     document.body.appendChild(status);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for(let user of users){
//     let name=document.createElement('div');
//     let age=document.createElement('div');
//     let status=document.createElement('div');
//     let mainAddress=document.createElement('div');
//     let mainAddress1=document.createElement('div');
//     let mainAddress2=document.createElement('div');
//     let mainAddress3=document.createElement('div');
//     name.innerHTML=user.name;
//     age.innerHTML=user.age;
//     status.innerHTML=user.status;
//     mainAddress.innerHTML=user.address.city;
//     mainAddress1.innerHTML=user.address.country;
//     mainAddress2.innerHTML=user.address.street;
//     mainAddress3.innerHTML=user.address.houseNumber;
//     document.body.appendChild(name);
//     document.body.appendChild(age);
//     document.body.appendChild(status);
//     document.body.appendChild(mainAddress);
//     document.body.appendChild(mainAddress1);
//     document.body.appendChild(mainAddress2);
//     document.body.appendChild(mainAddress3);
// }

//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//Записати цей об'єкт в новий масив
//Частковий приклад реультату:
//let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// let usersWithId = [
// {id: 1, name: 'vasya', age: 31, status: false}, 
// {id: 2, name: 'petya', age: 30, status: true}, 
// {id: 3, name: 'kolya', age: 29, status: true},
// {id: 4, name: 'olya', age: 28, status: false},];


// let citiesWithId = [
// {user_id: 3, country: 'USA', city: 'Portland'}, 
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'}, 
// {user_id: 4, country: 'USA', city: 'Miami'},];

// let usersWithCities=[];

// for(const item of usersWithId){
//     for (cities of citiesWithId) {
//         if(item.id==cities.user_id){
//             item.address=cities;
//         }
//     }
// }
// usersWithCities.push(usersWithId);
// console.log(usersWithCities);

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

let divId=document.getElementById('lorem');
let divClass=document.getElementsByClassName('ipsum');
let divTag=document.getElementsByTagName('p');
let innerId=divId.innerText;
let innerClass=divClass.innerText;
let innerTag=divTag.innerText;




// - змінити цей текст використовуючи селектори id, class,  tag
// divId.innerText='change';
// for (let item of divClass){
//     item.innerText="yep";
// }
// for (let elem of divTag){
//     elem.innerText="rec";
// }

  
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// divId.style.width='300px';
// divId.style.height='100px';
// for (item of divClass){
//     item.style.width='300px';
//     item.style.height='100px';
// }for (elem of divTag){
//     elem.style.width='300px';
//     elem.style.height='100px';
// }
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table=document.createElement('table');
// let tr=document.createElement('tr');
// let td1=document.createElement('td');
// let td2=document.createElement('td');
// let td3=document.createElement('td');
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// table.appendChild(tr);

// document.body.appendChild(table);
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table=document.createElement('table');
// for(let i=0; i<10; i++){
//     let tr=document.createElement('tr');
//     table.appendChild(tr);
//     for(a=0; a<3; a++){
//         let td=document.createElement('td');
//         tr.appendChild(td);

//     }
// }
// document.body.appendChild(table);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
let table=document.createElement('table');
for(let i=0; i<10; i++){
    let tr=document.createElement('tr');
    table.appendChild(tr);
    for(a=0; a<5; a++){
        let td=document.createElement('td');
        tr.appendChild(td);

    }
}
document.body.appendChild(table);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

let table=document.createElement('table');
let n=prompt('к-ть стовпців:');
let m=prompt('к-ть рядків:');
for(let i=0; i<n; i++){
    let tr=document.createElement('tr');
    table.appendChild(tr);
    for(a=0; a<m; a++){
        let td=document.createElement('td');
        tr.appendChild(td);

    }
}
document.body.appendChild(table);

