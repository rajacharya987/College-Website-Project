// Variables for navigation menu
var navLinks = document.getElementById("navLinks");

// Functions to show and hide the menu
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Function to show the news overlay
function showNewsOverlay() {
    document.getElementById('news-overlay').style.display = 'flex';
}

// Function to close the news overlay
function closeNewsOverlay() {
    document.getElementById('news-overlay').style.display = 'none';
}

// Show the news overlay when the page loads
window.onload = function() {
    showNewsOverlay();
}

// Function to open the modal with an image
function openModal(imgSrc) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    var caption = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = imgSrc;
    caption.innerHTML = ""; // Add caption text if needed
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Close the modal when clicking outside of the image
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Toggle menu function using display property
function showMenuDisplay() {
    navLinks.style.display = 'block';
}

function hideMenuDisplay() {
    navLinks.style.display = 'none';
}