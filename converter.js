document.addEventListener("DOMContentLoaded", function(){
    var myHeaders = new Headers();
    myHeaders.append("apikey", localStorage.getItem("api"));
    
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


})

