// reports list
var showReports = new XMLHttpRequest();
showReports.open('GET', '/reports/');
showReports.send();
showReports.addEventListener('load', function(data){
  var reportsText = JSON.parse(showReports.responseText);
  console.log(reportsText.length)
  for(i = 0; i < reportsText.length; i++){
    document.getElementById('reports').textContent = reportsText[i];
    console.log(reportsText[i]);
  }
});