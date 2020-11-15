// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

    
        

let arrH2=document.getElementsByTagName('h2');
let content=document.getElementById('content');
let wrap=document.getElementById('wrap');
let ul=document.createElement('ul')
let divForMenu=document.createElement('div')
for (let i = 0; i < arrH2.length; i++) {
let li=document.createElement('li');
let a=document.createElement('a');
let myID='myID'+i;
a.href='#'+myID;
arrH2[i].setAttribute('id','myID');
a.innerHTML=arrH2[i].innerText;
li.appendChild(a);
ul.appendChild(li);
    
}

divForMenu.appendChild(ul);
divForMenu.setAttribute('id','menuDiv')
content.appendChild(divForMenu)
divForMenu.style.backgroundColor='black';
a.style.textDecoration='none'























