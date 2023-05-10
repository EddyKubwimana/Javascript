document.addEventListener("DOMContentLoaded", function(){

    // api call to fetch data on currency exchange
    var myHeaders = new Headers(); 
    myHeaders.append("apikey", localStorage.getItem("api"));
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    var keys = new Array();
    
    fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
      .then(response => response.json())
      .then(result =>{
        console.log(result)
    
        keys = Object.keys(result.rates)
        console.log(keys)

      })
      .catch(error => console.log('error', error));


})

