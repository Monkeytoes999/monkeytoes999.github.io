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
    for (let i = 0; i < tags.length; i++) {
        var base = document.getElementById("widgetList");
        base.appendChild(document.createElement("hr"));
        var title = document.createElement("h2");
        title.classList.add("inactive");
        title.innerHTML = tags[i];

        var divider = document.createElement("div");
        divider.id = tags[i];
        divider.style.display = "none";

        const ttt = title;
        const temp = divider;
        title.onclick = function() {
            ttt.classList.toggle("active");
            ttt.classList.toggle("inactive");
            console.log(ttt);
            show(temp);
        }

        base.appendChild(title);
        base.appendChild(divider);
    }
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

        document.getElementById(widge.widget.tag).appendChild(divider);
    }
}
addAdd();
refresh();
updateAll();
edit();
tick();