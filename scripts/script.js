/*
    Student Name: Sydnie Lui
    File Name: script.js
    Date: 04/20/2025
*/

// Function to display content'

function content() {
    var text = document.getElementById("new");
    text.textContent = "Hilo, located on the Big Island of Hawaii, is known for its rainforests, dramatic waterfalls, and rich Hawaiian culture. It is also home to the University of Hawaii at Hilo and is located very close to the Hawaii Volcanoes National Park.";
    text.style.color = "#c0145f";
    text.style.fontSize = "2em";
}


// Hamburger menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  });
  