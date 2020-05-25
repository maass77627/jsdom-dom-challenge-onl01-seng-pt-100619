document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");

    document.getElementById('counter')

   let count = setInterval(function () {
       counter.innerText++; 
    }, 1000); 

    let subtract = document.getElementById("-")
    
    subtract.addEventListener("click", function(e){
        counter.innerText--;
    });

    let add = document.getElementById("+")
    add.addEventListener("click", function(e){
        counter.innerText++;
    });

    pause.addEventListener("click", function(e))
    if (pause.innerText === "pause"){
        pause.innerText = "resume"
        clearInterval(count)

    }
    
  });


 // myVar = setInterval(function, milliseconds);
//clearInterval(myVar);