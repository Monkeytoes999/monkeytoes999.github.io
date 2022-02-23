function edit() {
    var goal = true;
    if (widgets.length > 0) {
        goal = !widgets[0].draggable;
    }
    for (let i = 0; i < types.length; i++) {
        widgets[i].draggable = goal;
    }
}