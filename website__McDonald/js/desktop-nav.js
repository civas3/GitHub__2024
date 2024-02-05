
document.addEventListener("DOMContentLoaded", function() {
  // Get the button and dropdown content elements
  const button = document.querySelector(".menu-dropdown-button");
  const dropdownContent = document.querySelector(".menu-dropdown-content");
  const icon = document.querySelector('.rotate-icon');

  // Initially hide the dropdown content using CSS
  dropdownContent.style.display = "none";

  // Variable to keep track of the rotation state
  let isRotated = false;

  // Add a click event listener to the button
  button.addEventListener("click", function() {
    // Toggle the display of the dropdown content
    if (dropdownContent.style.display === "" || dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }

    // Toggle the bold style of the button
    button.style.fontWeight = button.style.fontWeight === "bold" ? "normal" : "bold";
    
    // Toggle the rotation of the icon
    if (isRotated) {
      icon.style.transform = "rotate(0deg)";
    } else {
      icon.style.transform = "rotate(180deg)";
    }
    
    // Update the rotation state
    isRotated = !isRotated;
  });
});