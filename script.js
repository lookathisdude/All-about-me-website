//Version 2.0
//This is the JavaScript file for the "All about me" website. It contains all the functions and event listeners for the website.

//Function to create the theme changer
const themeButton = document.getElementById("theme-changer");
//Add an event listener to the theme changer button
themeButton.addEventListener("click", () => {
  //Toggle the "dark" class on the body element
  document.body.classList.toggle("dark");

  //   If its dark mode, display the moon emoji, otherwise display the sun emoji
  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Switch to light theme 🌞";
  } else {
    themeButton.textContent = "Switch to dark theme  🌜";
  }
});
