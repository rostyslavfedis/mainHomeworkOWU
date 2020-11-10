// - создать массив с 20 числами.
// const number=[4,6,8,90,78,55,17,59,47,444,895,2235,48,97,24,123,71,65,34,88];
//_______________________________________________________________________________________

// -- при помощи метода sort и колбека  отсортировать массив.
// const number=[4,6,8,90,78,55,17,59,47,444,895,2235,48,97,24,123,71,65,34,88];
//     let sort=number.sort((a,b)=>{
//         return a-b;
//     });
//     console.log(sort);
//_______________________________________________________________________________________

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// const number=[4,6,8,90,78,55,17,59,47,444,895,2235,48,97,24,123,71,65,34,88];
//     let sort=number.sort((a,b)=>{
//         return a-b;
//     });
//     console.log(sort);
//_______________________________________________________________________________________
// -- при помощи filter получить числа кратные 3
// const number=[4,6,8,90,78,55,17,59,47,444,895,2235,48,97,24,123,71,65,34,88];

// let kratne=number.filter(value=>value%3===0);
// console.log(kratne);
//_______________________________________________________________________________________

// -- при помощи filter получить числа кратные 10
// const number=[4,6,8,90,78,55,17,59,47,444,895,2235,48,97,24,123,71,65,34,88];

// let kratne=number.filter(value=>value%10===0);
// console.log(kratne);
//_______________________________________________________________________________________

// -- перебрать (проитерировать) массив при помощи foreach()
// const number=[4,6,8,90,78,55,17,59,47,444,895,2235,48,97,24,123,71,65,34,88];
// const newArray=[];
// let iteration=number.forEach(value=>{
//     newArray.push(value);
// });
// console.log(newArray);
//_______________________________________________________________________________________

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// const numbers=[4,6,8,90,78,55,17,59,47,444,895,2235,48,97,24,123,71,65,34,88];
// const newNumbers=[];

// let step=numbers.map((value)=>{
    
//     newNumbers.push(value*3)
// })
// console.log(newNumbers);
//_______________________________________________________________________________________
// - создать массив со словами на 15-20 элементов.
// let words=['Barbara ',' Belinda',' Agatha',' Amelia','Valentine ',' Gabriel','  Daniella','  Jane',' Ginevra',' Zachary','  Evangeline',' Isabella','Camilla ',' Caroline',' Leona'];
//_______________________________________________________________________________________


// -- отсортировать его по алфавиту в восходящем порядке.
// let words=['Barbara ','Belinda','Agatha','Amelia','Valentine ','Gabriel','Daniella','Jane','Ginevra','Zachary','Evangeline','Isabella','Camilla ','Caroline','Leona'];
// let sort=words.sort((a,b)=>{
//     if(a>b){
//         return 1;
//     }
//     return -1;
// });
// console.log(sort);
//_______________________________________________________________________________________

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let words=['Barbara ','Belinda','Agatha','Amelia','Valentine ','Gabriel','Daniella','Jane','Ginevra','Zachary','Evangeline','Isabella','Camilla ','Caroline','Leona'];
// let sort=words.sort((a,b)=>{
//     if(a>b){
//         return -1;
//     }
//     return 1;
// });
// console.log(sort);
//_______________________________________________________________________________________

// -- отфильтровать слова длиной менее 4х символо
// let words=['Barbara ','Belinda','Agatha','Amelia','Valentine ','Gabriel','Daniella','Jane','Ginevra','Zachary','Evangeline','Isabella','Camilla ','Caroline','Leona'];
// let fourW=words.filter(value=>value.length<=4);
    
    
// console.log(fourW);
//_______________________________________________________________________________________
    
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let words=['Barbara ','Belinda','Agatha','Amelia','Valentine ','Gabriel','Daniella','Jane','Ginevra','Zachary','Evangeline','Isabella','Camilla ','Caroline','Leona'];
//  let attention=words.map((value)=>{
//      return value+'!';
//  })
//  console.log(attention);
//_______________________________________________________________________________________

// let users = [ 
// {name: 'vasya', age: 31, status: false}, 
// {name: 'petya', age: 30, status: true}, 
// {name: 'kolya', age: 29, status: true}, 
// {name: 'olya', age: 28, status: false}, 
// {name: 'max', age: 30, status: true}, 
// {name: 'anya', age: 31, status: false}, 
// {name: 'oleg', age: 28, status: false}, 
// {name: 'andrey', age: 29, status: true}, 
// {name: 'masha', age: 30, status: true}, 
// {name: 'olya', age: 31, status: false}, 
// {name: 'max', age: 31, status: true} ];
// let usersWithId=[];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sort=users.sort((a,b)=>{
//     return a.age-b.age;
// })
// console.log(sort);
// let sort=users.sort((a,b)=>{
//     return b.age-a.age;
// })
// console.log(sort);
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sort=users.sort((a,b)=>{
//     return a.name.length-b.name.length;
// })
// console.log(sort);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let addIdToUsers = JSON.parse(JSON.stringify(users));
// addIdToUsers = addIdToUsers.map((value, index) => {
//     value.id = index;
//     return value;
// })
// console.log(addIdToUsers);


// - відсортувати його за індентифікатором
// let sortedId=addIdToUsers.sort((a,b)=>{
//     return a.id-b.id;

// })
// console.log(addIdToUsers);



   
