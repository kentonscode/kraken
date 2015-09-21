// reports list
var showReports = new XMLHttpRequest();
showReports.open('GET', '/report/list/');
showReports.send();
showReports.addEventListener('load', function(data){
  var reportsText = JSON.parse(showReports.responseText);
  var splitReports = reportsText.toString().split(':');
  console.log(splitReports.length)

  for (var tr = 0; tr <= splitReports.length; tr++) {
    var tableRows = document.createElement('tr');
    document.getElementById('reports').appendChild(tableRows)

  for(i = 0; i < splitReports.length; i++){
    var tableDate = document.createElement('td');
    tableDate.textContent = splitReports[tr];
    document.getElementsByTagName('tr')[tr].appendChild(tableDate);
  }
}
});