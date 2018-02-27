function showFirst(){
  document.getElementById("hidden").classList.toggle("show");
}

window.onclick = function(event){
  if(!event.target.matches('.button-show')){
    var dropdowns = document.getElementByClassName("dropdown-hid");
    var i;
    for(i=0; i<dropdowns.length;i++){
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}

function showSecond(){
  document.getElementById("hidden2").classList.toggle("show");
}

window.onclick = function(event){
  if(!event.target.matches('.button-show')){
    var dropdowns = document.getElementByClassName("dropdown-hid");
    var i;
    for(i=0; i<dropdowns.length;i++){
      var openDropdown = dropdowns[i];
      if(openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}
