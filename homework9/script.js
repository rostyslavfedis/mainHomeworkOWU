


/*     TASK 1    */
// Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
// let tagName='<a>';
// let tagFunc='Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// let atribute=[{
//     name1:'accesskey',
//     function1:'Активация ссылки с помощью комбинации клавиш.'
// },
// {
//     name1 :'coords',
//     function1:'Устанавливает координаты активной области.'
// }
// ]
// function  Tag(name,func,arr){
//   this.name=name;
//   this.func=func;
//   this.arr=arr;  
// }

// let tag=new Tag(tagName,tagFunc,atribute);
// console.log(tag);

// let tagName='<div>';
// let tagFunc='Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let atribute=[{
//     name1:'align',
//     function1:'Задает выравнивание содержимого тега <div>.'
// },
// {
//     name1:'title ',
//     function1:'Добавляет всплывающую подсказку к содержимому.'
// }
// ]
// function  Tag(name,func,arr){
//   this.name=name;
//   this.func=func;
//   this.arr=arr;  
// }

// let tag=new Tag(tagName,tagFunc,atribute);
// console.log(tag);


// let tagName='<h1>';
// let tagFunc='HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
// let atribute=[{
//     name1:'align',
//     function1:'Определяет выравнивание заголовка.'
// }

// ]
// function  Tag(name,func,arr){
//   this.name=name;
//   this.func=func;
//   this.arr=arr;  
// }

// let tag=new Tag(tagName,tagFunc,atribute);
// console.log(tag);

// function  Tag(name,func,arr){
//   this.name=name;
//   this.func=func;
//   this.arr=arr;  
// }

// let tag=new Tag(tagName,tagFunc,atribute);
// console.log(tag);

// let tagName='<spam>';
// let tagFunc='Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let atribute=[{
//     name1:'contenteditable',
//     function1:'Сообщает, что элемент доступен для редактирования пользователем.Определяет выравнивание заголовка.'
// },
// {
//     name1:'contextmenu ',
//     function1:'Устанавливает контекстное меню для элемента.'
// }
// ]
// function  Tag(name,func,arr){
//   this.name=name;
//   this.func=func;
//   this.arr=arr;  
// }

// let tag=new Tag(tagName,tagFunc,atribute);
// console.log(tag);

// let tagName='<input>';
// let tagFunc='Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.';
// let atribute=[{
//     name1:'border',
//     function1:'Толщина рамки вокруг изображения.'
// },
// {
//     name1:'autofocus',
//     function1:'Устанавливает фокус в поле формы.'
// }
// ]
// function  Tag(name,func,arr){
//   this.name=name;
//   this.func=func;
//   this.arr=arr;  
// }

// let tag=new Tag(tagName,tagFunc,atribute);
// console.log(tag);

// let tagName='<form>';
// let tagFunc='Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
// let atribute=[{
//     name1:'accept-charset',
//     function1:'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'
// },
// {
//     name1:'action',
//     function1:'Адрес программы или документа, который обрабатывает данные формы.'
// }
// ]
// function  Tag(name,func,arr){
//   this.name=name;
//   this.func=func;
//   this.arr=arr;  
// }

// let tag=new Tag(tagName,tagFunc,atribute);
// console.log(tag);

// let tagName='<option>';
// let tagFunc='Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let atribute=[{
//     name1:'disabled',
//     function1:'Заблокировать для доступа элемент списка.'
// },
// {
//     name1:'label',
//     function1:'Указание метки пункта списка.'
// }
// ]
// function  Tag(name,func,arr){
//   this.name=name;
//   this.func=func;
//   this.arr=arr;  
// }

// let tag=new Tag(tagName,tagFunc,atribute);
// console.log(tag);
// let tagName='<select>';
// let tagFunc='Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let atribute=[{
//     name1:'accesskey',
//     function1:'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'
// },
// {
//     name1:'autofocus',
//     function1:'Устанавливает, что список получает фокус после загрузки страницы.'
// }
// ]
// function  Tag(name,func,arr){
//   this.name=name;
//   this.func=func;
//   this.arr=arr;  
// }






/*     TASK 2    */
// let tagName='<a>';
// let tagFunc='Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// let atribute=[{
//     name1:'accesskey',
//     function1:'Активация ссылки с помощью комбинации клавиш.'
// },
// {
//     name1:'coords',
//     function1:'Устанавливает координаты активной области.'
// }
// ]
// class Tag{
//     constructor(ame,func,arr){
//         this.name=name;
//         this.func=func;
//         this.arr=arr;  
//     }
// }
//   let tag=new Tag(tagName,tagFunc,atribute) ;
//   console.log(tag);

// let tagName='<div>';
// let tagFunc='Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let atribute=[{
//     name1:'align',
//     function1:'Задает выравнивание содержимого тега <div>.'
// },
// {
//     name1:'title ',
//     function1:'Добавляет всплывающую подсказку к содержимому.'
// }
// ]

// class Tag{
//         constructor(ame,func,arr){
//             this.name=name;
//             this.func=func;
//             this.arr=arr;  
//         }
//     }
//       let tag=new Tag(tagName,tagFunc,atribute) ;
//       console.log(tag);


