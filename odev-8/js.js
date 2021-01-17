// stop refresh page after submit
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


// listen to submit button and distribute the gıfts to persons
document.querySelectorAll("#myForm input[type=submit]")[0].addEventListener("click", function(){
    var input = document.getElementById("input").value.split(",");
    var gifts = ["computer", "mobile", "100 dolar", "rose"];
    var randomNumber = [];
    var list = document.querySelectorAll(".winer li");
    // debugger
    // for(var i = 0; i<input.length; i++){
    //     var ran = Math.floor(Math.random() * input.length);

    //     // don't repeating a random number
    //     if(ran !== randomNumber.indexOf(ran)){
    //         randomNumber.push(ran);
    //     }      
    // }
    function in_array(array, el) {
        for(var i = 0 ; i < array.length; i++) 
            if(array[i] == el) return true;
        return false;
     }
     
     function get_rand(array) {
         var rand = array[Math.floor(Math.random()*array.length)];
         if(!in_array(randomNumber, rand)) {
            randomNumber.push(rand); 
            return rand;
         }
         return get_rand(array);
     }

     for(var i=0; i<gifts.length; i++){
        //  console.log(get_rand(input));
        list[i].innerHTML = (i+1) + ". " + get_rand(input) + " is win " + gifts[i];
     }

     document.querySelectorAll(".container")[0].classList.add("winerName")
    
    // console.log(randomNumber);
});
