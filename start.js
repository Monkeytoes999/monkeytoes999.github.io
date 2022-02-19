makeSidebar();
async function manAddWidget(name, position) {
    var temp = document.getElementById(widgetLocations[position]);
    temp.appendChild(await getWidget(name));
}
manAddWidget("Blank", 0);
manAddWidget("Blank", 1);
manAddWidget("Blank", 2);
manAddWidget("Blank", 3);

document.getElementById("clock").innerHTML = Date();