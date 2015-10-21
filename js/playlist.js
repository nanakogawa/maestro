 function searchData (event) {
  event.preventDefault();
  var submitRequest = new XMLHttpRequest();
  submitRequest.open('GET','/spotify/data', true);
  submitRequest.setRequestHeader('content-type', 'application/json');
  submitRequest.send(formSubmit());
  submitRequest.addEventListener('load',function () {

   if((submitRequest.status === 200) || (submitRequest.status === 304)) {

    var searchResults = JSON.parse(submitRequest.responseText);

    for(var i = 0; i < 1; i++) {
     console.log(searchResults);
    }
   }
  });
 }

 function formSubmit() {
  var form = document.getElementById('search-form');
  var formData = new Object();
  formData.searchInput = document.getElementById('searchInput').value;
  console.log(formData);
  return JSON.stringify(formData);
 }


 var searchButton = document.getElementById('search-btn');
 searchButton.addEventListener('click', searchData, false);