var person1=prompt("Enter Person1 Name:");
var person2=prompt("Enter Person2 Name:");
person1=person1.slice(0,1).toUpperCase()+person1.slice(1,person1.length).toLowerCase();

person2=person2.slice(0,1).toUpperCase()+person2.slice(1,person2.length).toLowerCase();



var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage="dice"+randomNumber1+".png";

var randomImageSource="images/"+randomDiceImage;

console.log(randomImageSource);

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);



var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice"+randomNumber2+".png";

var randomImageSource2="images/"+randomDiceImage2;

console.log(randomImageSource2);

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

document.querySelectorAll("p")[0].innerHTML=person1;
document.querySelectorAll("p")[1].innerHTML=person2;



if(randomNumber1>randomNumber2)
{
   document.querySelector("h1").innerHTML="Player one "+person1+" wins";
}


else if(randomNumber2>randomNumber1)
   {
       document.querySelector("h1").innerHTML="Player two "+person2+" wins";
   }

else{
   document.querySelector("h1").innerHTML="Draw";
   }
  
   














