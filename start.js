function refresh() {
    var base = document.getElementById("widgets");
    widgets = [];
    for (let i = 0; i < types.length; i++) {
        widgets.push(creators[types[i]]());
    }
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].build();
        widgets[i].initialize();
        widgets[i].setPos(positions[i][0], positions[i][1]);
        base.appendChild(widgets[i].base);
    }
}
function updateAll() {
    setTimeout(() => {
        for (let i = 0; i < widgets.length; i++) {
            widgets[i].update();
        }
        save();
    }, 500);
    updateAll();
}
async function tick() {
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].fixMotion();
    }
    setTimeout(() => {
        tick();
    }, 10);
}
refresh();
updateAll();
tick();