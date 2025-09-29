function toggleAbout() {
  const aboutSection = document.getElementById("about");
  const aboutBtn = document.getElementById("aboutBtn");

  aboutSection.classList.remove("hidden"); // Show the about section
  aboutBtn.style.display = "none";         // Hide the About Me button
}
