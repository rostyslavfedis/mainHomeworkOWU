// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let click=document.getElementById('main-button');
// let div=document.getElementById('text');
// click.onclick=function(){
//     div.style.display='none';
// }
//__________________________________________________________________________________________________________________________________________
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let click=document.getElementById('main-button');
// click.onclick=function(){
//     click.style.display='none';
// }
//__________________________________________________________________________________________________________________________________________

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let click=document.querySelectorAll('#submit');
// document.forms.myForm.someText.oninput=()=>{
//    let age= document.forms.myForm.someText.value ;
//    document.forms.myForm.submit.onclick=()=>{
//           if (age<18){
//        alert('You are not 18 years old!!!!');
//    } 
//    }
// }
//__________________________________________________________________________________________________________________________________________

// - Создайте меню, которое раскрывается/сворачивается при клике 
// let click=document.getElementById('btn');
// let div=document.getElementById('main-menu');
// let hideMenu=false;
// click.onclick=function(){
//     if(hideMenu){
//         div.style.opacity='0';
//         hideMenu=false
//     }else{
//         div.style.opacity='1';
//         hideMenu=true;
//     }
//      }
//__________________________________________________________________________________________________________________________________________

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let array=[
//     {title : 'lorem0', body:'lorem ipsum dolo sit ameti',number:1},
//     {title : 'lorem1', body:'lorem ipsum dolo sit ameti',number:2},
//     {title : 'lorem2', body:'lorem ipsum dolo sit ameti',number:3},
//     {title : 'lorem3', body:'lorem ipsum dolo sit ameti',number:4}
// ]
// for (let item of array) {
//     let object1=document.createElement('div');
//     object1.setAttribute('id',`div${item.number}`)
//     object1.innerHTML=item.title+' '+ item.body;
//     let btn=document.createElement('button');
//     btn.innerText='remove'
//     btn.setAttribute('id',`buttonAray${item.number}`)
//     object1.appendChild(btn);
//     document.body.appendChild(object1);
//     let but=document.getElementById(`buttonAray${item.number}`);
//     let dika=document.getElementById(`div${item.number}`)
//     but.onclick=()=>{
//         dika.style.display='none'
//     }   
   
// }
//__________________________________________________________________________________________________________________________________________

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

    
// let{someText1,someText11}=document.forms.form1.elements
// let{someText2,someText22}=document.forms.form2.elements

// let click=document.getElementById('but');


// click.onclick=()=>{
//     console.log(someText1.value);
//     console.log(someText11.value);
//     console.log(someText2.value);
//     console.log(someText22.value);
// }
//__________________________________________________________________________________________________________________________________________

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// const divTable = document.createElement('table');
// document.body.appendChild(divTable)

// let myTable= (row,col,ch)=>{
//     for (let i = 0; i < +row; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < +col; j++) {
//             const td = document.createElement('td');
//             td.innerText = ch;
//             tr.appendChild(td)
//         }
//         divTable.appendChild(tr)
//     }
// }

// myTable(5,6,'table')




// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// const divTable = document.createElement('table');
// document.body.appendChild(divTable)

// document.getElementById('create').onclick = () => {
//     const {row, col, ch} = document.forms.table.elements;
//     for (let i = 0; i < +row.value; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < +col.value; j++) {
//             const td = document.createElement('td');
//             td.innerText = ch.value;
//             tr.appendChild(td)
//         }
//         divTable.appendChild(tr)
//     }
// }
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.










//__________________________________________________________________________________________________________________________________________
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// let badWords=['бля','ска','пздц'];
// let btn=document.getElementById('wordsB')


// document.getElementById('words').oninput=()=>{
// let chack=document.getElementById('words').value;
// btn.onclick=()=>{
//     let some=badWords.some(item=>{
//         if(item==chack){
//         alert('!!!!!!!!!')}
//     });
      
//        }
//         }
// __________________________________________________________________________________________________________________________________________
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let badWords=['бля','ска','пздц'];
// let btn=document.getElementById('sentenceButton')


// document.getElementById('sentence').oninput=()=>{
// let chack=document.getElementById('sentence').value;
// btn.onclick=()=>{
//     let some=badWords.some(item=>item==chack)
//         alert('!!!!!!!!!')
    
      
//        }
//         }
// __________________________________________________________________________________________________________________________________________

// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let cbx1=document.getElementById('chackbox1');
// let cbx2=document.getElementById('chackbox2');
// let cbx3=document.getElementById('chackbox3');

// cbx1.onchange=()=>{
//     let status=usersWithAddress.filter(value=>value.status===false);
// let div=document.createElement('div');
// div.innerHTML=JSON.stringify(status);
// document.body.appendChild(div);
// }
// cbx2.onchange=()=>{
//     let age=usersWithAddress.filter(value=>value.age>29);
//     let div1=document.createElement('div');
//     div1.innerHTML=JSON.stringify(age);
//     document.body.appendChild(div1);
// }
// cbx3.onchange=()=>{
//     let city=usersWithAddress.filter(value=>value.address.city==='Kyiv');
//     let div2=document.createElement('div');
//     div2.innerHTML=JSON.stringify(city);
//     document.body.appendChild(div2);
// }

