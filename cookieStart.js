function save() {
    tc = "types=";
    xc = "xpos=";
    yc = "ypos=";
    cookies = document.cookie.split("; ");
    for (let i = 0; i<types.length; i++){
        tc = tc + types[i] + ",";
        xc = xc + positions[i][0] + ",";
        yc = yc + positions[i][1] + ",";
    }
    tc = tc.substring(0, tc.length-1);
    xc = xc.substring(0, xc.length-1);
    yc = yc.substring(0, yc.length-1);    
    document.cookie = tc + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
    document.cookie = xc + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
    document.cookie = yc + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
}
function clearCookies() {
    var question = "This will reset all cookies. Select OK to continue.";
    if (confirm(question)) {
        var papa = document.getElementById("widgets");
        while (papa.firstChild) {
            papa.removeChild(papa.firstChild);
        }
        document.cookie = "types=jeff; expires=Thu, 7 Dec 2017 12:00:00 UTC;";
        document.cookie = "types=xpos; expires=Thu, 7 Dec 2017 12:00:00 UTC;";
        document.cookie = "types=ypos; expires=Thu, 7 Dec 2017 12:00:00 UTC;";
        types = [];
        positions = [];
        refresh();
    }
}