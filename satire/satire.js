active = false;
spc = 0;
t = 0;
eid = 0;
ch = [];
bul = [];
movSpeed = 3;
facing = "l";
fire = true;
to = 0;
coins = 0;
skins = [0];
availableSkins = [0, 1, 2, 3, 4, 5];
skinPngs = ["gGun.png", "greyP.png", "gTMBG.png", "bTMBG.png", "meats.png", "math.png"];
defSkin = 0;
skinPointer = 0;
incoming = false;
round = 1;
rActive = false;
completionBonus = 0;
loadFromCookies();

addEventListener("keypress", (event) => {
    if (event.key == "a") {
        document.getElementById("gGunT").style.transform = "rotateY(180deg)";
        facing = "l";
    } else if (event.key == "d") {
        document.getElementById("gGunT").style.transform = "rotateY(0deg)";
        facing = "r";
    } else if (event.key == " ") {
        if (fire) {
            fire = false;
            new Bullet(facing);
            to = t + 5;
        }
    }
});

function tick() {
    document.getElementById("coinValue").innerHTML = coins;

    if (t % 3 == 0){
        spawners();

        ch.forEach((b) => {
            if (b != null) {
                b.move();
            }
        });
    }
    if (t >= to) {
        fire = true;
    }
    
    t++;
    
    bulI = 0;
    remove = [];
    bul.forEach((b) => {
        if (b != null) {
            if (b.move()) {
                remove.push(bulI);
            }
        }
        bulI++;
    });
    for (i = remove.length - 1; i >= 0 ; i--) {
        bul.splice(remove[i], 1);
    };

    setTimeout(() => {
        if (rActive) { 
            tick(); 
        }
    }, 50);

    if (ch.length == 0 && !incoming) {
        roundTrigger();
    }
}

