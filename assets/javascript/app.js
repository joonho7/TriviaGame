$("#start").on("click", function(){
$(".container").empty()
$(".container").append("<h1>Good Luck!!</h1>").css('text-align','center')
$("#start").on("click",run());

 var time = 120;
 var intervalId;

	function run(){ 
	intervalId = setInterval(decrement, 1000)
	}
    
     function decrement() {  
      time--;
      $(".container").html("<h2>" + time + "</h2>");
      if (time === 0) {
       stop();
      	}
      }

      function stop() {
      clearInterval(intervalId);
    }

});