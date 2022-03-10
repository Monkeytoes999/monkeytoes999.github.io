var coordsList = [];
var Rooms = [];
var max = 100;
var n = 0;
var rm = 0;
var w = false;
var down = {};
var pri = [0];

class Room {
    constructor(a = [0, 0, 0, 0], b = [0, 0]) {
        this.connections = a;
        this.coord = b;
        Rooms.push(this);
        coordsList.push(b);
        this.define();
    }

    define(){
        if (Math.floor(Math.random()*2) == 1 && Rooms.length < max && n < 5000){
            if (inCoordsList([this.coord[0], this.coord[1]+1]) == -1 & this.connections[0] != 1){
                this.connections[0] = 1;
                n++;
                new Room([0, 1, 0, 0], [this.coord[0], this.coord[1]+1]);
            }
        }
        if (Math.floor(Math.random()*2) == 1 && Rooms.length < max && n < 5000){
            if (inCoordsList([this.coord[0], this.coord[1]-1]) == -1 & this.connections[1] != 1){
                this.connections[1] = 1;
                n++;
                new Room([1, 0, 0, 0], [this.coord[0], this.coord[1]-1]);
            }
        }
        if (Math.floor(Math.random()*2) == 1 && Rooms.length < max && n < 5000){
            if (inCoordsList([this.coord[0]-1, this.coord[1]]) == -1 & this.connections[2] != 1){
                this.connections[2] = 1;
                n++;
                new Room([0, 0, 0, 1], [this.coord[0]-1, this.coord[1]]);
            }
        }
        if (Math.floor(Math.random()*2) == 1 && Rooms.length < max && n < 5000){
            if (inCoordsList([this.coord[0]+1, this.coord[1]]) == -1 & this.connections[3] != 1){
                this.connections[3] = 1;
                n++;
                new Room([0, 0, 1, 0], [this.coord[0]+1, this.coord[1]]);
            }
        }
        n--;
    }

    getShape(){
        let shape = "X"
        if (shapeConnectionCheck(this.connections, [1,1,1,1])) {
            shape = "╋"
        } else if  (shapeConnectionCheck(this.connections, [1,1,1,0])) {
            shape = "┫"
        } else if  (shapeConnectionCheck(this.connections, [1,1,0,1])) {
            shape = "┣"
        } else if  (shapeConnectionCheck(this.connections, [1,1,0,0])) {
            shape = "┃"
        } else if  (shapeConnectionCheck(this.connections, [1,0,1,1])) {
            shape = "┻"
        } else if  (shapeConnectionCheck(this.connections, [1,0,0,1])) {
            shape = "┗"
        } else if  (shapeConnectionCheck(this.connections, [1,0,1,0])) {
            shape = "┛"
        } else if  (shapeConnectionCheck(this.connections, [1,0,0,0])) {
            shape = "╹"
        } else if  (shapeConnectionCheck(this.connections, [0,1,1,1])) {
            shape = "┳"
        } else if  (shapeConnectionCheck(this.connections, [0,1,1,0])) {
            shape = "┓"
        } else if  (shapeConnectionCheck(this.connections, [0,1,0,1])) {
            shape = "┏"
        } else if  (shapeConnectionCheck(this.connections, [0,1,0,0])) {
            shape = "╻"
        } else if  (shapeConnectionCheck(this.connections, [0,0,1,1])) {
            shape = "━"
        } else if  (shapeConnectionCheck(this.connections, [0,0,1,0])) {
            shape = "╸"
        } else if  (shapeConnectionCheck(this.connections, [0,0,0,1])) {
            shape = "╺"
        } else if (this.connections[0] == "inUse"){
            shape = "X "
        } else if (this.connections[0] == "goal"){
            shape = "O "
        }
        return shape
    }

}

function shapeConnectionCheck(a,o){
    if (a[0]==o[0] & a[1] == o[1] & a[2] == o[2] & a[3] == o[3]){
        return true;
    }
    return false;
}

function inCoordsList(o){
    for (var i = 0; i < coordsList.length; i++) {
        if (coordsList[i][0] == o[0] && coordsList[i][1] == o[1]) {
            return i;
        }
    }
    return -1;
}

function roomSort(a, b){
    if (a.coord[1] > b.coord[1]){
        return -1;
    } else if (a.coord[1] == b.coord[1]){
        if (a.coord[0] > b.coord[0]){
            return 1;
        } else {
            return -1;
        }
    } else {
        return 1;
    }
}

function coordSort(a,b){
    if (a[1] > b[1]){
        return -1;
    } else if (a[1] == b[1]){
        if (a[0] > b[0]){
            return 1;
        } else {
            return -1;
        }
    } else {
        return 1;
    }
}

