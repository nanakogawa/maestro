 function searchData (event) {
  event.preventDefault();
  var submitRequest = new XMLHttpRequest();
  //var term = event.target.textContent;
  submitRequest.open('GET','/spotify/data',true);
  submitRequest.setRequestHeader('content-type', 'application/json');
  submitRequest.send();
  submitRequest.addEventListener('load',function () {

   if((submitRequest.status === 200) || (submitRequest.status === 304)) {

    var data = JSON.parse(submitRequest.responseText);

    for(var i = 0; i < 5; i++) {
     console.log(data);
    }
   }
  });
 }

 var searchButton = document.getElementById('search-btn');
 searchButton.addEventListener('click', searchData, false);