function validateForm() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;
  
  if (name.trim() === "") {
    alert("Please fill in your name");
    return false;
  }

  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!email.match(emailFormat)) {
    alert("Please enter a valid email address");
    return false;
  }

  const commentsInput = document.getElementById("comments");
  const comments = commentsInput.value;
  
  if (comments.trim() === "") {
    alert("Please fill in your comments");
    return false;
  }

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
return false; // Prevent the form from actually submitting

}