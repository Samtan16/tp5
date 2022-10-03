// JavaScript for tp5


window.onload = function() {
  
  document.querySelector("#header h1").classList.add("tp");
  
  document.querySelector("#header h1.tp").onclick = function() {
    this.classList.toggle("cream");
  } 
  
  document.querySelector("#displayfunc #ingredients").onclick = function() {
    this.classList.toggle("tpshow");
  }
  
  document.querySelector("#displayfunc #equipment").onclick = function() {
    this.classList.toggle("tpshow");
  }
  
  document.querySelector("#displayfunc #directions").onclick = function() {
    this.classList.toggle("tpshow");
  }
  
}