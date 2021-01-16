
var checkbox =  document.getElementById("dark");
var yazi = document.querySelectorAll("h1, p, li");

checkbox.addEventListener("change", function(){

if(this.checked){
    document.querySelectorAll("body")[0].classList.add("dark");
    document.querySelectorAll("h1")[0].classList.add("white");
    document.getElementById("card").classList.add("card--dark");
    for(var i=0; i<yazi.length; i++){
        yazi[i].style.color = "white";
    }
    
} else {
    document.querySelectorAll("body")[0].classList.remove("dark");
    document.querySelectorAll("h1")[0].classList.remove("white");
    document.getElementById("card").classList.remove("card--dark");
    for(var i=0; i<yazi.length; i++){
        yazi[i].style.color = "black";
    }
}
    
});