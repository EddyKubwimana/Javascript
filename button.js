document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll("button").forEach(function(button){
        document.querySelector("h1").style.color = button.dataset.color;
    });
});