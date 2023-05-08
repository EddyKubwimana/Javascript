document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll("button").forEach(function(button){
        button.onclick = function(){document.querySelector("h1").style.color = button.dataset.color;};
        
    });
});