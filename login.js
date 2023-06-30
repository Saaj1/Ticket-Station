class User {
  constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
  }
}

document.getElementById("signInForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the values from the input fields
  const usernameInput = document.querySelector('input[name="txt"]');
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="pswd"]');
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Validate if the fields are not empty
  if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please enter all required fields.');
      return;
  }

  // Create a new user object
  const user = new User(username, email, password);

  // Store the user object in session storage for access on the index.html page
  sessionStorage.setItem('user', JSON.stringify(user));

  // Redirect to index.html
  window.location.href = 'index.html';
});

 // Retrieve the user object from session storage
 const storedUser = sessionStorage.getItem('user');

 if (storedUser) {
   // Parse the user object from JSON format
   const user = JSON.parse(storedUser);

   // Display the greeting with the username
   alert('Welcome, ' + user.name + '!');

   // Clear the user object from session storage
   sessionStorage.removeItem('user');
}
