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

if (document.cookie.indexOf("widget0")==-1){
    console.log("eewe");
    document.cookie = "widget0=Demo; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
    document.cookie = "widget1=Demo; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
    document.cookie = "widget2=Demo; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
    document.cookie = "widget3=Demo; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
}
cookies = document.cookie.split(';');
manAddWidget(cookies[0].substring(9), 0);
manAddWidget(cookies[1].substring(9), 1);
manAddWidget(cookies[2].substring(9), 2);
manAddWidget(cookies[3].substring(9), 3);

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
