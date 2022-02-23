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
    document.cookie = "";
}