var check = document.querySelectorAll("#checkbox");
var sira = document.querySelectorAll("#sira");
var kayid = document.querySelectorAll(".button")[0];
var id = document.querySelectorAll("#id");
var adi = document.querySelectorAll("#adi");
var title = document.getElementById("title");
var resulte = [];

// check[1].addEventListener("change", function(){
//     sira[1].removeAttribute("disabled")  ;
//   });
console.log(id[0].innerText);

  check.forEach((e,i) => 
    e.addEventListener("change", function(){

        if (e.checked == true){
            sira[i].removeAttribute("disabled");
            sira[i].placeholder = "sira gir"
            resulte.push(sira[i].value)

        } else if(e.checked == false) {
            sira[i].setAttribute("disabled", "true");
            sira[i].placeholder = "sira"
        }
    })
  )

  kayid.addEventListener("click", function(){


    for (var i=0; i<check.length; i++){
        if(check[i].checked == true){
            resulte.push({
                "id": id[i].innerText,
                "name": adi[i].innerText,
                "line": sira[i].value
            })
        }
    }
    for (var i = 0; i<resulte.length; i++){
        console.log(resulte[i])
    }

    title.innerText = "Sira Belgileri Consolde kayid edildi";

    resulte = [];
    
  })