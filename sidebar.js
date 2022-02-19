function makeSidebar() {
    for (var i = 0; i < 4; i++) {
        var tempList = makeDropdown();
        const position = i;
        tempList.onchange = function() {
            showWidget(this.value, position);
        }
        document.getElementById("sidebar").appendChild(tempList);
    }
}
function makeDropdown() {
    var list = document.createElement("select");
    for (var i = 0; i < widgetList.length; i++) {
        var ia = document.createElement("option");
        ia.innerHTML = widgetList[i];
        list.appendChild(ia);
    }
    return list;
}
function expand() {
    var temp = document.getElementById("sidebar").style.display;
    if (temp == "block") {
        document.getElementById("sidebar").style.display = "none";
    } else {
        document.getElementById("sidebar").style.display = "block";
    }
}