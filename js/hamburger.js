document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav_links");

    // Check localStorage to see if the menu should remain open
    if (localStorage.getItem("menuOpen") === "true") {
        navLinks.classList.add("active"); // Keep the menu open
    }

    // Toggle the menu and save its state in localStorage
    hamburger.addEventListener("click", function () {
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active"); // Close the menu
            localStorage.setItem("menuOpen", "false"); // Save state
        } else {
            navLinks.classList.add("active"); // Open the menu
            localStorage.setItem("menuOpen", "true"); // Save state
        }
    });
});