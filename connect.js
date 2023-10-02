// 

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".cta-form"); // Select the form by class name
  const fullNameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");
  const messageTextArea = document.querySelector(".messages");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get values entered by the user
    const fullName = fullNameInput.value;
    const email = emailInput.value;
    const message = messageTextArea.value;

    // Create an object to store the values
    const formData = {
      name: fullName,
      email: email,
      message: message,
    }; 


    // Log the form data to the console
    console.log("Form Data:", formData);  

    axios.post('http://localhost:3000/user_reponse',formData)
      .then (res=>console.log(res))
      .catch(err=>console.log(err))

    // You can use the formData object as needed, e.g., send it to a server via AJAX.
  });
});



