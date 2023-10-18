document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".submit-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get values entered by the user
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create an object to store the values
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Log the form data to the console in JSON format
    console.log(JSON.stringify(formData));

    // Example: axios.post('your-backend-url', formData)\
    axios.post('http://localhost:3000/user_reponse',formData)
    .then (res=>console.log(res))
    .catch(err=>console.log(err))
  });
});
