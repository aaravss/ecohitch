document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Retrieve the values of errorPage and issueDescription fields
    var errorPage = document.getElementById("errorPage").value;
    var issueDescription = document.getElementById("issueDescription").value;

    // You can handle the feedback data here, for example, by sending it to a server or logging it
    console.log("Page of the Error: " + errorPage);
    console.log("Issue Description: " + issueDescription);

    // Optionally, show a confirmation message to the user
    alert("Thank you for your feedback!");

    // Clear the form
    document.getElementById("errorPage").value = '';
    document.getElementById("issueDescription").value = '';

    back-button.addEventListener("click", function () {
        // Redirect to the feedback.html page when the button is clicked
        window.location.href = "map.html";
    });
});

function back(){
window.location.href = "map.html";

}