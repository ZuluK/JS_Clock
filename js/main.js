//function to add a zero if the number is less than 10
function whatTime(i){
  //check if number is less than 10
  if(i < 10){
    //adds zero in front of number
    i = "0" + i
  }
  //returns the new value
  return i;
}

//When the page is loaded
  function startTime() {
//stores current time
  var timeNow = new Date();
//stores current hour, minute and second
  var hour = timeNow.getHours();
  var minute = timeNow.getMinutes();
  var second = timeNow.getSeconds();
//Changes to standard time from military time
  if (hour > 12){
//removes 12 from hours
    hour = hour - 12;
  }

//upadates variable minute and second using whatTime function
  minute = whatTime(minute);
  hour = whatTime(hour);
//selct element with id of time and changes element to current time
  document.getElementById('time').textContent = hour + ":" + minute + ":" + second;

//calls the function every second
    setTimeout (function (){
      startTime()
    }, 1000)
}
//add event listener to start function
document.getElementById('time').addEventListener('onload',startTime(), false);
