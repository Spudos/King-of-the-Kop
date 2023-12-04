function validateForm() {
  const radioButtons = document.getElementsByName("feedbackType");
  let radioSelected = false;
  console.log("test")
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