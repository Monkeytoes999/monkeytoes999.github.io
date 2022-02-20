/**
 * Creates a sidebar at start.
 */
function makeSidebar() {
    for (var i = 0; i < 4; i++) {
        var tempList = makeDropdown();
        const position = i;
        tempList.onchange = async function() {
            var temp = document.getElementById(widgetLocations[position]);
            temp.removeChild(temp.firstChild);
            d = await getWidget(this.value);
            temp.appendChild(d);
        } // function
        document.getElementById("sidebar").appendChild(tempList);
        document.getElementById("sidebar").appendChild(document.createElement("br"));
    } // for
} // makeSidebar

/**
 * Creates a select object
 * @returns the select object for all positions
 */
function makeDropdown() {
    var list = document.createElement("select");
    for (var i = 0; i < wName.length; i++) {
        var ia = document.createElement("option");
        ia.classList.add("items");
        ia.innerHTML = wName[i];
        list.appendChild(ia);
    } // for
    return list;
} // makeDropdown

/**
 * Shows the settings sidebar.
 */
function expand() {
    document.getElementById("sidebar").style.display = "block";
} // expand

/**
 * Closes the settings sidebar.
 */
function shrink() {
    document.getElementById("sidebar").style.display = "none";
} // shrink