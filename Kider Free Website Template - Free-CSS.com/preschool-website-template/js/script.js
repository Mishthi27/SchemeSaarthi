// Function to toggle colorblind mode
function toggleColorblindMode() {
    let isEnabled = localStorage.getItem("colorblindMode") === "true";

    // Toggle mode in localStorage
    localStorage.setItem("colorblindMode", !isEnabled);

    // Apply class without reloading
    applyColorblindMode();
}

// Function to apply colorblind mode on page load
function applyColorblindMode() {
    if (localStorage.getItem("colorblindMode") === "true") {
        document.body.classList.add("colorblind-mode");
    } else {
        document.body.classList.remove("colorblind-mode");
    }
}

// Apply mode when the page loads
document.addEventListener("DOMContentLoaded", function () {
    applyColorblindMode();
    document.getElementById("toggleMode").addEventListener("click", toggleColorblindMode);
});
