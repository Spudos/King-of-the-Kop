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
  return true;
}