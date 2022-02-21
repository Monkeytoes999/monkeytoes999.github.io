var w = new Widget();
var widgets = [
    new Widget()
];
function refresh() {
    var base = document.getElementById("widgets");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    for (let i = 0; i < widgets.length; i++) {
        base.appendChild(widgets[0].base);
    }
}
refresh();