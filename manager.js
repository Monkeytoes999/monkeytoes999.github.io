function edit(input) {
    var goal = false;
    if (widgets.length > 0) {
        goal = !widgets[0].draggable;
    }
    for (let i = 0; i < types.length; i++) {
        widgets[i].draggable = goal;
    }
    if (goal) {
        input.style.backgroundColor = "green";
    } else {
        input.style.backgroundColor = "white";
    }
}