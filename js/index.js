var buttonhistory = document.querySelector(".more")
var documentation1 = document.querySelector(".history-astro")
var open = function(){
  documentation1.classList.toggle("is-open")
}
buttonhistory.addEventListener("click",open)

var buttonglyphes = document.querySelector(".plus")
var documentation2 = document.querySelector(".tetsujin-background")
var open = function(){
  documentation2.classList.toggle("is-open")
}
buttonglyphes.addEventListener("click",open)
