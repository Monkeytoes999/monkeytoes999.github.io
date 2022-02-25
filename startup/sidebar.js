var showing = 2;
function openSettings() {
    document.getElementById("sidebar").style.display = "block";
    showing = 1;
}
function closeSettings() {
    document.getElementById("sidebar").style.display = "none";
    showing = 2;
}
window.addEventListener("click", function() {
    if (showing == 1) {
        openSettings();
    } else if (showing > 1) {
        closeSettings();
    }
    showing = showing + 1;
});
document.getElementById("additions").addEventListener("click", function() {
    showing = 1;
});