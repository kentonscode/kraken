function formData(){var t=new Object;return t.urlInput=document.forms[0].elements.urlInput.value,JSON.stringify(t)}function submitUrl(t){t.preventDefault();var e=new XMLHttpRequest;e.open("GET","/scan/"+document.forms[0].elements.urlInput.value,!0),e.setRequestHeader("Content-type","application/json"),e.send(formData()),e.addEventListener("load",function(){})}var submit=document.getElementById("scan-button");submit.addEventListener("click",submitUrl,!1);