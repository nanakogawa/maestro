 function searchData (event) {
  event.preventDefault();
  var submitRequest = new XMLHttpRequest();
  submitRequest.open('POST','/spotify/data', true);
  submitRequest.setRequestHeader('content-type', 'application/json');
  submitRequest.send(formSubmit());
  submitRequest.addEventListener('load',function () {

   if((submitRequest.status === 200) || (submitRequest.status === 304)) {

    var searchResults = JSON.parse(submitRequest.responseText);

    for(var i = 0; i < searchResults.length; i++) {

     var eachResultDiv = document.createElement('div');
     eachResultDiv.style.paddingBottom = '15px';
     var resultDiv = document.getElementById('result');

     var imgSpan = document.createElement('span');
     var album = searchResults[i].album.images[2].url;
     var imgTag = document.createElement('img');
     imgTag.setAttribute('src', album);
     imgSpan.appendChild(imgTag);
     eachResultDiv.appendChild(imgSpan);
     resultDiv.appendChild(eachResultDiv);

     var trackSpan = document.createElement('span');
     trackSpan.setAttribute('class', 'track');
     trackSpan.style.padding = '0 10px';
     var trackName = searchResults[i].name;
     trackSpan.textContent = trackName;
     eachResultDiv.appendChild(trackSpan);

    }
   }
  });
 }

 function formSubmit() {
  var form = document.getElementById('search-form');
  var formData = new Object();
  formData.searchInput = document.getElementById('searchInput').value;
  return JSON.stringify(formData);
 }

 function clearSearchInfo() {
  var info = document.getElementById('search-info');
  info.style.display = 'none';
 }

 var searchButton = document.getElementById('search-btn');
 searchButton.addEventListener('click', searchData, false);
 searchButton.addEventListener('click', clearSearchInfo, false);