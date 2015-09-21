// reports list
var showReports = new XMLHttpRequest();
showReports.open('GET', '/report/list/');
showReports.send();
showReports.addEventListener('load', function(data){
 var reports = JSON.parse(showReports.responseText);
 for (var report = 0; report < reports.length; report++) {
  var row = (reports[report].split(':'));
  var reportItem = document.createElement('tr');
  document.getElementById('reports').appendChild(reportItem);
  for (var detail = 0; detail < row.length; detail++) {
   var itemDetail = document.createElement('td');
   itemDetail.textContent = row[detail];
   reportItem.appendChild(itemDetail);
 }
}
});