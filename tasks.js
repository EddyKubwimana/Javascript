document.addEventListener("DOMContentLoaded", function(){
   document.querySelector("#button").disabled= true;
   document.querySelector("#item").onkeyup = function(){
    if (document.querySelector("#item").value.length > 0){
        document.querySelector("#button").disabled = false;
    } else{

        document.querySelector("#button").disabled = true;
    }
    
   }
   document.querySelector("form").onsubmit= function(){


    const task = document.querySelector("#item").value;
    const newtask =  document.createElement("li");
    newtask.innerHTML = task;
    document.querySelector("#task").append(newtask);
    document.querySelector("#item").value = '';
    document.querySelector("#button").disabled = true;

    return false;


   }
})