function refresh() {
    var base = document.getElementById("widgets");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].build();
        widgets[i].initialize();
        if (pos[i].length == 0){
            widgets[i].setPos(0, 100*i);
        } else {
            widgets[i].setPos(pos[i][0], pos[i][1]);
        }
        base.appendChild(widgets[i].base);
    }
}
function updateAll() {
    setTimeout(() => {
        let types = "types=";
        let xpos = "xpos=";
        let ypos = "ypos=";
        for (let i = 0; i < widgets.length; i++) {
            widgets[i].update();
            types += widgets[i]["widget"].type + ",";
            xpos += widgets[i].xpos + ",";
            ypos += widgets[i].ypos + ",";
        }
        types = types.substring(0,types.length-1);
        xpos = xpos.substring(0,xpos.length-1);
        ypos = ypos.substring(0,ypos.length-1);
        document.cookie = types + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
        document.cookie = xpos + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
        document.cookie = ypos + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
        updateAll();
    }, 500);
}
refresh();
updateAll();
async function tick() {
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].fixMotion();
    }
    setTimeout(() => {
        tick();
    }, 10);
}
tick();