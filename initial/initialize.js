var widgets = [];
var globalX = 0;
var globalY = 0;
var types = [];
var positions = [];
var sizes = [];
if (!document.cookie.includes("types=")) {
    document.cookie = 'ysize; types=0,4,8,9; ysize=200,100,100,100; xpos=160,500,800,180; ypos=160,240,240,240; xsize=960,280,300,300';
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