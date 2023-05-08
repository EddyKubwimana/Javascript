document.addEventListener("DOMContentLoaded", function(){
   document.querySelector("form").onsubmit= function(){

    const task = document.querySelector("#item").value;
    const timeline = document.querySelector("#timeline").value;
    const newtask =  document.createElement("li");
    const timetask = document.createElement("li")
    newtask.innerHTML = task;
    timetask. innerHTML = timetask;
    document.querySelector("#task").append(newtask);


   }
})