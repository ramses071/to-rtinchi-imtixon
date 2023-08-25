//sekundni topadi
function Secondsone(seconds) {
  let hours = Math.floor(seconds / 3600); // Soatlar
  let Secondsone = seconds % 3600; // Seoatlarga qolgan sekundlar 
  let minutes = Math.floor(Secondsone / 60); // minutlar
  let Seconds2 = Secondsone % 60; // minutlarga qolgan sekundlar 

  return hours + " soat " + minutes + " daqiqa " + Seconds2 + " sekund";
}
console.log(Secondsone(12312));


//case2

let num=3;

switch (num){
  case 1:
    console.log("YOMON");
    break;
  case 2:
    console.log("QONIQARSIZ");
    break;
  case 3:
    console.log("QONIQARLI");
    break;
  case 4:
    console.log("YAXSHI");
    break;
  case 5:
    console.log("ALO");
    break;
  default:
    console.log("XATO");
    break;
}