// let tagName='<h1>';
// let tagFunc='HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
// let atribute=[{
//     name1:'align',
//     function1:'Определяет выравнивание заголовка.'
// }

// ]
// class Tag{
//         constructor(ame,func,arr){
//             this.name=name;
//             this.func=func;
//             this.arr=arr;  
//         }
//     }
//       let tag=new Tag(tagName,tagFunc,atribute) ;
//       console.log(tag);


// let tagName='<h1>';
// let tagFunc='HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.';
// let atribute=[{
//     name1:'align',
//     function1:'Определяет выравнивание заголовка.'
// },
// {
//     name1:'title ',
//     function1:'Добавляет всплывающую подсказку к содержимому.'
// }
// ]

// class Tag{
//         constructor(ame,func,arr){
//             this.name=name;
//             this.func=func;
//             this.arr=arr;  
//         }
//     }
//       let tag=new Tag(tagName,tagFunc,atribute) ;
//       console.log(tag);


// let tagName='<spam>';
// let tagFunc='Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
// let atribute=[{
//     name1:'contenteditable',
//     function1:'Сообщает, что элемент доступен для редактирования пользователем.Определяет выравнивание заголовка.'
// },
// {
//     name1:'contextmenu ',
//     function1:'Устанавливает контекстное меню для элемента.'
// }
// ]

// class Tag{
//         constructor(ame,func,arr){
//             this.name=name;
//             this.func=func;
//             this.arr=arr;  
//         }
//     }
//       let tag=new Tag(tagName,tagFunc,atribute) ;
//       console.log(tag);



// let tagName='<input>';
// let tagFunc='Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript.';
// let atribute=[{
//     name1:'border',
//     function1:'Толщина рамки вокруг изображения.'
// },
// {
//     name1:'autofocus',
//     function1:'Устанавливает фокус в поле формы.'
// }
// ]
// class Tag{
//         constructor(ame,func,arr){
//             this.name=name;
//             this.func=func;
//             this.arr=arr;  
//         }
//     }
//       let tag=new Tag(tagName,tagFunc,atribute) ;
//       console.log(tag);




// let tagName='<form>';
// let tagFunc='Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
// let atribute=[{
//     name1:'accept-charset',
//     function1:'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'
// },
// {
//     name1:'action',
//     function1:'Адрес программы или документа, который обрабатывает данные формы.'
// }
// ]
// class Tag{
//         constructor(ame,func,arr){
//             this.name=name;
//             this.func=func;
//             this.arr=arr;  
//         }
//     }
//       let tag=new Tag(tagName,tagFunc,atribute) ;
//       console.log(tag);


// let tagName='<option>';
// let tagFunc='Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let atribute=[{
//     name1:'disabled',
//     function1:'Заблокировать для доступа элемент списка.'
// },
// {
//     name1:'label',
//     function1:'Указание метки пункта списка.'
// }
// ]

// class Tag{
//         constructor(name,func,arr){
//             this.name=name;
//             this.func=func;
//             this.arr=arr;  
//         }
//     }
//       let tag=new Tag(tagName,tagFunc,atribute) ;
//       console.log(tag);


// let tagName='<select>';
// let tagFunc='Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
// let atribute=[{
//     name1:'accesskey',
//     function1:'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'
// },
// {
//     name1:'autofocus',
//     function1:'Устанавливает, что список получает фокус после загрузки страницы.'
// }
// ]
// class Tag{
//         constructor(ame,func,arr){
//             this.name=name;
//             this.func=func;
//             this.arr=arr;  
//         }
//     }
//       let tag=new Tag(tagName,tagFunc,atribute) ;
//       console.log(tag);







/*     TASK 3    */
// - Створити об'єкт car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість,
//об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car={
// modelCar:'Kangoo',
// makerCar:'Renaule',
// yearCar:2000,
// maxSpeedCar:150,
// volumeCar:1900,
// driver:"1",
// drive: function(){
//     console.log(`їдемо зі швидкістю ${this.maxSpeedCar} на годину`);
// },
// info: function(){
//     console.log(`modelCar:${this.modelCar}
//     makerCar:${this.makerCar}
//     yearCar:${this.yearCar}
//     maxSpeedCar:${this.maxSpeedCar}
//     volumeCar:${this.volumeCar}
//     driver:${this.driver}`);
// },
// increaseMaxSpeed: function(newSpeed){
//     this.maxSpeedCar+=newSpeed;
// },
// changeYear: function(newValue){
//     this.yearCar=newValue;
// },
// addDriver: function(driver1){
//     this.driver=driver1;