//Should only be called after sorting
function redefine(){
    Rooms[0].define();
    Rooms.sort(roomSort);
    coordsList.sort(coordSort);
}

function createOut(){
    lastr = Infinity;
    lastc = xmin;
    out = "";
    Rooms.forEach(r => {
        if (r.coord[1] < lastr){
            out = out + "\n";
            lastc = xmin;
            if (r.coord[0] != xmin){
                out = out + "    "
            }
        }
        for (let i = r.coord[0]-lastc; i>1; i--){
            out = out + "    ";
        }
        out = out + r.getShape();
        lastr = r.coord[1];
        lastc = r.coord[0];
    });
    document.getElementById("Large").innerHTML = out
    largeRoom()
    if (rm == gl) win();
    return(out);
}

function largeRoom(){
    r = Rooms[rm].connections[1]
    if (r[1][0]){
        r = r[1]
    }
    u = r[0];
    d = r[1];
    l = r[2];
    r = r[3];
    if (u){
        out = "┏━━━            ━━━┓"
    } else {
        out = "┏━━━━━━━━━┓"
    }
    if (l){
        if (r){
            out += "\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n\n\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃"
        } else {
            out += "\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n                                        ┃\n                                        ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃"
        }
    } else {
        if (r){
            out += "\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃          \n┃          \n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃"
        } else {
            out += "\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃\n┃                                    ┃"
        }
    }
    if (d){
        out += "\n┗━━━            ━━━┛"
    } else {
        out += "\n┗━━━━━━━━━┛"
    }
    document.getElementById("Room").innerHTML = out
    return out
}

function mUp(){
    if (!w){
        if (Rooms[rm].connections[1][0]) {
            Rooms[rm].connections = Rooms[rm].connections[1];
            rm = inCoordsList([Rooms[rm].coord[0], Rooms[rm].coord[1]+1]);
            Rooms[rm].connections = ["inUse", Rooms[rm].connections]
        }
        createOut();
    }
}

function mDown(){
    if (!w) {
        if (Rooms[rm].connections[1][1]) {
            Rooms[rm].connections = Rooms[rm].connections[1];
            rm = inCoordsList([Rooms[rm].coord[0], Rooms[rm].coord[1]-1]);
            Rooms[rm].connections = ["inUse", Rooms[rm].connections]
        }
        createOut();
    }
}

function mLeft(){
    if (!w) {
        if (Rooms[rm].connections[1][2]) {
            Rooms[rm].connections = Rooms[rm].connections[1];
            rm = inCoordsList([Rooms[rm].coord[0]-1, Rooms[rm].coord[1]]);
            Rooms[rm].connections = ["inUse", Rooms[rm].connections]
        }
        createOut();
    }
}

function mRight(){
    if (!w) { 
        if (Rooms[rm].connections[1][3]) {
            Rooms[rm].connections = Rooms[rm].connections[1];
            rm = inCoordsList([Rooms[rm].coord[0]+1, Rooms[rm].coord[1]]);
            Rooms[rm].connections = ["inUse", Rooms[rm].connections]
        }
        createOut();
    }
}

window.addEventListener("keydown", function(event) {
    let unicode = event.which;
    if (!down[unicode]) {
        down[unicode] = true;
        pri.push(unicode);
        inp();
    }
});
window.addEventListener("keyup", function(event) {
    let unicode = event.which;
    down[unicode] = false;
    for (let i = pri.length; i >= 0; i--) {
        if (pri[i] == unicode) {
            pri.splice(i,1);
        }
    }
});

function inp(){
    var act = false;
    var i = 0;
    while (i < pri.length && !act) {
        var temp = pri[i];
        if (temp == 87){
            act = true;
            mUp();
        }
        if (temp == 65) {
            act = true;
            mLeft();
        }
        if (temp == 83) {
            act = true;
            mDown();
        }
        if (temp == 68) {
            act = true;
            mRight();
        }
        i++;
    }
}

function win(){
    document.getElementById("Win").innerHTML = "You Win!"
    w = true;
}

test = new Room();
Rooms.sort(roomSort);
coordsList.sort(coordSort);
while(Rooms.length < max){
    redefine();
}

Rooms[rm].connections = ['inUse',Rooms[rm].connections]
gl = rm;
while (gl == rm) {
    gl = Math.floor(Math.random()*Rooms.length);
}
Rooms[gl].connections = ["goal", Rooms[gl].connections]
let xmin = 0
Rooms.forEach(r => {
    if (r.coord[0] < xmin){
        xmin = r.coord[0];
    }
});

function tick(){
    setTimeout(() => {
        inp();
        tick();
    }, 100);
}

createOut();
tick();