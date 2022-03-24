function openCredits() {
    document.getElementById("credits").style.display = "block";
    showing = 0.2;
}
function closeCredits() {
    document.getElementById("credits").style.display = "none";
    showing = 0;
}
document.getElementById("credBut").addEventListener("click", function() {
    showing = 0.2;
});
function openHelp() {
    document.getElementById("help").style.display = "block";
    showing = 0.3;
}
function closeHelp() {
    document.getElementById("help").style.display = "none";
    showing = 0;
}
document.getElementById("helpBut").addEventListener("click", function() {
    showing = 0.3;
});
window.addEventListener("click", function() {
    if (showing == 0.1) {
        closeCredits();
        closeHelp();
        openSettings();
    } else if (showing == 0.2) {
        closeSettings();
        closeHelp();
        openCredits();
    }  else if (showing == 0.3) {
        closeSettings();
        closeCredits();
        openHelp();
    } else {
        closeSettings();
        closeCredits();
        closeHelp();
    }
    showing = showing + 1;
});