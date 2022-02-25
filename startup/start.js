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
        widgets[i].setSize(sizes[i][0], sizes[i][1]);
        base.appendChild(widgets[i].base);
    }
}
function updateAll() {
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].update();
        positions[i][0] = widgets[i].xpos;
        positions[i][1] = widgets[i].ypos;
        sizes[i][0] = widgets[i].xsize;
        sizes[i][1] = widgets[i].ysize;
    }
    save();
}
function swapTwo(list, a, b) {
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
    return list;
}
function shift(input, direction) {
    var location = 0;
    for (let i = 0; i < widgets.length; i++) {
        if (widgets[i] == input) {
            location = i;
        }
    }
    var goal = location + direction;
    if (direction == -2) {
        goal = widgets.length - 1;
    }
    if (direction == 2) {
        goal = 0;
    }
    if (location + direction >= 0 && goal < widgets.length) {
        widgets = swapTwo(widgets, location, goal);
        types = swapTwo(types, location, goal);
        positions = swapTwo(positions, location, goal);
        sizes = swapTwo(sizes, location, goal);
    }
    refresh();
    var temp = modeA;
    mode(-1);
    mode(temp);
}
async function tick() {
    for (let i = 0; i < widgets.length; i++) {
        if (widgets[i].dead) {
            types.splice(i, 1);
            positions.splice(i, 1);
            sizes.splice(i, 1);
            refresh();
            for (let j = 0; j < widgets.length; j++) {
                widgets[j].remove();
            }
            break;
        } else {
            widgets[i].fixMotion();
        }
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
weatherAPIs();
addAdd();
refresh();
updateAll();
tick();