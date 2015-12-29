var target_date = new Date("Jan 1, 2016").getTime(); 
var days, hours, minutes, seconds; 
var countdown = document.getElementById("countdown"); 
setInterval(function () {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
  countdown.innerHTML = days + " <span class=\'hitam\'>hari</span> " + hours + " <span class=\'hitam\'>jam</span> "
  + minutes + " <span class=\'hitam\'>menit</span> " + seconds + " <span class=\'hitam\'>detik menuju</span> 2016";   
}, 1000);
