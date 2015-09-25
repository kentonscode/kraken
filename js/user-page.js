var submit = document.getElementById('scan-button');

function submitUrl(event) {
  event.preventDefault();
  console.log(formData()); //shows form inputs on client console 
  var requestScan = new XMLHttpRequest();
  requestScan.open("GET", "/scan/" + document.forms[0].elements.urlInput.value, true);
  requestScan.setRequestHeader("Content-type", "application/json");
  requestScan.send(formData());
  requestScan.addEventListener('load', function(){
  });
} 

submit.addEventListener('click', submitUrl, false);


function formData() {
  var theData = new Object();
  theData.urlInput = document.forms[0].elements.urlInput.value;
  return JSON.stringify(theData);
}