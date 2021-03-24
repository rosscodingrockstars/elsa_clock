let timeSinging = $( "#singing-rehearsal" ).val();
let timeFanmeet = $( "#fanmeet" ).val();
let timeLunch = $( "#lunch" ).val();



$("#singing-rehearsal").change(function() {
 timeSinging = $( "#singing-rehearsal" ).val();
 if (timeSinging==="10:30-11:30 am") {
    $("#default-img").attr("src", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/doja-cat-1582767283.jpg");
  } else if (timeSinging==="12:30-2:30 pm") {
    $("#default-img").attr("src", "https://static.billboard.com/files/2020/08/doja-cat-james-charles-makeup-tutorial-2020-video-still-billboard-1548-1597261378-compressed.jpg");
  } else if (lunch==="11:30-12:30 pm") {
    $("#default-img").attr("src", "https://townsquare.media/site/495/files/2020/02/Doja-Cat-2.jpg?w=980&q=75");
  }

  });
  // https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/doja-cat-1582767283.jpg
  //https://static.billboard.com/files/2020/08/doja-cat-james-charles-makeup-tutorial-2020-video-still-billboard-1548-1597261378-compressed.jpg
  //https://townsquare.media/site/495/files/2020/02/Doja-Cat-2.jpg?w=980&q=75
  