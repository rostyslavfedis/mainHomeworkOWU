 // - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let area =document.getElementById('area');
// let buton=document.getElementById('button');
// area.oninput=()=>{
//     buton.onclick=()=>{
        
//     localStorage .setItem('key', area.value);
// }
// }
// area.value=localStorage.getItem('key'); 
//________________________________________________________________________________________________________________________ 
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
const form1 = document.getElementById("form1");
getDataForm(form1)
function saveForm(t) {
 setDataForm(t)
}

function setDataForm(tag) {
 for (let i = 0; i < tag.length; i++) {
  const tagElement = tag[i];
  
  if (tagElement.type === 'checkbox' || tagElement.type ==='radio')
   tagElement.checked
    ? tagElement.value = true
    : tagElement.value = false
  localStorage.setItem(tagElement.id, tagElement.value);
 }
}

function getDataForm(tag) {
 for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.hasOwnProperty(tag.children[i]  .id)){
   tag.children[i].value = localStorage.getItem(tag.children[i].id)
   if (tag.children[i].value === 'true'){
    tag.children[i].setAttribute('checked','checked');
   }
  }

 }
}


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let myArea=document.getElementById('myArea1');
// let saveBtn=document.getElementById('saveTxt');
// let historyLeft=document.getElementById('left');
// let historyRight=document.getElementById('right');


// const arr= JSON.parse(localStorage.getItem('key'))||[]
// let index = arr.length-1
// myArea.value = arr[index] || ''
// saveBtn.onclick =()=>{
//     const arr = JSON.parse(localStorage.getItem('key'))||[];
//     arr.push(myArea.value)
//     localStorage.setItem('key', JSON.stringify(arr));
//     console.log(arr)
// }


// historyLeft.onclick=()=>{
//     const arr= JSON.parse(localStorage.getItem('key'))||[]
//     index--
//     myArea.value = arr[index]||'START';
    
// }
// historyRight.onclick=()=>{
//     const arr= JSON.parse(localStorage.getItem('key'))||[]
//     index++
//     myArea.value = arr[index]|| 'END';
    
// }
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
// const ArrayUsers='arrayUsers';
// let tempUser={};
// let saveUsers=document.getElementById('saveUser')
// const forma1=document.forms.forma;

// saveUsers.onclick=ev=>{
// let person={};
//     for (let i = 0; i < forma1.children.length; i++) {
//         const formaElement = forma1.children[i];
//         if(formaElement.name ){
//             person[formaElement.name]=formaElement.value;
//         }
//     }
//     person.id=new Date().getTime();
//     saveUserOnLS(person);
//     setUsersOnDiv(person);
// }
// function saveUserOnLS (user){
//     if(localStorage.hasOwnProperty(ArrayUsers)){
//         let arrayUsers=JSON.parse(localStorage.getItem(ArrayUsers));
//        let find= arrayUsers.find(value=>value.id===user.id);
//        if(find){
//        let filter= arrayUsers.filter(value=>value.id !== user.id);
//        filter.push(user);
//        localStorage.setItem(ArrayUsers, JSON.stringify(filter));
//     }else{
//          arrayUsers.push(user);
//          localStorage.setItem(ArrayUsers, JSON.stringify(arrayUsers))  ;
//        }
//     }else{
//         localStorage.setItem(ArrayUsers, JSON.stringify([user]))
//     }
// }

// function setUsersOnDiv(user){
    
//     let arrayUsers=JSON.parse(localStorage.getItem(ArrayUsers));
//     let div=document.createElement('div');
//     let deleteB=document.createElement('button');
//     let editB=document.createElement('button');


//     for (const i of arrayUsers) {
        
//         div.innerHTML=JSON.stringify(i);
//         deleteB.setAttribute('id','delUs')
//         deleteB.innerText='delete';
//         editB.innerText='edit';
//         div.appendChild(deleteB);
//         div.appendChild(editB);
//     }
//             deleteB.onclick=()=>{
//                 deleteUsers(user.id);
//             }
    
//     document.body.appendChild(div);
// }

// function deleteUsers(id){
//     let parse=JSON.parse(localStorage.getItem(ArrayUsers));
//     let filter= parse.filter(user=>user.id !==id);
//     localStorage.setItem(ArrayUsers, JSON.stringify(filter))
//     location.reload();
// }