if (!localStorage.getItem("count")){
  localStorage.setItem("count", 0);
}

function up(){
            let count = localStorage.getItem("count");
            count++;
            let heading = document.querySelector("h1");
            heading.innerHTML = count;
           
            let button = document.querySelector("button")
            button.innerText = "Count up"
            localStorage.setItem("count", count)
        
            if (heading.innerHTML == 20){
              heading.innerHTML = "The counting is over";
              button.innerText ="Refresh";
              localStorage.setItem("count", 0)

        };

          
    
        
    };


    document.addEventListener("DOMContentLoaded",function(){

      document.querySelector("h1").innerHTML = localStorage.getItem("count");

        
    document.querySelector("button").onclick = up;

    //setInterval(up, 1000);

    });
