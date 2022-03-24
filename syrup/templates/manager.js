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
function upLayer() {
    var input = document.getElementById("upor");
    var goal = (modeA == -1);
    if (goal) {
        input.style.backgroundColor = "green";
    } else {
        input.style.backgroundColor = "white";
    }
}
function downLayer() {
    var input = document.getElementById("downor");
    var goal = (modeA == -1);
    if (goal) {
        input.style.backgroundColor = "green";
    } else {
        input.style.backgroundColor = "white";
    }
}
function upAllLayer() {
    var input = document.getElementById("uuuor");
    var goal = (modeA == -1);
    if (goal) {
        input.style.backgroundColor = "green";
    } else {
        input.style.backgroundColor = "white";
    }
}
function downAllLayer() {
    var input = document.getElementById("dddor");
    var goal = (modeA == -1);
    if (goal) {
        input.style.backgroundColor = "green";
    } else {
        input.style.backgroundColor = "white";
    }
}
function mode(input) {
    var flist = [function() { edit(); }, function() { resize(); }, function() { remove(); },
        function() { upLayer(); }, function() { downLayer(); }, function() { upAllLayer() },
        function() { downAllLayer() }];
    if (input == -1) {
        if (modeA != -1) {
            mode(modeA);
        }
    } else if (modeA == -1) {
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
function drawButton() {
    var input = document.getElementById("line");
    var goal = input.style.backgroundColor == "green";
    if (!goal) {
        input.style.backgroundColor = "green";
    } else {
        input.style.backgroundColor = "white";
    }
}
function drawLines() {
    drawButton();
    var input = document.getElementsByTagName("body")[0];
    input.classList.toggle("grid");
}