"use strict";

var x = window.matchMedia("(min-width: 501px)")
myFunction(x)
x.addListener(myFunction)
function myFunction(x){
  if(x.matches){
    document.getElementById("hid-f").style.display="block";
    document.getElementById("hid-s").style.display="block";
    document.getElementById("hid-t").style.display="block";
  }else{
    document.getElementById("hid-f").style.display="none";
    document.getElementById("hid-s").style.display="none";
    document.getElementById("hid-t").style.display="none";
  }
}

function openFirstMenu(){
    if(document.getElementById("hid-f").style.display=="block"){
      document.getElementById("hid-f").style.display="none";
    }else{document.getElementById("hid-f").style.display="block";}
}
function openSecondMenu(){
  if(document.getElementById("hid-s").style.display=="block"){
    document.getElementById("hid-s").style.display="none";
  }else{document.getElementById("hid-s").style.display="block";}
}
function openThirdMenu(){
  if(document.getElementById("hid-t").style.display=="block"){
    document.getElementById("hid-t").style.display="none";
  }else{document.getElementById("hid-t").style.display="block";}
}
