/*  let number2=56.7;
rNumber=Math.ceil(number2);
console.log(rNumber);

let number1=56.7;
rNumber=Math.floor(number1);
console.log(rNumber);

let number3=56.7;
rNumber=Math.ceil(number3);
console.log(rNumber);

let number4=Math.random();
console.log(number4);

let number5=Math.ceil(Math.random()*4);
console.log(number5) */

 let image=document.querySelectorAll("img")[0];
//let Twis=Math.ceil(Math.random()*6);
function Lodo(){
    let Twis=Math.ceil(Math.random()*6);
    if(Twis===6){
        image.src="images/Six.png"
    }
    else if (Twis===5){
        image.src="images/Five.png"
    }
    else if (Twis===4){
        image.src="images/Four.png"
    }
    else if (Twis===3){
        image.src="images/Three.png"
    }
    else if (Twis===2){
        image.src="images/two.png"
    }
    else if (Twis===1){
        image.src="images/one.png"
    }
} 
