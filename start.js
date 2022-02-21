function refresh() {
    var base = document.getElementById("widgets");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].setPos(0, 200*i);
        base.appendChild(widgets[i].base);
    }
}
function updateAll() {
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].update();
    }
}
refresh();