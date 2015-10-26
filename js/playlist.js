 //function showImage(resultObject, numOfResult, eachDiv, divOfResults) {
 // var imgSpan = document.createElement('span');
 // var album = resultObject[numOfResult].album.images[2].url;
 // var imgTag = document.createElement('img');
 // imgTag.setAttribute('src', album);
 // imgSpan.appendChild(imgTag);
 // eachDiv.appendChild(imgSpan);
 // divOfResults.appendChild(eachDiv);
 //}

 //function showTrack(resultObject, numOfResult, eachDiv) {
 // var trackSpan = document.createElement('span');
 // trackSpan.setAttribute('class', 'track');
 // trackSpan.style.padding = '0 10px';
 // var trackName = resultObject[numOfResult].name;
 // trackSpan.textContent = trackName;
 // eachDiv.appendChild(trackSpan);
 //}

 //function showArtist(resultObject, numOfResult, eachDiv) {
 // var artistSpan = document.createElement('span');
 // artistSpan.setAttribute('class', 'artist');
 // artistSpan.style.color = '#888';
 // var artist = resultObject[numOfResult].artists[0].name;
 // artistSpan.textContent = artist;
 // eachDiv.appendChild(artistSpan);
 //}

 //function showAudio(resultObject, numOfResult, eachDiv) {
 // var audioDiv = document.createElement('div');
 // audioDiv.setAttribute('class', 'audio');
 // var preview = resultObject[numOfResult].preview_url;
 // var audio = document.createElement('audio');
 // audio.setAttribute('controls', '');
 // var source = document.createElement('source');
 // source.setAttribute('src', preview);
 // source.setAttribute('type', 'audio/mpeg');
 // audio.appendChild(source);
 // audioDiv.appendChild(audio);
 // eachDiv.appendChild(audioDiv);
 //}

 //function showButton(track) {
 // var buttonSpan = document.createElement('span');
 // buttonSpan.style.float = 'right';
 // var button = document.createElement('button');
 // button.setAttribute('class', 'add-button');
 // button.style.background = '#ff445f';
 // button.style.border = 'none';
 // button.style.borderRadius = '50%';
 // button.style.padding = '8px 12px 4px 12px';
 // button.style.margin = '28px 30px 0 0';
 // var plus = document.createElement('span');
 // plus.setAttribute('class', 'glyphicon glyphicon-plus');
 // button.appendChild(plus);
 // buttonSpan.appendChild(button);
 // track.appendChild(buttonSpan);
 //}

 function searchData (event) {
  event.preventDefault();
  var submitRequest = new XMLHttpRequest();
  submitRequest.open('POST','/spotify/data', true);
  submitRequest.setRequestHeader('content-type', 'application/json');
  submitRequest.send(formSubmit());
  submitRequest.addEventListener('load',function () {

   if((submitRequest.status === 200) || (submitRequest.status === 304)) {

		//var searchResults = JSON.parse(submitRequest.responseText);
		////
    //for(var i = 0; i < searchResults.length; i++) {
		//
    // var eachResultDiv = document.createElement('div');
    // eachResultDiv.style.padding = '15px 0 5px 0';
    // eachResultDiv.style.borderBottom = '1px solid #393939';
    // var resultDiv = document.getElementById('result');
		//
    // var trackSpan = document.createElement('span');
    // eachResultDiv.appendChild(trackSpan);
		//
    // showImage(searchResults, i, eachResultDiv, resultDiv);
    // showTrack(searchResults, i, eachResultDiv);
    // showArtist(searchResults, i, eachResultDiv);
    // showAudio(searchResults, i, eachResultDiv);
    // showButton(trackSpan);
    //}
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
  var result = document.getElementById('result');
  result.style.display = 'block';
 }

 var searchButton = document.getElementById('search-btn');
 searchButton.addEventListener('click', searchData, false);
 searchButton.addEventListener('click', clearSearchInfo, false);