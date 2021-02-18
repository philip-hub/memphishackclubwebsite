


function nextTime(){

  var currentDate = new Date();
  var hours = currentDate.getHours();
  var currentDay =currentDate.getDay();
  var mm = currentDate.getMonth() + 1;
  var dd = currentDate.getDate();
  var yyyy = currentDate.getFullYear();
  currentDate = mm + '/' + dd + '/' + yyyy;

  currentDate = new Date(currentDate);

  var referenceDate = new Date("01/7/2021");
  var days = currentDate.getTime() - referenceDate.getTime();
  days = days / (1000 * 3600 * 24);

  var weeks = (days/7);

  //console.log(currentDay);

  if (currentDay == 4){
    if(hours >= 20){
      weeks = Math.trunc(weeks) + 1;
    }
    else{
      weeks = Math.trunc(weeks);
    }
  } else{
    weeks = Math.trunc(weeks) + 1;
  }
  var i;
  var add;

  //console.log(weeks);
  

  var nextMeeting = referenceDate;


  for ( i = weeks; i < weeks*2; i++) {
    nextMeeting.setDate(nextMeeting .getDate() + 7);
    console.log(nextMeeting);
    console.log("If Your Here You Should definatly come to Hackclub")
    console.log("$")
    }

  var mm = nextMeeting.getMonth() + 1;
  var dd = nextMeeting.getDate();
  var yyyy = nextMeeting.getFullYear();
  nextMeeting = mm + '/' + dd + '/' + yyyy;

 var text = "Club Meeting on Zoom on 4:00 PM CST Thursday "+nextMeeting+" (Click to Join)<br>";

 console.log("--------------------")
 console.log("#")
 console.log("/")
 console.log("#")
 console.log("/")
  
 return text;

}

