// JavaScript to hide the loading screen and display the main content once all resources are loaded
window.addEventListener("load", function () {
	// Select the loading screen and main content elements
	var loadingScreen = document.querySelector(".loading-screen");
	var mainContent = document.querySelector(".page-content");

	// Hide the loading screen
	loadingScreen.style.display = "none";
	// Show the main content
	mainContent.classList.remove("hidden");
});

function toggleMenu() {
	var menu = document.getElementById("offCanvasMenu");
	var menuBtn = document.getElementById("menuBtn");
	menu.classList.toggle("open");
	menuBtn.classList.toggle("open");
}

// JavaScript for Scroll Up Button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	var scrollButton = document.getElementById("scrollButton");
	if (document.documentElement.scrollTop > 20) {
		scrollButton.classList.remove("hidden");
	} else {
		scrollButton.classList.add("hidden");
	}
}

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

// Hide off-canvas menu when navbar item is clicked on small screens
var navLinks = document.querySelectorAll("#menuLinks a");
navLinks.forEach(function (navLink) {
	navLink.addEventListener("click", function () {
		var menu = document.getElementById("offCanvasMenu");
		var menuBtn = document.getElementById("menuBtn");
		if (window.innerWidth < 768) {
			menu.classList.remove("open");
			menuBtn.classList.remove("open");
		}
	});
});

// Get the current date
const currentDate = new Date();
// Get the current year
const currentYear = currentDate.getFullYear();
// Find the element with id "currentYear"
const yearElement = document.getElementById("currentYear");
// Set the content of the element to the current year
yearElement.textContent = currentYear;

// Typing Effect
var i = 0;
var txt = "Software | Cybersecurity | Technology"; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("element").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

// Call the function here to start automatically
typeWriter();
