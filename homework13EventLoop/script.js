// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// function startMyRoutine(callback){
//     setTimeout(()=>{
//         callback();
//     },2000);
// }

// startMyRoutine(() =>{
// console.log('Start my routine!')


// listOfRoutine0(9,(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     listOfRoutine1(1,(err,data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(data);
//         listOfRoutine2(1,(err,data)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(data)
//             listOfRoutine3(1,(err,data)=>{
//                 if(err){
//                     console.log(err);
//                     return;
//                 }
//                 console.log(data)
//                 listOfRoutine2(1,(err,data)=>{
//                     if(err){
//                         console.log(err);
//                         return;
//                     }
//                     console.log(data);
//                     listOfRoutine5(1,(err,data)=>{
//                         if(err){
//                             console.log(err);
//                             return;
//                         }
//                         console.log(data)
//                         listOfRoutine6(1,(err,data)=>{
//                             if(err){
//                                 console.log(err);
//                                 return;
//                             }
//                             console.log(data)
//                             listOfRoutine7(1,(err,data)=>{
//                                 if(err){
//                                     console.log(err);
//                                     return;
//                                 }
//                                 console.log(data)
//                                 listOfRoutine8(1,(err,data)=>{
//                                     if(err){
//                                         console.log(err);
//                                         return;
//                                     }
//                                     console.log(data)
//                                     listOfRoutine9(1,(err,data)=>{
//                                         if(err){
//                                             console.log(err);
//                                             return;
//                                         }
//                                         console.log(data)
//                                   })
//                               })
//                           })
//                       })
//                   })
//               })
//           })
//       })
//    })
//   })
// });

// function listOfRoutine0(time,callback){
//     setTimeout(()=>{
//         if(time>9){
//             callback('You should go to bed faster! '+'You overslept!',null);
//             return;
//         }
//         callback(null,'1.Прокидаюсь.')

// },1000);
// }
// function listOfRoutine1(water,callback){
//     setTimeout(()=>{
//         if(water<=0){
//             callback('NOT WATER!',null);
//             return;
// }
//             callback(null,'2.Вмиваюсь.')

// },1000);
// }
// function listOfRoutine2(meat,callback){
//     setTimeout(()=>{
//         if(meat<=0){
//             callback('NOT MEAT!',null)
//             return;
//         }
//         callback(null,'3.Снідаю.');
// },1000);
// }function listOfRoutine3(internet,callback){
//     setTimeout(()=>{
//         if(internet<=0){
//             callback('NOT INTERNET!',null);
//             return;
//         }
//         callback(null,'4.Предивляюсь лекцію))');
// },1000);
// }function listOfRoutine4(meat,callback){
//     setTimeout(()=>{
//         if(meat<=0){
//             callback('NOT MEAT!',null)
//             return;
//         }
//         callback(null,'5.Обідаю.');
// },1000);
// }function listOfRoutine5(light,callback){
//     setTimeout(()=>{
//         if(light<=0){
//             callback('NO LIGHT!',null)
//             return;
//         }
//         callback(null,'6.Виконую д/з.');
// },1000);
// }function listOfRoutine6(meat,callback){
//     setTimeout(()=>{
//         if(meat<=0){
//             callback('NOT MEAT!',null)
//             return;
//         }
//         callback(null,'7.Вечеряю.');
// },1000);
// }function listOfRoutine7(internet,callback){
//     setTimeout(()=>{
//         if(internet<=0){
//             callback('NOT INTERNET!',null);
//             return;
//         }
//         callback(null,'8.Дивлюсь нову лекцію.');
// },1000);
// }function listOfRoutine8(wather, callback){
//     setTimeout(()=>{
//         if(wather<=0){
//             callback('WATHER IS BAD!',null);
//             return;
//         }
//         callback(null,'9.Гуляю.');
// },1000);
// }
// function listOfRoutine9(bad,callback){
//     setTimeout(()=>{
//         if(bad<=0){
//             callback('YOU DIDN`T! HAVE BED',null);
//             return;
//         }
//         callback(null,'10.Лягаю спати.');
// },1000);
// }

//==========================================================================================================


// function startMyRoutine(){
// return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Start my routine!')
//         },2000);
//     })
// }

// function listOfRoutine0(time){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(time>9){
//             reject('You should go to bed faster! '+'You overslept!');
        
//         }
//         resolve('1.Прокидаюсь.')
//     },1000);
//   })
// }
// function listOfRoutine1(water){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(water<=0){
//             reject('NOT WATER!');
// }
//         resolve('2.Вмиваюсь.')

