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
    setTimeout(() => {
        for (let i = 0; i < widgets.length; i++) {
            widgets[i].update();
        }
        updateAll();
    }, 500);
}
refresh();
updateAll();