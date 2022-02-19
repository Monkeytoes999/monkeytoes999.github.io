function expand() {
    var temp = document.getElementById("sidebar").style.display;
    if (temp == "block") {
        document.getElementById("sidebar").style.display = "none";
    } else {
        document.getElementById("sidebar").style.display = "block";
    }
}