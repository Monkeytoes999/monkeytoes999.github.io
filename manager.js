var modeA = -1;
function edit() {
    var input = document.getElementById("editor");
    var goal = (modeA == -1);
    for (let i = 0; i < types.length; i++) {
        widgets[i].draggable = goal;
    }
    if (goal) {
        input.style.backgroundColor = "green";
    } else {
        input.style.backgroundColor = "white";
    }
}
function resize() {
    var input = document.getElementById("resizor");
    var goal = (modeA == -1);
    for (let i = 0; i < types.length; i++) {
        widgets[i].changeResize();
    }
    if (goal) {
        input.style.backgroundColor = "green";
    } else {
        input.style.backgroundColor = "white";
    }
}
function remove() {
    var input = document.getElementById("killor");
    var goal = (modeA == -1);
    for (let i = 0; i < types.length; i++) {
        widgets[i].remove();
    }
    if (goal) {
        input.style.backgroundColor = "red";
    } else {
        input.style.backgroundColor = "white";
    }
}
function mode(input) {
    var flist = [function() { edit(); }, function() { resize(); }, function() { remove(); }];
    if (modeA == -1) {
        flist[input]();
        modeA = input;
    } else if (modeA == input) {
        flist[input]();
        modeA = -1;
    } else {
        mode(modeA);
        mode(input);
    }
}
function showSettings() {
    var temp = document.getElementById("bList");
    if (temp.style.display == "block") {
        temp.style.display = "none";
    } else {
        temp.style.display = "block";
    }
}
function show(input) {
    if (input.style.display == "block") {
        input.style.display = "none";
    } else {
        input.style.display = "block";
    }
}