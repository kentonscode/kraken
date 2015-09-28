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
     if(detail == 1) {
       var link = document.createElement('a');
       link.setAttribute('href', 'http://localhost:1337/report/print/' + row[detail].trim());
       link.textContent = 'view report';
       reportItem.appendChild(link);
     } else {
       itemDetail.textContent = row[detail];
       reportItem.appendChild(itemDetail);
     }
   }
 } 
 addListeners();
});

//show single report

function showReport(event) {
  event.preventDefault();
  var id = event.target.getAttribute('href').split('/').pop();
  var report = new XMLHttpRequest();
  report.open('GET', '/report/print/' + id , true);
  report.send();
  report.addEventListener('load', function() {
   var displayReport = document.getElementById('individual-report');
   displayReport.textContent = report.responseText;
 });
}

function addListeners() {
 var reportLinks = document.getElementsByTagName('a');

 for (var i = 0; i < reportLinks.length; i++) {
   reportLinks[i].addEventListener('click', function(event) {
     event.preventDefault();
     showReport(event);
   }, false);
 }
}