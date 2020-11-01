// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let elem0 = document.getElementById('content');
console.log(elem0.textContent);

// - отримує текст з блоку з id "rules"
let elem1 = document.getElementById('rules');
console.log(elem1.textContent);
// - замініть текст параграфа з id 'content' на будь-який інший
let change0=document.getElementById('content');
change0.textContent="Task to change the text. RULES:";
document.write(change0);
// - замініть текст параграфа з id 'rules' на будь-який інший
let change1=document.getElementById('rules');
change1.textContent='rules1  rules2  rules3';
document.write(change1);


// - змініть кожному елементу колір фону на червоний
let color=document.getElementsByTagName('div');
for (const i of color) {
    console.log(i)
i.style.backgroundColor = 'red';
}

// - змініть кожному елементу колір тексту на синій
let color1=document.getElementsByTagName('div');
for (const i of color1) {
    console.log(i)
i.style.color = 'blue';
}

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
 let elem2=document.getElementsByClassName('fc bp');
console.log(elem2);

// - отримати всі елементи з класом fc_rules
let data = document.getElementsByClassName('fc_rules');
console.log(data);

// - поміняти колір тексту у всіх елементів fc_rules на червоний
let color2=document.getElementsByTagName('li');
for (const i of color2) {
    console.log(i)
i.style.color = 'red';
}