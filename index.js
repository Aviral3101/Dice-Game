var randomNumber1=Math.ceil(Math.random()*6);
if(randomNumber1==1){
  document.getElementsByTagName("img")[0].setAttribute("src","E:/Web development/Dicee Challenge - Starting Files/images/dice1.png");
}
if(randomNumber1==2){
  document.getElementsByTagName("img")[0].setAttribute("src","E:/Web development/Dicee Challenge - Starting Files/images/dice2.png");
}
if(randomNumber1==3){
  document.getElementsByTagName("img")[0].setAttribute("src","E:/Web development/Dicee Challenge - Starting Files/images/dice3.png");
}
if(randomNumber1==4){
  document.getElementsByTagName("img")[0].setAttribute("src","E:/Web development/Dicee Challenge - Starting Files/images/dice4.png");
}
if(randomNumber1==5){
  document.getElementsByTagName("img")[0].setAttribute("src","E:/Web development/Dicee Challenge - Starting Files/images/dice5.png");
}
var randomNumber2=Math.ceil(Math.random()*6);
if(randomNumber2==1){
  document.getElementsByTagName("img")[1].setAttribute("src","E:/Web development/Dicee Challenge - Starting Files/images/dice1.png");
}
if(randomNumber2==2){
  document.getElementsByTagName("img")[1].setAttribute("src","E:/Web development/Dicee Challenge - Starting Files/images/dice2.png");
}
if(randomNumber2==3){
  document.getElementsByTagName("img")[1].setAttribute("src","E:/Web development/Dicee Challenge - Starting Files/images/dice3.png");
}
if(randomNumber2==4){
  document.getElementsByTagName("img")[1].setAttribute("src","E:/Web development/Dicee Challenge - Starting Files/images/dice4.png");
}
if(randomNumber2==5){
  document.getElementsByTagName("img")[1].setAttribute("src","E:/Web development/Dicee Challenge - Starting Files/images/dice5.png");
}
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Draw";
}
