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
    edit(document.getElementById("editor"));
}
function updateAll() {
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].update();
        positions[i][0] = widgets[i].xpos;
        positions[i][1] = widgets[i].ypos;
    }
    save();
}
async function tick() {
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].fixMotion();
    }
    updateAll();
    setTimeout(() => {
        tick();
    }, 10);
}
function addAdd() {
    for (let i = 0; i < creators.length; i++) {
        var divider = document.createElement("div");
        var widge = creators[i]();

        var title = document.createElement("h3");
        title.innerHTML = widge.widget.name;
        divider.appendChild(title);

        widge.setButton();
        widge.initialize();
        const temp = i;
        widge.base.onclick = function() {
            add(temp);
        }
        divider.appendChild(widge.base);

        document.getElementById("widgetList").appendChild(divider);
    }
}
addAdd();
refresh();
updateAll();
tick();