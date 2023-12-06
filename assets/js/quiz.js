// **** Quiz ****
// Add event listener to the start quiz button
document.getElementById('startQuizBtn').addEventListener('click', function() {
  // Display the first question
  displayQuestion(currentQuestionIndex);
  // Remove the start quiz button
  this.style.display = 'none';
  document.querySelector('.quiz-container').style.display = 'block';
});

let homeScore = 0;
let awayScore = 0;

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

const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const answerButtons = document.querySelectorAll('.answer-btn');

let currentQuestionIndex = 0;

function displayQuestion(index) {
  questionNumber.textContent = questions[index].questionNumber;
  questionText.textContent = questions[index].question;
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = questions[index].options[i];
  }

  // Change the image based on the current question
  const imageContainer = document.getElementById('imageContainer');
  switch (index) {
    case 0:
      imageContainer.innerHTML = '<img src="/assets/quiz/image1.jpeg" alt="a picture of liverpool celegrating" class="quizpic">';
      break;
    case 1:
      imageContainer.innerHTML = '<img src="/assets/quiz/image2.jpg" alt="a picture of jordan henderson" class="quizpic">';
      break;
    case 2:
      imageContainer.innerHTML = '<img src="/assets/quiz/image3.jpg" alt="a picture of trent alexander-arnold about to take a corner" class="quizpic">';
      break;
    case 3:
      imageContainer.innerHTML = '<img src="/assets/quiz/image4.jpg" alt="a picture of anfield" class="quizpic">';
      break;
    case 4:
      imageContainer.innerHTML = '<img src="/assets/quiz/image5.jpeg" alt="a picture of the liverpool and man utd logos" class="quizpic">';
      break;
    case 5:
      imageContainer.innerHTML = '<img src="/assets/quiz/image6.jpg" alt="a picture of liverpool winning the champions leage" class="quizpic">';
      break;
    case 6:
      imageContainer.innerHTML = '<img src="/assets/quiz/image7.webp" alt="a picture of jamie carragher" class="quizpic">';
      break;
    case 7:
      imageContainer.innerHTML = '<img src="/assets/quiz/image8.jpg" alt="a picture of the premier league trophy" class="quizpic">';
      break;
    case 8:
      imageContainer.innerHTML = '<img src="/assets/quiz/image9.jpg" alt="a picture of a premnier league table" class="quizpic">';
      break;
    case 9:
      imageContainer.innerHTML = '<img src="/assets/quiz/image10.jpg" alt="a picture of the fa cup" class="quizpic">';
      break;            
    default:
      imageContainer.innerHTML = ''; // Clear the image container if no specific image is needed
      break;
  }
}

displayQuestion(currentQuestionIndex);

answerButtons.forEach(button => {
  button.addEventListener('click', function() {
    const selectedAnswer = this.textContent;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
      document.getElementById('board').textContent = "Liverpool Score!";
      setTimeout(function() {
        document.getElementById('homeScoreDisplay').textContent = homeScore;
        document.getElementById('board').textContent = "Match Score";
      }, 2000);
      homeScore++;
    } else {
      document.getElementById('board').textContent = "Away team score!";
      setTimeout(function() {
        document.getElementById('awayScoreDisplay').textContent = awayScore; // Update awayScore instead of homeScore
        document.getElementById('board').textContent = "Match Score";
      }, 2000);
      awayScore++; // Update the awayScore variable
    }

    // Delay moving to the next question
    setTimeout(function() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
      } else {
        document.getElementById('board').textContent = "Final Score";
      }
      if (currentQuestionIndex === questions.length) {
        const tryAgainButton = document.createElement('button');
        tryAgainButton.textContent = 'Try Again';
        tryAgainButton.addEventListener('click', function() {
          currentQuestionIndex = 0;
          homeScore = 0;
          awayScore = 0;
          document.getElementById('homeScoreDisplay').textContent = homeScore;
          document.getElementById('awayScoreDisplay').textContent = awayScore;
          displayQuestion(currentQuestionIndex);
          // Hide the "Try Again" button
          tryAgainButton.style.display = 'none';
        });
        document.querySelector('.quiz-container').appendChild(tryAgainButton);
      }
    }, 3000); // Delay moving to the next question for 3 seconds
  });
});
