function addListeners(){for(var e=document.getElementsByTagName("a"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){e.preventDefault(),showReport(e)},!1)}function showReport(e){e.preventDefault();var t=e.target.getAttribute("href").split("/").pop(),n=new XMLHttpRequest;n.open("GET","/report/print/"+t,!0),n.send(),n.addEventListener("load",function(){var e=document.getElementById("individual-report");e.textContent=n.responseText})}var showReports=new XMLHttpRequest;showReports.open("GET","/report/list/"),showReports.send(),showReports.addEventListener("load",function(e){for(var t=JSON.parse(showReports.responseText),n=0;n<t.length;n++){var r=t[n].split(":"),o=document.createElement("tr");document.getElementById("reports").appendChild(o);for(var s=0;s<r.length;s++){var p=document.createElement("td");if(1==s){var a=document.createElement("a");a.setAttribute("href","http://localhost:1337/report/print/"+r[s].trim()),a.textContent="view report",o.appendChild(a)}else p.textContent=r[s],o.appendChild(p)}}addListeners()});