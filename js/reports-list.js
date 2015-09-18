// reports list
var showReports = new XMLHttpRequest();
showReports.open('GET', '/reports/');
showReports.send();
showReports.addEventListener('load', function(data){
  var reportsText = JSON.parse(showReports.responseText);
  console.log(reportsText.length)
  for(i = 0; i < reportsText.length; i++){
    var tableRow = document.createElement('tr')
    tableRow.textContent = reportsText[i];
    document.getElementById('reports').appendChild(tableRow);

  }
});