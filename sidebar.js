function makeSidebar() {
    for (var i = 0; i < 4; i++) {
        var tempList = makeDropdown();
        const position = i;
        tempList.onchange = async function() {
            var temp = document.getElementById(widgetLocations[position]);
            temp.removeChild(temp.firstChild);
            d = await getWidget(this.value);
            temp.appendChild(d);
        }
        document.getElementById("sidebar").appendChild(tempList);
        document.getElementById("sidebar").appendChild(document.createElement("br"));
    }
}
function makeDropdown() {
    var list = document.createElement("select");
    for (var i = 0; i < wName.length; i++) {
        var ia = document.createElement("option");
        ia.classList.add("items");
        ia.innerHTML = wName[i];
        list.appendChild(ia);
    }
    return list;
}
function expand() {
    document.getElementById("sidebar").style.display = "block";
}
function shrink() {
    document.getElementById("sidebar").style.display = "none";
}