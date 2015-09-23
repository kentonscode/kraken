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

});

//show single report
var viewReportlinks = document.getElementsByName('a');

function displaySingleReport(event) {
  event.preventDefault();
  var viewReport = new XMLHttpRequest();
  viewReport.open('GET', '/report/print/:id', true);
  viewReport.send(report);
  viewReport.addEventListener('load', function(data) {
    console.log('hello');

  });
}

viewReportlinks.addEventListener('click', displaySingleReport, false);