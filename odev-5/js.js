var name = "Abdulhamid";
var adult = 18;
var marridYear = prompt("Kaç yaşında evleneceksin: ");


for(var i = 0 ; i<=35 ; i++){
    if (i<adult){
        console.log(name + " " + i + " yasindasin");
    } else if(i == adult){
        console.log(name + " simdi rasitsin");
    } else if(i==marridYear){
        console.log(name + " "  + marridYear + " yasinda evleneceksin");
    } else {
        console.log(name + " "  + i + " yasindasin");
    }
}
