//VERSION 1 


// function start() {
// let string =  'Hello World';
//     len = string.length,
//     i = 0,
//     tId = setInterval(() =>{
//       data.innerHTML += string[i++];
//       if (i == len) clearInterval(tId);
//     }, 600);
// };
// start();
//______________________________________________________________


//VERSION 2

let string =  'Hello World!';
let arrString = string.split(``);


let line = 0;
  let count = 0;
  let result = '';
  function typeLine() {
    let interval = setTimeout(() => {
        result += arrString[line][count]
        document.getElementById('data').innerHTML=result +'|';


      count++;
      if (count >= arrString[line].length) {
        count = 0;
        line++;
        if (line == arrString.length) {
          clearTimeout(interval);
           document.getElementById('data').innerHTML =result;
          return true;
        }
      }
      typeLine();
    }, getRandomInt(getRandomInt(250*2.5)))
  }
  typeLine();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


