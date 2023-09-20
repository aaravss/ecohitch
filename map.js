document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map with Leaflet and set the center and zoom level
    const map = L.map("map").setView([1.3521, 103.8198], 12); // Replace with your desired map center coordinates and zoom level

    // Add the OpenStreetMap tile layer to the map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the logout button element
    const logoutButton = document.getElementById("logout-button");

    // Add a click event listener to the logout button
    logoutButton.addEventListener("click", function () {
        // Redirect to the index.html page when the button is clicked
        window.location.href = "index.html";
    });

});

document.addEventListener("DOMContentLoaded", function () {
    // Get the feedback button element
    const feedbackButton = document.getElementById("feedback-button");

    // Add a click event listener to the logout button
    feedback.addEventListener("click", function () {
        // Redirect to the feedback.html page when the button is clicked
        window.location.href = "feedback.html";
    });
});

// JavaScript
const drivers = document.querySelectorAll('.items');
let currentDriverIndex = 0;

// Function to show the current driver
function showCurrentDriver() {
    drivers.forEach((driver, index) => {
        if (index === currentDriverIndex) {
            driver.style.display = 'inline-block';
        } else {
            driver.style.display = 'none';
        }
    });
}

// Initialize the display
showCurrentDriver();

// Previous Driver Button Click Event
document.getElementById('prev-driver').addEventListener('click', () => {
    currentDriverIndex = (currentDriverIndex - 1 + drivers.length) % drivers.length;
    showCurrentDriver();
});

// Next Driver Button Click Event
document.getElementById('next-driver').addEventListener('click', () => {
    currentDriverIndex = (currentDriverIndex + 1) % drivers.length;
    showCurrentDriver();
});
