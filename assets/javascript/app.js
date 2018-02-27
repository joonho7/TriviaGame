$("#beginning").empty()
$("#beginning").append("<h1>Good Luck!!</h1>").css('text-align', 'center')
$(document).on("click", "#start", function () {
  game.start();
});
$(document).on('click', '#over', function () {
  game.over();
});
var timer;
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

//----timer---//

var timer;

var game = {
  correct: 0,
  incorrect: 0,
  time: 120,

  countdown: function () {
    game.counter--;
    $('time-countdown').html(game.time);
    if (game.time === 0) {
      console.log('Times Up');
      game.done();
    }
  },
  start: function () {
    timer = setInterval(game.countdown, 1000);
    $("#game-area").prepend("<h2>Time Remaining: <span id='time-countdown'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      $('#game-area').append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        $('#game-area').append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    $('#game-area').append("<button id='done'>Done</button>");
  },

  done: function () {

    $.each($("input[name='question-0']:checked"), function () {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function () {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function () {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function () {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function () {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function () {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function () {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function () {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-8']:checked"), function () {
      if ($(this).val() === questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-9']:checked"), function () {
      if ($(this).val() === questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function () {

    clearInterval(timer);

    $("#game-area h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

}