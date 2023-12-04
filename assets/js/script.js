// **** Feedback From ****
// Add focus to the name field on page load
window.onload = function() {
  document.getElementById("name").focus();
};

// Make the submit button trigger the form submission when "Enter" is pressed
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    document.getElementById("submitButton").click();
  }
});

// perform form validation
function validateForm() {

  // check a name is submitted
  const nameInput = document.getElementById("name");
  const name = nameInput.value;
  
  if (name.trim() === "") {
    alert("Please fill in your name");
    return false;
  }

  // check a valid email is submitted
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!email.match(emailFormat)) {
    alert("Please enter a valid email address");
    return false;
  }

  // check comments hve been filled in
  const commentsInput = document.getElementById("comments");
  const comments = commentsInput.value;
  
  if (comments.trim() === "") {
    alert("Please fill in your comments");
    return false;
  }

  // check a feedback type has been selected
  const radioButtons = document.getElementsByName("feedbackType");
  let radioSelected = false;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      radioSelected = true;
      break;
    }
  }
  if (!radioSelected) {
    alert("Please select a feedback type");
    return false;
  }

// Hide the form and show the summary
document.getElementById("feedbackForm").style.display = "none";
document.getElementById("content").style.display = "block";

// Display the submitted information in the summary using a template literal
const summaryTemplate = `
  <h3>Thank you for your feedback</h3>
  <p>Name: ${name}</p>
  <p>Email: ${email}</p>
  <p>Feedback Type: ${document.querySelector('input[name="feedbackType"]:checked').value}</p>
  <p>Comments: ${comments}</p>
`;

document.getElementById("content").innerHTML = summaryTemplate;

// Prevent the form from actually submitting
return false; 

}

// **** Quiz ****
let homeScore = 0;
let awayScore = 0;

const questions = [
  {
    questionNumber: "Question 1",
    question: "Of the current players at the club, who has the most goals?",
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
    question: "When the current Anfield road development is complete, what will be the approximate capacity of Anfield",
    options: ["52000", "45000", "61000"],
    answer: "61000"
  },
  {
    questionNumber: "Question 5",
    question: "When Liverpool played against Man utd at Anfield in the 22/23 season, what was the score?",
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
    question: "How many times have Liverpool won Englands top division?",
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
      imageContainer.innerHTML = '<img src="/assets/quiz/image1.jpeg" alt="Image 1">';
      break;
    case 1:
      imageContainer.innerHTML = '<img src="/assets/quiz/image2.jpg" alt="Image 2">';
      break;
    case 2:
      imageContainer.innerHTML = '<img src="/assets/quiz/image3.jpg" alt="Image 3">';
      break;
    case 3:
      imageContainer.innerHTML = '<img src="/assets/quiz/image4.jpg" alt="Image 4">';
      break;
    case 4:
      imageContainer.innerHTML = '<img src="/assets/quiz/image5.jpeg" alt="Image 5">';
      break;
    case 5:
      imageContainer.innerHTML = '<img src="/assets/quiz/image6.jpg" alt="Image 6">';
      break;
    case 6:
      imageContainer.innerHTML = '<img src="/assets/quiz/image7.webp" alt="Image 7">';
      break;
    case 7:
      imageContainer.innerHTML = '<img src="/assets/quiz/image8.jpg" alt="Image 8">';
      break;
    case 8:
      imageContainer.innerHTML = '<img src="/assets/quiz/image9.jpg" alt="Image 9">';
      break;
    case 9:
      imageContainer.innerHTML = '<img src="/assets/quiz/image10.jpg" alt="Image 10">';
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
      homeScore++;
      document.getElementById('homeScoreDisplay').textContent = homeScore;
      alert("Scored, marvellous strike!");
    } else {
      awayScore++;
      document.getElementById('awayScoreDisplay').textContent = awayScore;
      alert("A miss, Hit the bar!");
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion(currentQuestionIndex);
    } else {
      alert("Thats full time! The final score is: " + homeScore + " - " + awayScore);
      // Add further actions for quiz completion
    }
  });
});