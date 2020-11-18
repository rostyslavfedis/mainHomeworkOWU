// - створити функцію яка виводить масив
    // let array=[1,2,3,5,4,3,21,4,5];

    // function arr(){
    //     console.log(array);
    // }
    // arr();
// - створити функцію яка заповнює масив рандомними числами та виводить його. 
//Для виведення використати попвередню функцію.
// let arrRandom=[];


// function getRandom() {
//     for(i=0; i<10;i ++){
//         let n=(Math.floor(Math.random() * 100));
//     arrRandom.push(n);
//    }
//    console.log(arrRandom);}
// getRandom();

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function tree(a,b,c){
//     let min;
//     if(a<=b && a<=c)  min=a;
//     if(b<=a && b<=c) min=b;
//     if(c<=a && c<=b) min=c;

//     console.log(min);
//     return min;
// }
// let min=tree(12,32,12);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function tree(a,b,c){
//     let max;
//     if(a>=b && a>=c)  max=a;
//     if(b>=a && b>=c) max=b;
//     if(c>=a && c>=b) max=c;

//     console.log(max);
//     return max;
// }
// let max=tree(12,32,11);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function minMax(){
//     let min=arguments[0];
//     let max=arguments[0];
//     for (const item of arguments) {
//         if (item>max)max=item;
//         if (item<min)min=item;
//     }
//     console.log(max);
//     return min;
// }
//  let min =minMax(3,4,57,8,8,65,4,3,2,4565,45,43);
//  console.log(min);
// - створити функцію яка виводить масив
// let array=[1,2,3,5,4,3,21,4,5];

//     function arr(){
//         console.log(array);
//     }
//     arr();
// - створити функцію яка повертає найбільше число з масиву
// let array=[1,2,3,5,4,3,21,4,5];

//     function arr(){
//         let  max=array[0];
//         for (const iterator of array) {
//             if(iterator>max) max=iterator;
            
//         }
//         console.log(max);
//     }
//     arr();
// - створити функцію яка повертає найменьше число з масиву
// let array=[2,3,5,4,3,21,4,5];

//     function arr(){
//         let  min=array[0];
//         for (const iterator of array) {
//             if(iterator<min) min=iterator;
            
//         }
//         console.log(min);
//     }
//     arr();
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let array=[1,2,3,345,54,5667];

//     function arr(){
//         let  sum=0;
//         for (const iterator of array) {
//            sum+=iterator;
            
//         }
//         console.log(sum);
//     }
//     arr();
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//     let array=[10,5,5];
// function arr(){
//         let  sum=0;
//         for (const iterator of array) {
//            sum+=iterator;
           
            
//         }
//         console.log(sum/2);
//     }
//     arr();
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let array = [{
//         brand: 'Iphone',
//         color: 'red',
//         model: 'XR'
//     },
//      {
//         fuel: 'disel',
//         motor: 1.9,
//         '4x4':true
//     },
//     {
//         height:10,
//         width:5,
//         depth:1
//     },
//     {
//         price:10000 ,
//         material: 'leather',
//         double:true
//     },
//     {
//         name:'Wiil',
//         age:25,
//         country:'USA'
//     }]

// function arr(){
//     let num=0;
// for (const iterator of array) {
//     if(typeof iterator==="object"){
//         num++;
//     }
//     }
// console.log(num);
// }
// arr();

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function arr(){
//     let num=0;
// for (const iterator of array) {
//     for (key in iterator) {
//         num++;
//         }
//    }
// console.log(num);
// }


// arr();
// - створити функцію  яка скаладає значення елементів з 
//однаковими індексами  та повертає новий результуючий масив.

// let sum=[];

// function summator(array1,array2){
//     for (let i = 0; i <4; i++) {
//     sum.push(array1[i]+array2[i]);
        
//     }
//     return sum;
    
// }
// let s=summator([1,2,3,4],[2,3,4,5]);
// console.log(s);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let array1=[1,2,3,4];
// function change(arr,i){
//     let array=[...arr];
//     if(i<array.length-1){
//         let temp=array[i];
//         array[i]=array[i+1];
//         array[i+1]=temp;
//     }
//     return array;
// }
// let changeElem=change(array1,1);
// console.log(array1);
// console.log(changeElem);

// *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// function func(arr){
//     let number=[];
//     let zero=[];
//     for (let item of arr) {
//         if(item===0){
//             zero.push(0);
//         }else{
//             number.push(item);
//         }
//     }
//     return number.concat(zero);

// }
// console.log(func([1,0,6,0,3]));

// - Додає в боді блок з текстом "Hello owu"
// function func(a){
//   let div=  document.createElement('div');
//   div.innerText=a;
//   document.body.appendChild(div);
//   return a;
// }
// console.log(func("Hello owu"));
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function func(a,b){
//     let div=  document.createElement(b);
//     div.innerText=a;
//     document.body.appendChild(div);
//     return a,b;
//   }
//   console.log(func("Hello owu",'p'));
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let cars=['opel','nissan','renault','BMW'];
// function car(arr,item){
//     let div=document.getElementById(item);
//     div.innerHTML= arr;
//     return div;
// }
// console.log(car(cars,'list'));



// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// let cars=[{
//         model:'2101',
//         year:1970,
//         motor:1.3,
//         color:'white'
//     },
//     {
//         model:'2102',
//         year:1999,
//         motor:1.5,
//         color:'red'
//     },{
//         model:'2103',
//         year:1972,
//         motor:1.2,
//         color:'black'
//     }];
    
    // function car(item){
    //     let divM=document.getElementById(item);
    //     for (let i = 0; i < cars.length; i++) {
    //         const element = cars [i];
    //          let div1=document.createElement('div');
    //         div1.innerHTML=element.model+element.year+element.motor+element.color;
    //         divM.appendChild(div1);
    //     }
//  }
//     car('list');
   

// Для кожної властивості створити всередені блока автомоблія свій блок
// function car(item){
//     let divM=document.getElementById(item);
//     for (let i = 0; i < cars.length; i++) {
//         const element = cars [i];
//          let div1=document.createElement('div');
//         div1.innerHTML=element.model+' '+element.year+' '+element.motor+' '+element.color;
//         divM.appendChild(div1);
//         for (let a = 0; a < 1; a++) {
//             const element = cars [i];
//              let div55=document.createElement('div');
//              let div56=document.createElement('div');
//              let div57=document.createElement('div');
//              let div58=document.createElement('div');
//             div55.innerHTML=element.model;
//             div56.innerHTML=element.year;
//             div57.innerHTML=element.motor;
//             div58.innerHTML=element.color;
//             div1.appendChild(div55);
//             div1.appendChild(div56);
//             div1.appendChild(div57);
//             div1.appendChild(div58);
//         }
//     }
// }
// car('list');

// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.


// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false}, 
//     {id: 2, name: 'petya', age: 30, status: true}, 
//     {id: 3, name: 'kolya', age: 29, status: true}, 
//     {id: 4, name: 'olya', age: 28, status: false},];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'}, 
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//     {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//     {user_id: 4, country: 'USA', city: 'Miami'},];

// let usersWithCities=[];

// function cities(arr1,arr2){
//     for (const item of arr1) {
//         for (const elem of arr2) {
//             if(item.id===elem.user_id){
//                 item.addrres=elem;
//             }            
//         }
        
//     }
//     usersWithCities.push(arr1);
//     console.log(usersWithCities);
// }
// cities(usersWithId,citiesWithId);




// "Є масив котрий характеризує правила. 
//Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

function interarion(arr,list){
        let divM=document.getElementById(list)
        for (let i = 0; i < arr.length; i++) {
            const element = arr [i];
             let div1=document.createElement('div');
             let div2=document.createElement('div');
            div1.innerHTML=element.title;
            div2.innerHTML=element.body;
            divM.appendChild(div1);
            divM.appendChild(div2);
        }
    console.log(arr);
}
interarion(rules,'list');