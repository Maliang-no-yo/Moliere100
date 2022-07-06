
function DisplayGrade(Grade) {

let Div = document.getElementById("number");
let Circle = document.getElementById("circle");
let Time = 15 * Grade / 100;
// let size = 
// console.log(size)
document.documentElement.style.setProperty('--size', '50');

  var list = ["#7a0000", "#edd605", "#007a00"]

  let counter = 0;

  setInterval(() => {
    if (counter == Grade) {   // variable à manipuler afin que le pourcentage soit lié à la note 
      clearInterval();
    } else {
      counter += 1;
      Circle.style.stroke = list[Math.floor(counter / 40)].toString()
      Div.innerHTML = counter;
    }
  }, Time);
  return;
  // 25 : Vitesse de défilement de la note 
}

function defineSize(Grade){
  if(Grade > 50)
  return size
}

function prepareScore(){
  console.log(countWords(document.getElementById("bloc-gauche").innerHTML))
  let score=100;
  score -= parseInt(document.getElementById("spellingErrors").innerHTML)
  if (score < 1){
      DisplayGrade(1)
  } else {
      DisplayGrade(score)
  }
}

prepareScore();
