
const darkModeButton = document.getElementsByClassName('darkmode')[0];
const colorscontainer = document.getElementsByClassName('colorscontainer')[0];

let darkModeOn = false;

function toggleDarkMode() {

    darkModeOn = !darkModeOn;

    if (darkModeOn) { // Toggle dark theme

        colorscontainer.style.backgroundColor = "black";
        colorscontainer.style.boxShadow = "0 2px 7px 0 rgba(255, 255, 255, 0)";
        darkModeButton.textContent = "Light Mode";
        darkModeButton.style.backgroundColor = "white";
        darkModeButton.style.color = "black";

    } else { // Toggle light theme

        colorscontainer.style.backgroundColor = "white";
        colorscontainer.style.boxShadow = "0 2px 7px 0 rgba(255, 255, 255, 0.378)";
        darkModeButton.textContent = "Dark Mode";
        darkModeButton.style.backgroundColor = "black";
        darkModeButton.style.color = "white";
    }
}