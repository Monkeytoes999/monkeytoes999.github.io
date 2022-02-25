var showing = 0;
function openSettings() {
    document.getElementById("sidebar").style.display = "block";
    showing = 0.1;
    mode(-1);
}
function closeSettings() {
    document.getElementById("sidebar").style.display = "none";
    showing = 0;
}
document.getElementById("additions").addEventListener("click", function() {
    showing = 0.1;
});