makeSidebar();

/**
 * Manually creates a widget
 * @param {*string} name for the name of the widget to be displayed.
 * @param {*int} position for the location the widget should be displayed.
 */
async function manAddWidget(name, position) {
    var temp = document.getElementById(widgetLocations[position]);
    temp.appendChild(await getWidget(name));
} // manAddWidget

manAddWidget("Blank", 0);
manAddWidget("Blank", 1);
manAddWidget("Blank", 2);
manAddWidget("Blank", 3);

/**
 * This updates the clock so it will tick forward.
 */
async function updateClock(){
    document.getElementById("clock").innerHTML = Date();
    setTimeout(() => {
        updateClock();
    }, 500);
} // updateClock

updateClock();
