function Clock() {
var fulldate = new Date();
var hours = fulldate.getHours();
var mins = fulldate.getMinutes();
var secs = fulldate.getSeconds();
var yue = 1 + fulldate.getMonth();
var ri = fulldate.getDate();
var nian = fulldate.getFullYear();

if(hours < 10){
  hours = "0" + hours;
}

if(mins < 10){
  mins = "0" + mins;
}
if(secs < 10){
  secs = "0" + secs;
}
if(yue < 10){
  yue = "0" + yue;
}
if(ri < 10){
  ri = "0" + ri;
}
document.getElementById('month').innerHTML = yue;
document.getElementById('day').innerHTML = "/" + ri;
document.getElementById('year').innerHTML = "/" + nian;
document.getElementById('hour').innerHTML = "|" + hours;
document.getElementById('minute').innerHTML = ":" + mins;
document.getElementById('second').innerHTML = ":" + secs;
}

setInterval(Clock, 1000);
