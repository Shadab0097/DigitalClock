 
function showdate (){
   var date = new Date().toDateString()
   document.getElementById('showdate').innerHTML = date
}
showdate()

function showtime(){
   var clock= new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit'})
   document.getElementById('showtime').innerHTML=clock
}
showtime()

 var intervaltime;
function startclock(){
   intervaltime=setInterval(showtime,1000)
}

function stopclock(){
   clearInterval(intervaltime)
}



