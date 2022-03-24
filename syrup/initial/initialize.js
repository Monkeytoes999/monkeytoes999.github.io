var widgets = [];
var globalX = 0;
var globalY = 0;
var types = [];
var positions = [];
var sizes = [];
var cviil = {};
var civillight = {};
var astro = {};
var meteo = {};
var weatherdbi = {};
if (!document.cookie.includes("types=")) {
    document.cookie = "types=0,4,8,9; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
    document.cookie = "ysize=200,100,100,100; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
    document.cookie = "xpos=160,500,800,180; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
    document.cookie = "ypos=160,240,240,240; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
    document.cookie = "xsize=960,280,300,300 expires=Thu, 7 Dec 2056 12:00:00 UTC;";
}
if (document.cookie.includes("types=")){
    cookies = document.cookie.split("; ");
    let i = 0;
    for (i = 0; !cookies[i].includes("types="); i++);
    ta = cookies[i].substring(6).split(',');
    for (i = 0; !cookies[i].includes("xpos="); i++);
    xa = cookies[i].substring(5).split(',');
    for (i = 0; !cookies[i].includes("ypos="); i++);
    ya = cookies[i].substring(5).split(',');
    for (i = 0; !cookies[i].includes("xsize="); i++);
    sxa = cookies[i].substring(6).split(',');
    for (i = 0; !cookies[i].includes("ysize="); i++);
    sya = cookies[i].substring(6).split(',');
    for (i = 0; i < ta.length; i++){
        types.push(ta[i]);
        positions.push([xa[i], ya[i]]);
        sizes.push([sxa[i],sya[i]]);
    }
}