// }
// }
// let vodii={name:'Andrii Matviiv', age:22}
// car.drive();
// car.increaseMaxSpeed(10);
// car.changeYear(2009);
// car.addDriver('Name:'+vodii.name+'\n'+'Age:'+vodii.age);
// car.info();
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function car(model,maker,year,maxSpeed,volume,){
//     this.model=model;
//     this.maker=maker;
//     this.year=year;
//     this.maxSpeed=maxSpeed;
//     this.volume=volume;
    
//     this.drive=function(){
//         console.log(`їдемо зі швидкістю  ${this.maxSpeed}`);
//     };
//     this.info=function(){
//         console.log(`${model},${maker},${year},${maxSpeed},${volume}`);
//     };
//     this.increaseMaxSpeed =function(newSpeed){
//         this.maxSpeed+=newSpeed;
//     };
//     this.changeYear=function(newValue){
//         this.year=newValue;
//     };
//     this.addDriver=function(name,age,stagh){
        
//         this.name=name;
//         this.age=age;
//         this.stagh=stagh;
//     }
// }
// let wv=new car('CC','germany',2009,270,1998 );
// wv.drive();
// wv.info();
// wv.increaseMaxSpeed(23);
// wv.changeYear(2022);
// wv.addDriver('Andyy',22,6);
// console.log(wv);
//=================================================================================================================================================================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class car{
//     constructor(model,maker,year,maxSpeed,volume,driver){
//         this.model=model;
//             this.maker=maker;
//             this.year=year;
//             this.maxSpeed=maxSpeed;
//             this.volume=volume;
//             this.driver=driver;
//             this.drive=function(){
//                 console.log(`їдемо зі швидкістю  ${this.maxSpeed}`);
//             };
//             this.info=function(){
//                 console.log(`${model},${maker},${year},${maxSpeed},${volume},${driver}`);
//             };
//             this.increaseMaxSpeed =function(newSpeed){
//                 this.maxSpeed+=newSpeed;
//             };
//             this.changeYear=function(newValue){
//                 this.year=newValue;
//             };
//             this.addDriver=function(objectDriver){
                
//                 this.driver=objectDriver;
               
//             }
//         }

//     }
//     let arrayDriver={
//         name:'Andryy',
//         age:22,
//         stagh:6
//     }
//     let wv=new car('CC','germany',2009,270,1998 );
  
// wv.drive();
// wv.info();
// wv.increaseMaxSpeed(23);
// wv.changeYear(2022);
// wv.addDriver(arrayDriver);
// console.log(wv);
//====================================================================================================================================================================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом



// class Popelushku{
//     constructor(name,age,footSize){
//         this.name=name;
//         this.age=age;
//         this.footSize=footSize;
//     }
// }
// let cinderella1=new Popelushku('lina',18,35);   
// let cinderella2=new Popelushku('Anya',16,35.5);
// let cinderella3=new Popelushku('Diana',14,36);
// let cinderella4=new Popelushku('Roma',19,36.5);
// let cinderella5=new Popelushku('Lilia',20,36.5);
// let cinderella6=new Popelushku('Tania',18,37);
// let cinderella7=new Popelushku('Sophia',17,37.5);
// let cinderella8=new Popelushku('Roksolana',23,38);
// let cinderella9=new Popelushku('Nika',22,38.5);
// let cinderella10=new Popelushku('Ghanna',19,39);

// let arrayCinderela=[cinderella1,cinderella2,cinderella3,cinderella4,cinderella4,cinderella5,cinderella6,cinderella7,cinderella7,cinderella8,cinderella8,cinderella9,cinderella10];


// class Prince {
//     constructor(name, age, foundedShoe) {
//         this.name = name;
//         this.age = age;
//         this.foundedShoe = foundedShoe;
//     }
// }
// let prince1=new Prince('Rostyk',19,38);

// function searchShoe() {
//     for (i = 0; i < arrayCinderela.length; i++){
//         let elements = Object.values(arrayCinderela[i]);
//         if (elements[2] === prince1.foundedShoe){
//             console.log('My princes '+elements[0] );
//         }
//     }
// }


// searchShoe();
//========================================================================================================================================================================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function cinderella(name,age, footSize){
    this.name=name;
    this.age=age;
    this.footSize=footSize;

}
let cinderella1=new cinderella('lina',18,35);   
let cinderella2=new cinderella('Anya',16,35.5);
let cinderella3=new cinderella('Diana',14,36);
let cinderella4=new cinderella('Roma',19,36.5);
let cinderella5=new cinderella('Lilia',20,36.5);
let cinderella6=new cinderella('Tania',18,37);
let cinderella7=new cinderella('Sophia',17,37.5);
let cinderella8=new cinderella('Roksolana',23,38);
let cinderella9=new cinderella('Nika',22,38.5);
let cinderella10=new cinderella('Ghanna',19,39);

let arrayCinderela=[cinderella1,cinderella2,cinderella3,cinderella4,cinderella4,cinderella5,cinderella6,cinderella7,cinderella7,cinderella8,cinderella8,cinderella9,cinderella10];

function prince(name, age, foundedShoe) {
        this.name = name;
        this.age = age;
        this.foundedShoe = foundedShoe;
    }

let prince1=new prince('Rostyk',19,38);

function searchPopelushka() {
    for (const iterator of arrayCinderela) {
        

        if (iterator.footSize === prince1.foundedShoe) {
            console.log('My princeses '+iterator.name);
        }
    }
}
searchPopelushka();
