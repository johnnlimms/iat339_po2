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


var acc = document.getElementsByClassName("accordion");
var hamburger = document.querySelector(".hamburger");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        hamburger.classList.toggle("is-active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
