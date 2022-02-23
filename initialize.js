var widgets = [];
var globalX = 0;
var globalY = 0;
var types = [];
var positions = [];
var sizes = [];
if (document.cookie.includes("types=")){
    cookies = document.cookie.split("; ");
    let i = 0;
    for (i = 0; !cookies[i].includes("types="); i++);
    ta = cookies[i].substring(6).split(',');
    for (i = 0; !cookies[i].includes("xpos="); i++);
    xa = cookies[i].substring(5).split(',');
    for (i = 0; !cookies[i].includes("ypos="); i++);
    ya = cookies[i].substring(5).split(',');
    for (i = 0; i < ta.length; i++){
        types.push(ta[i]);
        positions.push([xa[i], ya[i]]);
    }
}