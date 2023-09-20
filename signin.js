document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the Sign In form
    const signinForm = document.querySelector(".signin-form");

    // Add a submit event listener to the form
    signinForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Assuming you have a server-side authentication mechanism,
        // here you can make an AJAX request to validate user credentials.
        // For this example, let's simulate a successful login.
        const email = signinForm.querySelector('input[type="email"]').value;
        const password = signinForm.querySelector('input[type="password"]').value;

        // Simulate a successful login (replace this with actual authentication)
        if (email === "example@example.com" && password === "password432") {
            // Redirect to the "home.html" page upon successful login
            window.location.href = "map.html";
        } else {
            // Display an error message or handle unsuccessful login
            alert("Invalid credentials. Please try again.");
        }
    });
});
