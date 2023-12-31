/*jshint esversion: 6 */
// **** Quiz ****
// Add event listener to the start quiz button
document.getElementById('startGame').addEventListener('click', function() {
  // Display the first question
  displayQuestion(currentQuestionIndex);
  // Remove the start quiz button
  document.getElementById('instructions').style.display = 'none';
  document.querySelector('.quiz-container').style.display = 'block';
});

// set required variables
let homeScore = 0;
let awayScore = 0;

// set questions and answers
const questions = [
  {
    questionNumber: "Question 1",
    question: "Of the current players at the club, who has the most goals for LFC?",
    options: ["Jota", "Salah", "Gomez"],
    answer: "Salah"
  },
  {
    questionNumber: "Question 2",
    question: "Who replaced Hendo as the club captain at the start of the season?",
    options: ["Trent", "Van Dijk", "Allison"],
    answer: "Van Dijk"
  },
  {
    questionNumber: "Question 3",
    question: "In the 2019 Champions League Semi Final, LFC were 3-0 down from the first leg before an amazing comeback saw them win 4-0 at home.  Who scored the 4th goal?",
    options: ["Henderson", "Wijnaldum", "Origi"],
    answer: "Origi"
  },
  {
    questionNumber: "Question 4",
    question: "When the current Anfield Road development is complete, what will be the approximate capacity of Anfield",
    options: ["52000", "45000", "61000"],
    answer: "61000"
  },
  {
    questionNumber: "Question 5",
    question: "When Liverpool played against Man Utd at Anfield in the 22/23 season, what was the score?",
    options: ["3-0", "7-0", "10-0"],
    answer: "7-0"
  },
  {
    questionNumber: "Question 6",
    question: "Who did Liverpool beat 2-0 in the 2019 Champions League Final in Madrid?",
    options: ["Tottenham", "Man City", "Napoli"],
    answer: "Tottenham"
  },
  {
    questionNumber: "Question 7",
    question: "How many times did Jamie Carragher play for Liverpool?",
    options: ["508", "509", "510"],
    answer: "508"
  },
  {
    questionNumber: "Question 8",
    question: "How many times have Liverpool won England's top division?",
    options: ["13", "14", "19"],
    answer: "19"
  },
  {
    questionNumber: "Question 9",
    question: "What position did Liverpool finish in in 19/20?",
    options: ["1st", "2nd", "3rd"],
    answer: "1st"
  },
  {
    questionNumber: "Question 10",
    question: "How many times have LFC won the FA Cup?",
    options: ["4", "8", "9"],
    answer: "8"
  }
];

// add required constants
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const answerButtons = document.querySelectorAll('.answer-btn');
const homeScoreDisplay = document.getElementById('homeScoreDisplay');
const awayScoreDisplay = document.getElementById('awayScoreDisplay');
const board = document.getElementById('board');
const quizContainer = document.querySelector('.quiz-container');

let currentQuestionIndex = 0;

// show the question
function displayQuestion(index) {
  questionNumber.textContent = questions[index].questionNumber;
  questionText.textContent = questions[index].question;

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = questions[index].options[i];
  }

  const imageSources = [
    "assets/images/quiz/image1.webp",
    "assets/images/quiz/image2.webp",
    "assets/images/quiz/image3.webp",
    "assets/images/quiz/image4.webp",
    "assets/images/quiz/image5.webp",
    "assets/images/quiz/image6.webp",
    "assets/images/quiz/image7.webp",
    "assets/images/quiz/image8.webp",
    "assets/images/quiz/image9.webp",
    "assets/images/quiz/image10.webp"
  ];

  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = index < imageSources.length ? `<img src="${imageSources[index]}" alt="Quiz Image" class="quizpic">` : '';
}


displayQuestion(currentQuestionIndex);

// check answer and show who scored if right or wrong answer given
answerButtons.forEach(button => {
  button.addEventListener('click', function() {

    // Disable all answer buttons
      answerButtons.forEach(button => {
      button.disabled = true;
    });
    
    const selectedAnswer = this.textContent;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
      board.textContent = "Liverpool Score!";
      setTimeout(function() {
        homeScoreDisplay.textContent = homeScore;
        board.textContent = "Match Score";
      }, 2000);
      homeScore++;
    } else {
      board.textContent = "Away team score!";
      setTimeout(function() {
        awayScoreDisplay.textContent = awayScore;
        board.textContent = "Match Score";
      }, 2000);
      awayScore++;
    }

    // Delay moving to the next question
    setTimeout(function() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
      } else {
        board.textContent = "Final Score";
      }

      // Enable all answer buttons for the next question
        answerButtons.forEach(button => {
        button.disabled = false;
      });

      // show try again button and reset game when it is pressed
      if (currentQuestionIndex === questions.length) {
        const tryAgainButton = document.createElement('button');
        tryAgainButton.textContent = 'Try Again';
        tryAgainButton.addEventListener('click', function() {
          currentQuestionIndex = 0;
          homeScore = 0;
          awayScore = 0;
          homeScoreDisplay.textContent = homeScore;
          awayScoreDisplay.textContent = awayScore;
          displayQuestion(currentQuestionIndex);

          tryAgainButton.style.display = 'none';
        });
        quizContainer.appendChild(tryAgainButton);
      }
    }, 2000);
  });
});