function roundTrigger() {
    console.log(round);
    coins = coins + completionBonus;
    incoming = true;
    if (round < 6) {
        document.getElementById("roundAlert").innerHTML = "Round " + round;
        document.getElementById("roundAlert").hidden = false;
        setTimeout(() => {
            document.getElementById("roundAlert").hidden = true;
        }, 5000);
    }
    switch(round) {
        case 1:
            enemies = [{"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}];
            delays = [5000, 5000, 5000, 2000, 2000, 2000, 0, 2000, 0];
            completionBonus = 3;
            break;
        case 2:
            enemies = [{"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}];
            delays = [1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 0];
            completionBonus = 3;
            break;
        case 3:
            enemies = [{"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}];
            delays = [0, 5000, 0, 5000, 0, 2000, 0, 2000, 0]
            completionBonus = 5;
            break;
        case 4:
            enemies = [{"side": "l", "health": 3}, {"side": "r", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 3}, {"side": "r", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 3}, {"side": "r", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 3}, {"side": "r", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 3}];
            delays = [1000, 2000, 1000, 1000, 2000, 1000, 1000, 2000, 1000, 1000, 2000, 1000];
            completionBonus = 5;
            break;
        case 5:
            enemies = [{"side": "l", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}];
            delays = [1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 0];
            completionBonus = 7;
            break;
        default:
            enemies = [];
            delays = [];
            completionBonus = 0;
            win();
    }
    round = round + 1;
    j = 0;
    cmD = 5000;
    for (i = 0; i < delays.length; i++) {
        setTimeout(() => {
            if (rActive) {
                new Bert(enemies[j].side, enemies[j].health);
            }
            j++;
        }, cmD);
        cmD = cmD + delays[i];
    }
    setTimeout(() => {
        incoming = false;
        if (rActive) {
            new Bert(enemies[j].side, enemies[j].health);
        }
    }, cmD);
}


function spawners() {
    switch (spc){
        case 0:
            document.getElementById("s12").hidden = false;
            document.getElementById("s13").hidden = false;
            document.getElementById("s14").hidden = false;
            document.getElementById("s15").hidden = false;
            document.getElementById("s22").hidden = false;
            document.getElementById("s23").hidden = false;
            document.getElementById("s24").hidden = false;
            document.getElementById("s25").hidden = false;
            break;
        case 1:
            document.getElementById("s11").hidden = true;
            document.getElementById("s21").hidden = true;
            break;
        case 2:
            document.getElementById("s12").hidden = true;
            document.getElementById("s13").hidden = true;
            document.getElementById("s14").hidden = true;
            document.getElementById("s15").hidden = true;
            document.getElementById("s22").hidden = true;
            document.getElementById("s23").hidden = true;
            document.getElementById("s24").hidden = true;
            document.getElementById("s25").hidden = true;
            break;
        case 3:
            document.getElementById("s11").hidden = false;
            document.getElementById("s21").hidden = false;
            break;
    }
    spc = (spc + 1) % 4;
}

function spinny(j) {
    speed = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3]
    if (j < 9) {
        i = 0;
        for (x = 0; x < 361; x++){
            setTimeout(() => {
                document.getElementById('gambler_f').style.transform = 'rotate(' + i + 'deg)';
                i++;
                if (i == 361){
                    spinny(j+1);
                }
            }, speed[j]*x);
        }
    } else {
        document.getElementById("balld").hidden = false;
        woop(35.5);
    }
}

function turny() {
    haveMoney = true
    if (coins < 75) {
        haveMoney = false;
    }
    if (!active && haveMoney) {
        coins = coins - 75;
        document.getElementById("coinValue").innerHTML = coins;
        document.getElementById("cost").hidden = true;;
        active = true;
        i = 0
        for (rot = 0; rot < 180; rot++){
            setTimeout(() => {
                document.getElementById('g_arm').style.transform = 'rotateX(' + i + 'deg)';
                i++;
            }, rot*10);
        }
        for (rot = 180; rot > 0; rot--){
            setTimeout(() => {
                document.getElementById('g_arm').style.transform = 'rotateX(' + i + 'deg)';
                i--;
            }, rot*10 + 1800);
        }
        setTimeout(() => {
            spinny(1)
        }, 3600);
    }
}

function woop(j) {
    document.getElementById("balld").style.left = j + "vmin";
    if (j < 70){
        setTimeout(() => {
            woop(j + .1);
        }, 5);
    } else if (j < 90) {
        document.getElementById("balld").hidden = true;
        document.getElementById("ballt").hidden = false;
        document.getElementById("ballt").style.top = (40.75 - j + 70) + "vmin";
        document.getElementById("ballb").hidden = false;
        document.getElementById("ballb").style.top = (43.25 + j - 70) + "vmin";
        setTimeout(() => {
            woop(j + .1);
        }, 5);
    } else {
        document.getElementById("ballt").hidden = true;
        document.getElementById("ballb").hidden = true;
        prize();
    }
}

function prize() {
    chances = [.5, .675, .85, .95, 1];
    winDesc = ["Common Grey Polo", "Uncommon Green TMBG Shirt", "Uncommon Blue TMBG Shirt", "Rare 'The Meats' Shirt", "Legendary Math Competition Shirt"]
    chance = Math.random();
    pzWin = 0;
    while (chance > chances[pzWin]){
        win++;
    }
    if (!skins.includes(pzWin + 1)) {
        skins.push(pzWin + 1);
    }
    document.getElementById("gGun").hidden = false;
    document.getElementById("gGun").src = skinPngs[pzWin + 1];
    document.getElementById("youWon").innerHTML = winDesc[pzWin];
    document.getElementById("youWon").hidden = false;
    svToCookies();
    setTimeout(() => {
        document.getElementById("gGun").hidden = true;
        document.getElementById("youWon").hidden = true;
        document.getElementById("cost").hidden = false;
        active = false;
        if (coins >= 75) {
            document.getElementById("price").style.color = "black";
        } else {
            document.getElementById("price").style.color = "red";
        }
    }, 5000);
}

class Bert {
    constructor(side, health){
        if (side == "l") {
            this.x = 365;
            this.dir = 1;
        } else {
            this.x = 985;
            this.dir = -1;
        }
        this.id = "ch" + eid;
        eid++;
        this.div = document.createElement("img");
        this.div.style = "position: absolute; width: 50px; height: 50px; top: 399px; left: " + this.x + "px;";
        if (health == 1){
            this.div.src = "b1.png";
        } else if (health == 3) {
            this.div.src = "b2.png";
        }
        this.div.id = this.id;
        document.getElementById("children").appendChild(this.div);
        this.step = 0;
        this.y = 400;
        this.health = health;
        this.worth = health == 1 ? 1 : 2;
        ch.push(this);
    }

    move() {
        this.x = this.x + this.dir*movSpeed;
        this.y = this.y - movSpeed;
        if (this.step > 2) {
            this.y = this.y + 2*movSpeed;
        }
        this.step = (this.step + 1) % 6;
        document.getElementById(this.id).style = "position: absolute; width: 50px; height: 50px; top: " + this.y + "px; left: " + this.x + "px;";
        if ((this.x < 749 && this.dir == -1) || (this.x > 600 && this.dir == 1)) {
            lose();
        }
    }

    hit(idx) {
        this.health = this.health - 1;
        if (this.health <= 0) {
            ch.splice(idx, 1);
            var element = document.getElementById(this.id);
            element.parentNode.removeChild(element);
            coins = coins + this.worth;
        }
    }
}

class Bullet {
    constructor(side){
        if (side == "l") {
            this.x = 643;
            this.dir = -1;
        } else {
            this.x = 749;
            this.dir = 1;
        }
        this.id = "bu" + eid;
        eid++;
        this.div = document.createElement("div");
        this.div.style = "position: absolute; width: 7px; height: 5px; top: 411px; left: " + this.x + "px; background-color: red;";
        this.div.id = this.id;
        document.getElementById("bullets").appendChild(this.div);
        this.step = 0;
        bul.push(this);
    }

    move() {
        this.x = this.x + this.dir*7;
        this.step = (this.step + 1) % 6;
        document.getElementById(this.id).style = "position: absolute; width: 7px; height: 5px; top: 411px; left: " + this.x + "px; background-color: red;";
        let btI = 0;
        let hit = false;
        ch.forEach((bt) => {
            let el1 = document.getElementById(this.id).getBoundingClientRect();
            let el2 = document.getElementById(bt.id).getBoundingClientRect(); 
            if (el1.right >= el2.left && el1.left <= el2.right) {
                bt.hit(btI);
                hit = true;
            };
            btI++;
        });
        if (this.x <= 350 || this.x >= 1050 || hit) {
            if (this.x <= 350 || this.x >= 1050) {
                coins = coins - 1;
            }
            var element = document.getElementById(this.id);
            element.parentNode.removeChild(element);
            return 1;
        }
    }
}

function lose() {
    rActive = false;
    document.getElementById("loss").hidden = false;
    if (incoming) {
      document.getElementById("wait").hidden = false;
      setTimeout(() => {
        lose();
      }, 1000);
    } else {
        document.getElementById("wait").hidden = true;
        document.getElementById("starter").hidden = false;
        document.getElementById("gambB").hidden = false;
        svToCookies();
    }
}

function start() {
    ch = [];
    bul = [];
    el = document.getElementById("children");
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
    el = document.getElementById("bullets");
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
    document.getElementById("loss").hidden = true;
    document.getElementById("win").hidden = true;
    document.getElementById("starter").hidden = true;
    document.getElementById("gambB").hidden = true;
    round = 1;
    rActive = true;
    completionBonus = 0;
    tick();
}

function win() {
    document.getElementById("coinValue").innerHTML = coins;
    rActive = false;
    document.getElementById("win").hidden = false;
    document.getElementById("wait").hidden = true;
    document.getElementById("starter").hidden = false;
    document.getElementById("gambB").hidden = false;
    svToCookies();
}

function toGamb() {
    el = document.getElementById("children");
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
    el = document.getElementById("bullets");
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
    if (coins >= 75) {
        document.getElementById("price").style.color = "black";
    } else {
        document.getElementById("price").style.color = "red";
    }
    document.getElementById("gatcha").hidden = false;
    document.getElementById("stage").hidden = true;
    document.getElementById("collection").hidden = true;
}

function toStg() {
    document.getElementById("stage").hidden = false;
    document.getElementById("gatcha").hidden = true;
    document.getElementById("collection").hidden = true;
    document.getElementById("gGunT").src = skinPngs[defSkin];
}

function toCol() {
    document.getElementById("gatcha").hidden = true;
    document.getElementById("collection").hidden = false;
    skinPointer = defSkin;
    document.getElementById("colSkin").src = skinPngs[defSkin];
}

function svToCookies() {
    document.cookie = "coins=" + coins;
    document.cookie = "skins=" + skins;
    document.cookie = "defSk=" + defSkin;
}

function loadFromCookies() {
    cookies = document.cookie.split("; ");
    cookies.forEach((cookie) => {
        if (cookie.startsWith("coins=")) {
            coins = parseInt(cookie.substring(6));
        } else if (cookie.startsWith("skins=")) {
            skins = cookie.substring(6).split(",");
            for (i = 0; i < skins.length; i++) {
                skins[i] = parseInt(skins[i]);
            }
        } else if (cookie.startsWith("defSk=")) {
            defSkin = parseInt(cookie.substring(6));
            skinPointer = defSkin;
        }
    });
    document.getElementById("coinValue").innerHTML = coins;
    if (coins >= 75) {
        document.getElementById("price").style.color = "black";
    } else {
        document.getElementById("price").style.color = "red";
    }
}

function colSkin(dir) {
    if (dir == "R") {
        skinPointer = skinPointer + 1;
    } else {
        skinPointer = skinPointer - 1;
        if (skinPointer < 0) {
            skinPointer = availableSkins.length + skinPointer;
        }
    }
    skinPointer = skinPointer % availableSkins.length;
    if (skins.includes(skinPointer)) { 
        document.getElementById("colSkin").src = skinPngs[skinPointer];
        if (skinPointer == defSkin) {
            document.getElementById("skChs").innerHTML = "Selected";
            document.getElementById("skChs").disabled = true;
        } else {
            document.getElementById("skChs").innerHTML = "Select";
            document.getElementById("skChs").disabled = false;
        }
    } else {
        document.getElementById("colSkin").src = "skPlaceholder.png";
        document.getElementById("skChs").innerHTML = "Hidden";
        document.getElementById("skChs").disabled = true;
    }
    
}

function chooseSkin() {
    defSkin = skinPointer;
    document.getElementById("skChs").innerHTML = "Selected";
    document.getElementById("skChs").disabled = true;
    svToCookies();
}

function notes() {
    document.getElementById("notes").hidden = false;
    document.getElementById("HTP").hidden = true;
}

function closeNotes() {
    document.getElementById("notes").hidden = true;
}

function HTP() {
    document.getElementById("HTP").hidden = false;
    document.getElementById("notes").hidden = true;
}

function closeHTP() {
    document.getElementById("HTP").hidden = true;
}