// },1000);
// })
// }
// function listOfRoutine2(meat){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(meat<=0){
//             reject('NOT MEAT!')
//         }
//         resolve('3.Снідаю.');
// },1000);
// })
// }
// function listOfRoutine3(internet){
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//             if(internet<=0){
//                 reject('NOT INTERNET!')
//             }
//             resolve('4.Предивляюсь лекцію))');
//     },1000);
// })
// }
// function listOfRoutine4(meat){
// return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(meat<=0){
//                 reject('NOT MEAT!')
//             }
//             resolve('5.Обідаю.');
//     },1000);
// })
// }
// function listOfRoutine5(light){
// return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(light<=0){
//                 reject('NO LIGHT!')
//             }
//             resolve('6.Виконую д/з.');
//     },1000);
// })
// }
// function listOfRoutine6(meat){
// return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             if(meat<=0){
//                 reject('NOT MEAT!')
//             }
//             resolve('7.Вечеряю.');
//     },1000);
// })
// }
// function listOfRoutine7(internet){
// return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(internet<=0){
//                 reject('NOT INTERNET!');
//             }
//             resolve('8.Дивлюсь нову лекцію.');
//     },1000);
// })
// }
// function listOfRoutine8(wather){
// return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             if(wather<=0){
//                 reject('WATHER IS BAD!');
//             }
//             resolve('9.Гуляю.');
//     },1000);
// })
// }
// function listOfRoutine9(bad){
// return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(bad<=0){
//                 reject('YOU DIDN`T! HAVE BED');
//             }
//             resolve('10.Лягаю спати.');
//     },1000);
// })
// }
    









// startMyRoutine()
// .then((value) =>{
//     console.log(value)
//     return listOfRoutine0(9);
// })
// .then((value) =>{
//     console.log(value)
//     return listOfRoutine1(1);
// })
// .then((value) =>{
//     console.log(value)
//     return listOfRoutine2(1);
// })
// .then((value) =>{
//     console.log(value)
//     return listOfRoutine3(1);
// })
// .then((value) =>{
//     console.log(value)
//     return listOfRoutine4(1);
// })
// .then((value) =>{
//     console.log(value)
//     return listOfRoutine5(0);
// })
// .then((value) =>{
//     console.log(value)
//     return listOfRoutine6(1);
// })
// .then((value) =>{
//     console.log(value)
//     return listOfRoutine7(1);
// })
// .then((value) =>{
//     console.log(value)
//     return listOfRoutine8(1);
// })
// .then((value) =>{
//     console.log(value)
//     return listOfRoutine9(1);
// })
// .then((value) =>{
//     console.log(value)
// })
// .catch(err=>{
//     console.log(err);
// })
//==========================================================================================================
  
async function startMyRoutine(){
let promise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Start my routine!')
        },2000);
    })

        let result = await promise;
        console.log(result);
    
}


async function listOfRoutine0(time){
let promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(time>9){
            reject('You should go to bed faster! '+'You overslept!');
        
        }
        resolve('1.Прокидаюсь.')
    },1000);
  })
let result = await promise;
    console.log(result);
}

async function listOfRoutine1(water){
let promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(water<=0){
            reject('NOT WATER!');
}
        resolve('2.Вмиваюсь.')

},1000);
})
let result = await promise;
    console.log(result);
}
async function listOfRoutine2(meat){
    let promise= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(meat<=0){
            reject('NOT MEAT!')
        }
        resolve('3.Снідаю.');
},1000);
})
let result = await promise;
    console.log(result);
}
async function listOfRoutine3(internet){
    let promise= new Promise((resolve,reject)=>{

    setTimeout(()=>{
            if(internet<=0){
                reject('NOT INTERNET!')
            }
            resolve('4.Предивляюсь лекцію))');
    },1000);
})
let result = await promise;
    console.log(result);
}
async function listOfRoutine4(meat){
    let promise= new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(meat<=0){
                reject('NOT MEAT!')
            }
            resolve('5.Обідаю.');
    },1000);
})
let result = await promise;
    console.log(result);
}
async function listOfRoutine5(light){
    let promise= new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(light<=0){
                reject('NO LIGHT!')
            }
            resolve('6.Виконую д/з.');
    },1000);
})
let result = await promise;
    console.log(result);
}
async function listOfRoutine6(meat){
    let promise= new Promise((resolve,reject)=>{


        setTimeout(()=>{
            if(meat<=0){
                reject('NOT MEAT!')
            }
            resolve('7.Вечеряю.');
    },1000);
})
let result = await promise;
    console.log(result);
}
async function listOfRoutine7(internet){
    let promise= new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(internet<=0){
                reject('NOT INTERNET!');
            }
            resolve('8.Дивлюсь нову лекцію.');
    },1000);
})
let result = await promise;
    console.log(result);
}
async function listOfRoutine8(wather){
    let promise= new Promise((resolve,reject)=>{

         setTimeout(()=>{
            if(wather<=0){
                reject('WATHER IS BAD!');
            }
            resolve('9.Гуляю.');
    },1000);
})
let result = await promise;
    console.log(result);
}
async function listOfRoutine9(bad){
    let promise= new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(bad<=0){
                reject('YOU DIDN`T! HAVE BED');
            }
            resolve('10.Лягаю спати.');
    },1000);
})
let result = await promise;
    console.log(result);
}

async function sunc(){
    let res=await startMyRoutine();
    let res1=await listOfRoutine0(9);
    let res2=await listOfRoutine1(1);
    let res3=await listOfRoutine2(1);
    let res4=await listOfRoutine3(1);
    let res5=await listOfRoutine4(1);
    let res6=await listOfRoutine5(1);
    let res7=await listOfRoutine6(1);
    let res8=await listOfRoutine7(1);
    let res9=await listOfRoutine8(1);
    let res10=await listOfRoutine9(1);
}

sunc().then((result) => {
  }).catch((err) => {
    console.log(err);
  });












