$("#start").on("click", function(){
$("#beginning").empty()
$("#beginning").append("<h1>Good Luck!!</h1>").css('text-align','center')
var correct = 0;
var wrong = 0;
var unanswered = 0;
var time;
//timer ----------------------------------------------------------------
 run();
 var time = 120;
 var intervalId;

	function run(){ 
	intervalId = setInterval(decrement, 1000)
	}
    
     function decrement() {  
      time--;
      $("#beginning").html("<h1>" + time + "</h1>");
      if (time === 0) {
       stop();
      	}
      }

      function stop() {
      clearInterval(intervalId);
    }
// ------------------------------------------------------------------------
var questions = ["Which two actors directed themselves in movie and won Oscars for Best Actor?",
"“After all, tomorrow is another day!” Was the last line in which Oscar-winning Best Picture?",
"Who is the only person to win an Oscar for Best Director for the only movie he ever directed?",
"Who is the most nominated actor in Academy history?",
"In which movie was the Oscar-winning song “Do Not Forsake Me, Oh My Darlin” prominently featured?",
"Which classic Billy Wilder film noir was the basis for the plot in director Lawrence Kasdan’s neo-noir Body Heat, starring Kathleen Turner and William Hurt?",
"What was the first Western to win the Academy Award for Best Picture?", "What was the first film to receive an Academy Award nomination in each of the performance categories?",
"What Cameron Crowe-directed Hollywood remake was the setting for the on-screen and real-life romance of married actor Tom Cruise and Spanish star Penelope Cruz?",
"Which movie ends with this final line of dialogue: “Why, she wouldn’t even harm a fly”?"]
var mutipleChoice ={
Q1:["A. Al Pacino and Timothy Hutton" , "B. Jack Nicholson and Kevin Spacey", "C. Laurence Oliver and Roberto Benigni", "D. Tom Hanks and Paul Newman"],
Q2:["A. Gone With the Wind", "B. Great Expectations", "C. Harold and Maude", "D. The Matrix "],
Q3:["A. Bob Fosse", "B. Frank Borzage", "C. Leo McCarey", "D. Jerome Robbins"],
Q4:["A. Jack Nicholson", "B. Laurence Olivier", "C. Spencer Tracy", "D. Paul Newman"],
Q5:["A. Butch Cassidy and the Sundance Kid", "B. Calamity Jane", "C. High Noon", "D.Song of the South"],
Q6:["A. Ace in the Hole", "B. Double Indemnity", "C. The Maltese Falcon", "D. Sunset Boulevard"],
Q7:["A. Brokeback Mountain", "B. Cimarron", "C. The Last Wagon", "D. Stagecoach"],
Q8:["A. A Streetcar Named Desire", "B. The Color Purple", "C. My Man Godfrey", "D. The Turning Point"],
Q9:["A.Magnolia", "B. Masked and Anonymous", "C. Vanila Sky", "D. Waking up in Reno"],
Q10:["A. Diabolique", "B. Psycho", "C. To die For", "D. Monster"]
}

function questionGenerator(){
for(var i = 0 ; i< questions.length ; i++){
 $("#body").append("<h3> " + (i+1) + ". " + questions[i] + "</h3>");
 }
 for(var j = 0; j<mutipleChoice.length; j++){
$("#body").append("<h3>"  + mutipleChoice[j] + "</h3>" )
 console.log(mutipleChoice[j]);
 }
 
}

questionGenerator();











});