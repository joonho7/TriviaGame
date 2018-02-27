$("#start").on("click", function () {
      $("#beginning").empty()
      $("#beginning").append("<h1>Good Luck!!</h1>").css('text-align', 'center')
      var correct = 0;
      var wrong = 0;
      var unanswered = 0;
      var time;
      //timer ----------------------------------------------------------------//
      run();
      var time = 120;
      var intervalId;

      function run() {
        intervalId = setInterval(decrement, 1000)
      };

      function decrement() {
        time--;
        $("#beginning").html("<h1>" + time + "</h1>");
        if (time === 0) {
          stop();
        }
      };

      function stop() {
        clearInterval(intervalId);
      }
      // set of questions ------------------------------------------------------------------------//
      var question = [{
        question: "Which two actors directed themselves in movie and won Oscars for Best Actor?",
        answers: ["Al Pacino and Timothy Hutton", "Jack Nicholson and Kevin Spacey", "Laurence Oliver and Roberto Benigni", "Tom Hanks and Paul Newman"],
        rightAnswer: "Laurence Oliver and Roberto Benigni"
      }, {
        question: "“After all, tomorrow is another day!” Was the last line in which Oscar-winning Best Picture?",
        answers: ["Gone With the Wind", "Great Expectations", "Harold and Maude", "The Matrix "],
        rightAnswer: "Gone With the Wind"
      }, {
        question: "Who is the only person to win an Oscar for Best Director for the only movie he ever directed?",
        answers: ["Bob Fosse", "Frank Borzage", "Leo McCarey", "Jerome Robbins"],
        rightAnswer: "Jerome Robbins"
      }, {
        question: "Who is the most nominated actor in Academy history?",
        answers: ["Jack Nicholson", "Laurence Olivier", "Spencer Tracy", "Paul Newman"],
        rightAnswer: "Jack Nicholson"
      }, {
        question: "In which movie was the Oscar-winning song 'Do Not Forsake Me, Oh My Darlin' prominently featured?",
        answers: ["Butch Cassidy and the Sundance Kid", "Calamity Jane", "High Noon", "Song of the South"],
        rightAnswer: "High Noon"
      }, {
        question: "Which classic Billy Wilder film noir was the basis for the plot in director Lawrence Kasdan’s neo-noir Body Heat, starring Kathleen Turner and William Hurt?",
        answers: ["Ace in the Hole", "Double Indemnity", "The Maltese Falcon", "Sunset Boulevard"],
        rightAnswer: "Double Idemnity"
      }, {
        question: "What was the first Western to win the Academy Award for Best Picture?",
        answers: ["Brokeback Mountain", "Cimarron", "The Last Wagon", "Stagecoach"],
        rightAnswer: "Cimarron"
      }, {
        question: "What was the first film to receive an Academy Award nomination in each of the performance categories?",
        answers: ["A Streetcar Named Desire", "The Color Purple", "My Man Godfrey", "The Turning Point"],
        rightAnswer: "My Man Godfrey"
      }, {
        question: "What Cameron Crowe-directed Hollywood remake was the setting for the on-screen and real-life romance of married actor Tom Cruise and Spanish star Penelope Cruz?",
        answers: ["Magnolia", "Masked and Anonymous", "Vanila Sky", "Waking up in Reno"],
        rightAnswer: "Vanila Sky"
      }, {
        quetion: "Which movie ends with this final line of dialogue: “Why, she wouldn’t even harm a fly?",
        answers: ["Diabolique", "Psycho", "To die For", "Monster"],
        rightAnswer: "Psycho"
      }];
      
      
      