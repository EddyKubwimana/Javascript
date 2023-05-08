let counter = 0;
        function up(){
            let heading = document.querySelector("h1");
            heading.innerHTML = counter;
            counter+=1;
            let button = document.querySelector("button")
            button.innerText = "Count up"
        
            if (heading.innerHTML == 20){
              heading.innerHTML = "The counting is over";
              button.innerText ="Refresh";
              counter = 0

            };
    
        
    };

    document.addEventListener("DOMContentLoaded",function(){

        
    document.querySelector("button").onclick =up;

    });
