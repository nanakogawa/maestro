 function clearSearchInfo() {
  var info = document.getElementById('search-info');
  info.style.display = 'none';
  var result = document.getElementById('result');
  result.style.display = 'block';
 }

 var searchButton = document.getElementById('search-btn');
 searchButton.addEventListener('click', clearSearchInfo, false);