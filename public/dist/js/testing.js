var express=require("express"),testScan=express.Router(),fs=require("fs"),spawn=require("child_process").spawn;testScan.get("/:url",function(r,e,s){var t=require("child_process").spawn,a=t("ruby",["wpscan.rb","--batch","--no-color","--url",r.params.url],{cwd:"/Users/Kentonkotsiris/wpscan/"});a.stdout.on("data",function(s){fs.readdir("./reports",function(s,t){for(var a=r.params.url,n=0;n<t.length;n++)if(t[n].indexOf(a)>-1){var c=fs.readFileSync(__dirname+"/../reports/"+t[n],"utf8");e.end(c)}})})}),module.exports=testScan;var testScan=require("./js/testing.js");app.use("/test",testScan);