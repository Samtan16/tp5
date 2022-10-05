// JavaScript for tp5


window.onload = function() {
  
  document.querySelector("#header").classList.add("tp");
  
  document.querySelector("#header").onclick = function() {
    this.classList.toggle("orange");
  } 
  
  document.querySelector("#displayfunc #ingredients").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#displayfunc #equipment").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#displayfunc #directions").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#displayfunc #directions ol").innerHTML += "<li>375 degrees F</li>";
  
}

// end window.onload 