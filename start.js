function refresh() {
    var base = document.getElementById("widgets");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].build();
        widgets[i].initialize();
        widgets[i].setPos(0, 100*i);
        base.appendChild(widgets[i].base);
    }
}
function updateAll() {
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].update();
    }
}
async function tick() {
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].fixMotion();
    }
    setTimeout(() => {
        tick();
    }, 10);
}
for (let i = 0; i < creators.length; i++) {
    widgets.push(creators[i]());
}
refresh();
updateAll();
tick();