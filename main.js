let timeSinging = $( "#singing-rehearsal" ).val();
let timeFanmeet = $( "#fanmeet" ).val();
let timeLunch = $( "#lunch" ).val();



$("#singing-rehearsal").change(function() {
 timeSinging = $( "#singing-rehearsal" ).val();
 if (timeSinging==="10:30-11:30 am") {
    $("#default-img").attr("src", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/doja-cat-1582767283.jpg");
  } else {
    $("#default-img").attr("src", "https://theshaderoom.com/wp-content/uploads/2020/10/IMG_1081.jpg");

  }

  });
  $("#fanmeet").change(function() {
    timeFanmeet = $( "#fanmeet" ).val();
    if (timeFanmeet==="12:30-2:30 pm") {

       $("#default-img").attr("src", "https://static.billboard.com/files/2020/08/doja-cat-james-charles-makeup-tutorial-2020-video-still-billboard-1548-1597261378-compressed.jpg");
      } else {
        $("#default-img").attr("src", "https://theshaderoom.com/wp-content/uploads/2020/10/IMG_1081.jpg");
    
      }
      
   
     });

     $("#lunch").change(function() {
      timeLunch= $( "#lunch" ).val();
      if (timeLunch==="11:30-12:30 pm") {
  
         $("#default-img").attr("src", "https://townsquare.media/site/495/files/2020/02/Doja-Cat-2.jpg?w=980&q=75");
        } else {
          $("#default-img").attr("src", "https://theshaderoom.com/wp-content/uploads/2020/10/IMG_1081.jpg");
      
        }
     
       });
       let changeBack = true;
       $( "#partywoo" ).click(function() { 5
        if (changeBack === true) {
          $(this).css('background-color','#695d92');
        $(this).text('uh oh i see moms car'); 
        $("#default-img").attr("src", "https://media.gettyimages.com/photos/group-of-friends-at-a-party-picture-id949040980?s=612x612");
        }
        
       else if (changeBack === false) {
          $(this).css('background-`color','#828dca');
        $(this).text('party woo'); 
        $("#default-img").attr("src", "https://theshaderoom.com/wp-content/uploads/2020/10/IMG_1081.jpg");

       }
       changeBack = !changeBack;
      });
      function showTime() {
      let time = new Date(); 
      
     let hours = time.getHours();
     let  minutes = time.getMinutes();
    let seconds = time.getSeconds();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
   seconds = seconds < 10 ? '0'+seconds : seconds;
      const timeControl = `${hours}:${minutes}:${seconds}${ampm}`
      
      $("#clock").text(timeControl)
    }
  
  setInterval(showTime,1000)