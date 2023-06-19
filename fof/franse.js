ar = [];
for (i = 0; i < 131; i++) {
    ar.push(i);
}
ds = [];
for (i = 0; i < 35; i++) {
    ds.push(ar.splice(Math.ceil(Math.random()*ar.length), 1)[0]);
}
for (i = 0; i < 96; i++) {
    document.getElementById("35" + ar[i]).hidden = true;
}

function DayOne() {
    document.getElementById("wrp").hidden = true;
    document.getElementById("d1").hidden = false;
    upd();
}

function th35Rnd() {
    e = Math.floor(Math.random()*ds.length)
    d = ds.splice(e, 1)[0];
    if (d != undefined) {
        document.getElementById("35" + d).hidden = true;
        ar.push(d);
    }
    e = Math.floor(Math.random()*ar.length)
    d = ar.splice(e, 1)[0];
    if (d != undefined) {
        document.getElementById("35" + d).hidden = false;
        ds.push(d);
    }
}

function upd() {
    setTimeout(() => {
        th35Rnd();
        upd();
    }, 100);
}

function DayTwo() {
    document.getElementById("wrp").hidden = true;
    document.getElementById("d2").hidden = false;
}

async function D2S() {
    field = document.getElementById('d1T').value
    if (field != undefined && field.length > 0){
        await fetch("https://mhrduality.vercel.app/p5/d1/" + field).then(data => {
            data.json().then(response => {
                r = response["r"];
                if (r == "y"){
                    document.getElementById('d2E').src = response["f"];
                    document.getElementById('d2E').hidden = false;
                }
            });
        });
    }
}

function DayThree() {
    document.getElementById("wrp").hidden = true;
    document.getElementById("d3").hidden = false;
}

function D3C1() {
    if (document.getElementById('C1').innerHTML == 34) {
        document.getElementById('B1').disabled = true;
        document.getElementById('C2').hidden = false;
        document.getElementById('B2').hidden = false;
        document.getElementById('B22').hidden = false;
    }
    document.getElementById('C1').innerHTML = parseInt(document.getElementById('C1').innerHTML) + 1;
}

function D3C2() {
    if (document.getElementById('C2').innerHTML == 34) {
        document.getElementById('B2').disabled = true;
        document.getElementById('B22').disabled = true;
        document.getElementById('C3').hidden = false;
        document.getElementById('B3').hidden = false;
        document.getElementById('B32').hidden = false;
        document.getElementById('B33').hidden = false;
    }
    document.getElementById('C2').innerHTML = parseInt(document.getElementById('C2').innerHTML) + 1;
}

function D3C22() {
    window.location.href = "/fof/D3VS/0293.mp4";
}

function D3C3() {
    window.location.href = "/fof/D3VS/8263.mp4"
}

function D3C32() {
    window.location.href = "/fof/D3VS/insertnumber.mp4"
}

function D3C33() {
    if (document.getElementById('C3').innerHTML == 34) {
        document.getElementById('B3').disabled = true;
        document.getElementById('B32').disabled = true;
        document.getElementById('B33').disabled = true;
        document.getElementById('MSI').hidden = false;
        document.getElementById('MSB').hidden = false;
    }
    document.getElementById('C3').innerHTML = parseInt(document.getElementById('C3').innerHTML) + 1;
}

async function D3S() {
    field = document.getElementById('MSI').value
    if (field != undefined && field.length > 0){
        await fetch("https://mhrduality.vercel.app/p5/d2/" + field).then(data => {
            data.json().then(response => {
                r = response["r"];
                if (r == "Y"){
                    document.getElementById('D3E').src = response["f"];
                    document.getElementById('D3E').hidden = false;
                }
            });
        });
    }
}

d4c = 0;

function DayFour() {
    document.getElementById("wrp").hidden = true;
    document.getElementById("d4").hidden = false;
    document.getElementById("D4M").value = d4c
    if (d4c >=35) {
        document.getElementById("D4CH").hidden = false;
    }
}

function Home() {
    d4c += 1;
    if (d4c > 35) {
        d4c = 35;
    }
    document.getElementById("d4").hidden = true;
    document.getElementById("wrp").hidden = false;
}

async function D4S() {
    field = document.getElementById('DFI').value
    if (field != undefined && field.length > 0){
        await fetch("https://mhrduality.vercel.app/p5/d3/" + field).then(data => {
            data.json().then(response => {
                r = response["r"];
                if (r == "YE"){
                    document.getElementById('D4E').src = response["f"];
                    document.getElementById('D4E').hidden = false;
                }
            });
        });
    }
}

function home() {
    document.getElementById("d5").hidden = true;
    document.getElementById("d6").hidden = true;
    document.getElementById("wrp").hidden = false;
}

function DayFive() {
    document.getElementById("wrp").hidden = true;
    document.getElementById("d5").hidden = false;
}

throwing = false;
numord = 0;
haveBq = false;
haveBag = false;
tut = 0;
function ord() {
    document.getElementById('tbF').hidden = false;
    if (numord == 0){
        setTimeout(() => {
            document.getElementById('tabs').hidden = false;
            alert("Oh no! This native french who only speaks the way French usually do is hungry and made the mistake of assuming your bakery would serve fine fancy French food! Quick! Switch to the fooooooods tab and make this guy a traditional French deliciously, the Båguéttè")
        }, 500);
    }
    numord += 1
}

function Orders() {
    document.getElementById("kit").hidden = true;
    document.getElementById("bko").hidden = false;
    if (haveBq) {
        haveBq = false;
        bqTime();
    } else if(haveBag) {
        haveBag = false;
        bagTime();
    }
}

function Food() {
    document.getElementById("kit").hidden = false;
    document.getElementById("bko").hidden = true;
    if (tut == 1){
        document.getElementById("bq").hidden = true;
        setTimeout(() => {
            alert("Uh oh, it seems you threw all the båguéttès in the trash can by accident! You can't feed those to people! And the box of båguéttès you thought you bought yesterday was actually just a bunch of wet bags! Guess you'll just have to pass them off as bagwets and hope they don't notice.")
        }, 50);
    }
}

function ClBq() {
    document.getElementById("bqGrab").hidden = true;
    document.getElementById("bqBUT").hidden = true;
    document.getElementById("bqFeed").hidden = false;
    haveBq = true;
    setTimeout(() => {
        alert("Nice! Now let's go feed that hungry guy from the world of Fräns!");
    }, 500);
}

l = 41.8;
t = 57.2;
rot = 0;
goall = 43.8;
goalt = 50.2;
function bqTime() {
    setTimeout(() => {
        if (Math.random() > .95) {
            l = l + .2;
            if (l > goalt) {
                l = goall
            }
        }
        if (Math.random() > .9) {
            t = t - .2;
            if (t < goalt) {
                t = goalt
            }
        }
        rot += Math.random()*8
        document.getElementById("bqFeed").style.left = l + "vw"
        document.getElementById("bqFeed").style.top = t + "vh"
        document.getElementById("bqFeed").style.transform = "rotate(" + rot + "deg)"
        if (l != goall && t != goalt) {
            bqTime();
        } else {
            document.getElementById("tbF").hidden = true;
            document.getElementById("cusY").hidden = false;
            setTimeout(() => {
                retreat();
            }, 1000);
        }
    }, 10)
}

function retreat() {
    document.getElementById("cusY").hidden = true;
    document.getElementById("cp3txt").hidden = true;
    document.getElementById("ouch").hidden = true;
    document.getElementById("cusYu").hidden = true;
    for (i = 0; i < 150; i++){
        setTimeout(() => {
            document.getElementById("bd").style.top = parseFloat(document.getElementById("bd").style.top.substring(0, 4)) - -.1 + "vh";
            document.getElementById("hd").style.bottom = parseFloat(document.getElementById("hd").style.bottom.substring(0, 4)) - .1 + "vh";
            document.getElementById("ar1").style.top = parseFloat(document.getElementById("ar1").style.top.substring(0, 4)) - -.1 + "vh";
            document.getElementById("ar2").style.top = parseFloat(document.getElementById("ar2").style.top.substring(0, 4)) - -.1 + "vh";
            document.getElementById("bqFeed").style.top = parseFloat(document.getElementById("bqFeed").style.top.substring(0, 4)) - -.1 + "vh";
            document.getElementById("bagFeed").style.top = parseFloat(document.getElementById("bagFeed").style.top.substring(0,4)) - -.1 + "vh";
            document.getElementById("ha").style.top = parseFloat(document.getElementById("ha").style.top.substring(0,4)) - -.1 + "vh";
        }, i*10);
    }
    setTimeout(() => {
        document.getElementById("ha").hidden = true;
        document.getElementById("ar2").hidden = false;
        document.getElementById("ar1").hidden = false;
    }, 2000);
    if (tut == 0) {
        setTimeout(() => {
            document.getElementById("bqFeed").hidden = true;
            tut = 1;
            alert("Oh no! That guy told all his friends about us and now we're going to have to deal with a bunch of customers!");
            document.getElementById("bw").hidden = false;
            emerge()
        }, 2000);
    } else if (tut == 1) {
        setTimeout(() => {
            document.getElementById("bagFeed").hidden = true;
            tut = 2;
            alert("Whoo! They fell for it. How long can we keep this up?")
            document.getElementById("counter").hidden = false;
            document.getElementById("counter").innerHTML = "Customers served: 2"
            emerge();
        }, 2000);
    } else if (tut == 4) {
        setTimeout(() => {
            document.getElementById("delivery").hidden = false;
            document.getElementById("bagFeed").hidden = true;
            tut = tut + 1
            document.getElementById("counter").innerHTML = "Customers served: " + tut;
            alert("You've unlocked fast mode! You know the number you need to get to at this point, so here's a way to skip the animation!");
            emerge();
        }, 2000);
    } else if (tut == 34) {
        setTimeout(() => {
            document.getElementById("day").hidden = false;
            document.getElementById("bagFeed").hidden = true;
            tut = tut + 1
            document.getElementById("counter").innerHTML = "Customers served: " + tut;
            emerge();
        }, 2000);
    } else {
        setTimeout(() => {
            document.getElementById("bagFeed").hidden = true;
            tut = tut + 1
            document.getElementById("counter").innerHTML = "Customers served: " + tut;
            emerge();
        }, 2500);
    }
}

hCount = 3
function emerge() {
    if (Math.random() > .7) {
        document.getElementById("ha").hidden = false;
    }
    document.getElementById("ar1").style.transform = "rotate(" + (Math.random()*10+40) + "deg)";
    document.getElementById("ar2").style.transform = "rotate(" + (Math.random()*10+130) + "deg)";
    if (Math.random() > .91) { 
        document.getElementById("ar1").hidden = true;
    }
    if (Math.random() > .91) { 
        document.getElementById("ar2").hidden = true;
    }
    for (i = 0; i < 150; i++){
        setTimeout(() => {
            document.getElementById("bd").style.top = parseFloat(document.getElementById("bd").style.top.substring(0, 4)) - .1 + "vh";
            document.getElementById("hd").style.bottom = parseFloat(document.getElementById("hd").style.bottom.substring(0, 4)) - -.1 + "vh";
            document.getElementById("ar1").style.top = parseFloat(document.getElementById("ar1").style.top.substring(0, 4)) - .1 + "vh";
            document.getElementById("ar2").style.top = parseFloat(document.getElementById("ar2").style.top.substring(0, 4)) - .1 + "vh";
            document.getElementById("bqFeed").style.top = parseFloat(document.getElementById("bqFeed").style.top.substring(0, 4)) - .1 + "vh";
            document.getElementById("bagFeed").style.top = parseFloat(document.getElementById("bagFeed").style.top.substring(0,4)) - .1 + "vh";
            document.getElementById("ha").style.top = parseFloat(document.getElementById("ha").style.top.substring(0,4)) - .1 + "vh";
        }, i*10);
    }
    document.getElementById("bagFeed").style.left = "39.8vw"
    document.getElementById("bagFeed").style.top = "55.8vh"
    document.getElementById("bagFeed").style.transform = "rotate(0deg)"
    setTimeout(() => {
        document.getElementById("cp3txt").hidden = false;
        if (hCount == 3){
            document.getElementById("bw1").hidden = false;
            document.getElementById("bw1BUT").hidden = false;
            document.getElementById("bw2").hidden = false;
            document.getElementById("bw2BUT").hidden = false;
            document.getElementById("bw3").hidden = false;
            document.getElementById("bw3BUT").hidden = false;    
            hCount = 0
            if (tut > 2) {
                if (Math.random() > .5) {
                    document.getElementById("bw1").style.borderTop = "10px solid palegreen";
                } else {
                    document.getElementById("bw1").style.borderTop = "10px solid powderblue";
                }
                if (Math.random() > .5) {
                    document.getElementById("bw2").style.borderTop = "10px solid palegreen";
                } else {
                    document.getElementById("bw2").style.borderTop = "10px solid powderblue";
                }
                if (Math.random() > .5) {
                    document.getElementById("bw3").style.borderTop = "10px solid palegreen";
                } else {
                    document.getElementById("bw3").style.borderTop = "10px solid powderblue";
                }
            }
        }
    }, 2000)
}

function BW1() {
    if (!haveBag) {
        document.getElementById("bw1").hidden = true;
        document.getElementById("bw1BUT").hidden = true;
        document.getElementById("bagFeed").hidden = false;
        document.getElementById("bagFeed").style.borderTop = document.getElementById("bw1").style.borderTop;
        hCount = hCount + 1;
    }
    haveBag = true;
    l = 39.8;
    t = 55.8;
    rot = 0;
    goall = 45.6;
    goalt = 50.2;
}

function BW2() {
    if (!haveBag) {
        document.getElementById("bw2").hidden = true;
        document.getElementById("bw2BUT").hidden = true;
        document.getElementById("bagFeed").hidden = false;
        document.getElementById("bagFeed").style.borderTop = document.getElementById("bw2").style.borderTop;
        hCount = hCount + 1;
    }
    haveBag = true;
    l = 39.8;
    t = 55.8;
    rot = 0;
    goall = 45.6;
    goalt = 50.2;
}

function BW3() {
    if (!haveBag) {
        document.getElementById("bw3").hidden = true;
        document.getElementById("bw3BUT").hidden = true;
        document.getElementById("bagFeed").hidden = false;
        document.getElementById("bagFeed").style.borderTop = document.getElementById("bw3").style.borderTop;
        hCount = hCount + 1;
    }
    haveBag = true;
    l = 39.8;
    t = 55.8;
    rot = 0;
    goall = 45.6;
    goalt = 50.2;
}

function bagTime() {
    if (!throwing) {
        setTimeout(() => {
            if (Math.random() > .95) {
                l = l + .2;
                if (l > goall) {
                    l = goall;
                }
            }
            if (Math.random() > .9) {
                t = t - .2;
                if (t < goalt) {
                    t = goalt;
                }
            }
            rot += Math.random()*8;
            document.getElementById("bagFeed").style.left = l + "vw";
            document.getElementById("bagFeed").style.top = t + "vh";
            document.getElementById("bagFeed").style.transform = "rotate(" + rot + "deg)";
            if (l != goall || t != goalt) {
                bagTime();
            } else {
                document.getElementById("tbF").hidden = true;
                if (tut < 2) {
                    document.getElementById("cusY").hidden = false;
                } else {
                    if (Math.random() < .95) {
                        document.getElementById("cusY").hidden = false;
                    } else {
                        document.getElementById("cusYu").hidden = false;
                    }
                }
                setTimeout(() => {
                    retreat();
                }, 1000);
            }
        }, 10)
    } else {
        document.getElementById("bagFeed").style.left = "47.5vw";
        document.getElementById("bagFeed").style.top = "46.5vh";
        document.getElementById("bagFeed").style.transform = "rotate(" + Math.random()*360 + "deg)";
        document.getElementById("tbF").hidden = true;
        document.getElementById("ouch").hidden = false;
        setTimeout(() => {
            retreat();
        }, 300);
    }
    
}

function Delivery() {
    if (throwing) {
        throwing = false;
        document.getElementById("delivery").innerHTML = "Delivery Mode: Handing";
    } else {
        throwing = true;
        document.getElementById("delivery").innerHTML = "Delivery Mode: Throwing";
    }
}

async function D5T() {
    field = document.getElementById('bred').value
    if (field != undefined && field.length > 0){
        await fetch("https://mhrduality.vercel.app/p5/d4/" + field).then(data => {
            data.json().then(response => {
                r = response["r"];
                if (r == "FRN"){
                    document.getElementById('DE5').src = response["f"];
                    document.getElementById('DE5').style.visibility = "visible";
                }
            });
        });
    }
}

onPerson = 0;
function DaySix() {
    document.getElementById("wrp").hidden = true;
    document.getElementById("d6").hidden = false;
    if (onPerson == 0) { 
        document.getElementById("txt6").hidden = true;
        document.getElementById("helping").hidden = true;
        document.getElementById("perp").hidden = true;
        d6runner();
    }
}

function d6runner() {
    if (onPerson == 0) {
        setTimeout(() => {
            alert("You're a tree, and you have something of a repuation for greatness around these parts. People will often come to ask for assistance of some kind, but it's up to you if you want to endulge them or not.")
        }, 100);
    }
    setTimeout(() => {
        personMoveLeft();
    }, 100);
}

function legSpin() {
    document.getElementById('perp').style.transform = "rotate(180deg)";
    document.getElementById('perp').style.top = parseFloat(document.getElementById("perp").style.top) + 11 + "vh";
}

wPerp = ["perp", "spear", "bbhat", "frans", "nametag", "pusher", "skates", "tear", "dead", "hair", "hair2", "stop", "glasses", "wand", "hw", "jobP", "bln", "cptr", "hdps", "msth", "etb", "bff", "pstht", "pstbx"];
choices = [];

async function people() {
    switch (onPerson) {
        case 1:
            document.getElementById("perp").hidden = false;
            document.getElementById("frans").hidden = false;
            personWalkRight(40);
            break;
        case 2:
            document.getElementById("txtbx").innerHTML = "Hi";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 3:
            document.getElementById("txtbx").innerHTML = "dlǝH";
            document.getElementById("perp").hidden = false;
            document.getElementById("pusher").hidden = false;
            document.getElementById("perp").style.top = "84.5vh";
            document.getElementById("perp").style.transform = "rotate(180deg)";
            personWalkRight(45);
            break;
        case 4:
            document.getElementById("txtbx").innerHTML = "Do you like my hat?";
            document.getElementById("perp").style.top = "73vh";
            document.getElementById("perp").style.transform = "rotate(0deg)";
            document.getElementById("perp").hidden = false;
            document.getElementById("bbhat").hidden = false;
            personWalkRight(40);
            break;
        case 6:
            document.getElementById("txtbx").innerHTML = "Murder?";
            document.getElementById("perp").hidden = false;
            document.getElementById("spear").hidden = false;
            personWalkRight(40);
            break;
        case 7:
            document.getElementById("bird").style.left = "30vw";
            document.getElementById("txtbx").innerHTML = "robin-like warble, but sweeter";
            document.getElementById("bird").hidden = false;
            document.getElementById("perp").hidden = true;
            moveObjR("bird", 38, 10);
            personWalkRight(40);
            break;
        case 8:
            document.getElementById("txtbx").innerHTML = "Help help";
            document.getElementById("hair").hidden = false;
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 9:
            document.getElementById("txtbx").innerHTML = "My dad got hit by a car";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 10:
            document.getElementById("txtbx").innerHTML = "Do you want a cookie?";
            document.getElementById("perp").hidden = false;
            document.getElementById("cookie").hidden = false;
            wPerp.push("cookie")
            personWalkRight(40);
            break;
        case 11:
            document.getElementById("txtbx").innerHTML = "Grandma I lost my glasses";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 12:
            document.getElementById("txtbx").innerHTML = "I'm a wizard";
            document.getElementById("wand").hidden = false;
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break
        case 13:
            document.getElementById("txtM").hidden = false;
            setTimeout(() => {
                document.getElementById("helping").hidden = false;
            }, 500);
            break;
        case 14:
            document.getElementById("txtbx").innerHTML = "Can I get a high five?";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break
        case 15:
            document.getElementById("txtbx").innerHTML = "Am I real?";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break
        case 16:
            document.getElementById("txtbx").innerHTML = "Can I sit here?";
            document.getElementById("perp").hidden = false;
            document.getElementById("txt6").style.opacity = 1;
            document.getElementById("perp").style.opacity = 1;
            personWalkRight(40);
            break
        case 17:
            document.getElementById("txtbx").innerHTML = "Grant me your protection";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 18:
            document.getElementById("txtbx").innerHTML = "Want to watch me fly?";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 19:
            document.getElementById("sun").hidden = false;
            document.getElementById("txt6").style.opacity = 0;
            moveObjR("sun", 16, 4);
            setTimeout(() => {
                document.getElementById("txtSn").hidden = false;
            }, 1500);
            break;
        case 20:
            document.getElementById("txt6").style.opacity = 1;
            document.getElementById('txtbx').innerHTML = "Does this look right?";
            document.getElementById("perp").hidden = false;
            document.getElementById("hw").hidden = false;
            personWalkRight(40);
            break;
        case 21:
            document.getElementById('txtbx').innerHTML = "I need a job";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 22:
            document.getElementById('txtbx').innerHTML = "It's fall now";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 23:
            document.getElementById('txtbx').innerHTML = "Should I believe in gravity?";
            document.getElementById("perp").hidden = false;
            document.getElementById("bln").hidden = false;
            personWalkRight(40);
            break;
        case 24:
            document.getElementById('txtbx').innerHTML = "Stu, is that you?";
            document.getElementById('perp').hidden = false;
            document.getElementById('perp').style.top = "73vh";
            document.getElementById('txt6').style.opacity = 1;
            personWalkRight(40);
            break;
        case 25:
            document.getElementById('txtbx').innerHTML = "I need to make a phone call";
            document.getElementById('perp').hidden = false;
            personWalkRight(40);
            break;
        case 26:
            document.getElementById('txtbx').innerHTML = "System.tree.transferSecureFunds(tree, 1234);";
            document.getElementById('txt6').style.opacity = 1;
            document.getElementById('perp').hidden = false;
            document.getElementById('cptr').hidden = false;
            personWalkRight(40);
            break;
        case 27:
            document.getElementById('txtbx').innerHTML = "Do you know Michael?";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 28:
            document.getElementById('txtbx').innerHTML = "Please turn off the parental controls";
            document.getElementById("perp").hidden = false;
            document.getElementById("hdps").hidden = false;
            personWalkRight(40);
            break;
        case 29:
            document.getElementById('txtbx').innerHTML = "I wish I had facial hair";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 30:
            document.getElementById('txtbx').innerHTML = "I request evolution";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 31:
            document.getElementById('txtbx').innerHTML = "I'm hungry.";
            document.getElementById('txt6').style.opacity = 1;
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 32:
            document.getElementById('txtbx').innerHTML = "Have you used Syrup?";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 33:
            document.getElementById('txtbx').innerHTML = "Want to see something cool?";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 34:
            document.getElementById('txtbx').innerHTML = "GOLF!";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
        case 35:
            document.getElementById('txtbx').innerHTML = "Special delivery";
            document.getElementById("perp").hidden = false;
            document.getElementById('pstht').hidden = false;
            document.getElementById('pstbx').hidden = false;
            personWalkRight(40);
            break;
        case 36:
            slsRunner();
            break;
        case 37:
            break;
        default:
            document.getElementById('txtbx').innerHTML = "Help me tree";
            document.getElementById("perp").hidden = false;
            personWalkRight(40);
            break;
    }
}


rMore = false;
function helped() {
    choices.push("y")
    document.getElementById("txt6").hidden = true;
    document.getElementById("helping").hidden = true;
    setTimeout(() => {
        switch (onPerson) {
            case 1:
                document.getElementById('txtbx').innerHTML = "Yům";
                document.getElementById('frans').style.left = "50vw";
                document.getElementById('bqcallback').hidden = false;
                moveObjL("frans", 40, 10)
                break;
            case 2:
                document.getElementById('txtbx').innerHTML = "My name is Jefferson";
                document.getElementById('nametag').style.left = "50vw";
                document.getElementById('nametag').hidden = false;
                moveObjL("nametag", 39.2, 10)
                break;
            case 3:
                document.getElementById("ar125").style.height = "2.6vw";
                document.getElementById("ar125").style.left = "1.4vw";
                document.getElementById("ar225").style.height = "2.6vw";
                document.getElementById("ar225").style.left = "1.4vw";
                document.getElementById("perp").style.top = "73vh";
                rot = [...Array(179).keys()];
                k = 0;
                for (i = 0; i < 180; i++){
                    setTimeout(() => {
                        document.getElementById("perp").style.transform = "rotate(" + (rot[k] + 181) + "deg)";
                        k = k + 1;
                    }, i*1.8);
                }
                setTimeout(() => {
                    document.getElementById('txtbx').innerHTML = "Thanks";
                    moveObjL("dummy", 1, 0);
                }, 1000);
                break;
            case 5:
                document.getElementById('txtbx').innerHTML = "Thanks, my feet hurt.";
                document.getElementById('skates').style.left = "50vw";
                document.getElementById('skates').hidden = false;
                moveObjL("skates", 41.2, 10)
                break;
            case 6:
                document.getElementById('txtbx').innerHTML = "I'm going to show my friends";
                document.getElementById("dead").style.top = "-1vh";
                document.getElementById("dead").hidden = false;
                rMore = true;
                moveObjD("dead", 84, 1);
                break;
            case 7:
                setTimeout(() => {
                    setTimeout(() => {
                        personMoveLeft();
                    }, 500);
                }, moveObjRU("bird", 45, 61, 5));
                break;
            case 8:
                document.getElementById('txtbx').innerHTML = "Wow, much better!";
                document.getElementById("hair").hidden = true;
                document.getElementById("hair2").hidden = false;
                moveObjL("dummy", 1, 0)
                break;
            case 9:
                document.getElementById('txtbx').innerHTML = "Sure this works";
                document.getElementById('stop').style.left = "50vw";
                document.getElementById("stop").hidden = false;
                rMore = true;
                moveObjL("stop", 41.9, 10);
                break;
            case 10:
                document.getElementById('txtbx').innerHTML = "Enjoy";
                setTimeout(() => {
                    setTimeout(() => {
                        wPerp.pop()
                        moveObjL("dummy", 1, 0)
                    }, 500);
                }, moveObjRD("cookie", 61.2, 83, 5));
                break;
            case 11:
                document.getElementById('txtbx').innerHTML = "Oh wait you aren't Grandma";
                document.getElementById('glasses').style.left = "50vw";
                document.getElementById("glasses").hidden = false;
                moveObjL("glasses", 41, 10);
                break;
            case 12:
                document.getElementById('txtbx').innerHTML = "I'll spare you";
                moveObjL("dummy", 1, 0);
                break;
            case 13:
                document.getElementById('txtbxM').innerHTML = "Well I guess it's different.";
                document.getElementById('home').style = "background-color: rgb(25, 105, 0); color: #b2fdd8; font-size: 2vh; font-family: Seaford; border-radius: 3vw; position: fixed; top: 85vh; left: 79vw; width: 9vmax"
                setTimeout(() => {
                    onPerson = onPerson + 1;
                    people();
                    document.getElementById('txtM').hidden = true;
                }, 1000);
                break;
            case 14:
                document.getElementById('txtbx').innerHTML = "Yay!"
                for (i = 0; i < 10; i++) {
                    setTimeout(() => {
                        document.getElementById("treehand").style.width = parseFloat(document.getElementById("treehand").style.width) + .36 + "vw";
                        document.getElementById("treehand").style.height = parseFloat(document.getElementById("treehand").style.height) + .84 + "vh";
                    }, i*100);
                }
                setTimeout(() => {for (i = 0; i < 10; i++) {
                    setTimeout(() => {
                        document.getElementById("treehand").style.width = parseFloat(document.getElementById("treehand").style.width) - .36 + "vw";
                        document.getElementById("treehand").style.height = parseFloat(document.getElementById("treehand").style.height) - .84 + "vh";
                    }, i*100);
                }}, 2000);
                setTimeout(() => {
                    moveObjL("dummy", 1, 0);
                }, 2000);
                break;
            case 15:
                document.getElementById('txtbx').innerHTML = "That's what I thought";
                moveObjL("dummy", 1, 0);
                break;
            case 16:
                document.getElementById("sls").hidden = false;
                document.getElementById('perp').hidden = true;
                tar = ["73vh", "73.5vh", "74vh", "74.6vh", "75.6vh", "75.8vh", "76vh", "76.1vh", "76.2vh", "76.3vh"];
                ar1ar = ["width:0px; height: 2.2vmax; border:.15vmax solid black; position: absolute; top:1.7vh; left:1vw; transform: rotate(45deg);", "width:0px; height: 1.5vmax; border:.15vmax solid black; position: absolute; top:2.2vh; left:.8vw; transform: rotate(45deg);", "width:0px; height: .8vmax; border:.15vmax solid black; position: absolute; top:3.2vh; left:.4vw; transform: rotate(45deg);", "width:0px; height: .2vmax; border:.15vmax solid black; position: absolute; top:4vh; left:.2vw; transform: rotate(45deg);", "width:0px; height: 0vmax; border:.15vmax solid black; position: absolute; top:4vh; left:0vw; transform: rotate(70deg);", "width:0px; height: .6vmax; border:.15vmax solid black; position: absolute; top:4vh; left:-.4vw; transform: rotate(70deg);", "width:0px; height: 1.3vmax; border:.15vmax solid black; position: absolute; top:3.6vh; left:-.8vw; transform: rotate(70deg);", "width:0px; height: 1.8vmax; border:.15vmax solid black; position: absolute; top:3.4vh; left:-1vw; transform: rotate(70deg);", "width:0px; height: 2.2vmax; border:.15vmax solid black; position: absolute; top:3.2vh; left:-1.2vw; transform: rotate(70deg);", "width:0px; height: 2.4vmax; border:.15vmax solid black; position: absolute; top:3vh; left:-1.2vw; transform: rotate(70deg);"];
                ar2ar = ["width:0px; height: 2.4vmax; border:.15vmax solid black; position: absolute; top:1.5vh; left:-.9vw; transform: rotate(135deg);", "width:0px; height: 2.4vmax; border:.15vmax solid black; position: absolute; top:1.5vh; left:-.9vw; transform: rotate(125deg);", "width:0px; height: 2.4vmax; border:.15vmax solid black; position: absolute; top:1.5vh; left:-.9vw; transform: rotate(120deg);", "width:0px; height: 2.4vmax; border:.15vmax solid black; position: absolute; top:1.7vh; left:-1.2vw; transform: rotate(110deg);", "width:0px; height: 2.4vmax; border:.15vmax solid black; position: absolute; top:1.7vh; left:-1.2vw; transform: rotate(110deg);", "width:0px; height: 2.4vmax; border:.15vmax solid black; position: absolute; top:1.7vh; left:-1.2vw; transform: rotate(110deg);", "width:0px; height: 2.4vmax; border:.15vmax solid black; position: absolute; top:1.7vh; left:-1.2vw; transform: rotate(110deg);", "width:0px; height: 2.4vmax; border:.15vmax solid black; position: absolute; top:1.7vh; left:-1.2vw; transform: rotate(110deg);", "width:0px; height: 2.4vmax; border:.15vmax solid black; position: absolute; top:1.7vh; left:-1.2vw; transform: rotate(110deg);", "width:0px; height: 2.4vmax; border:.15vmax solid black; position: absolute; top:1.7vh; left:-1.2vw; transform: rotate(110deg);"];
                l1ar = ["width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:9vh; left:.6vw; transform: rotate(160deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:9vh; left:-.1vw; transform: rotate(185deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:9vh; left:-.6vw; transform: rotate(205deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8.9vh; left:-1.1vw; transform: rotate(225deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8.2vh; left:-1.3vw; transform: rotate(235deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8.2vh; left:-1.5vw; transform: rotate(245deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:7.2vh; left:-1.4vw; transform: rotate(255deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:7vh; left:-1.5vw; transform: rotate(265deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:6.8vh; left:-1.6vw; transform: rotate(275deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:6.6vh; left:-1.7vw; transform: rotate(280deg);"];
                l2ar = ["width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:9vh; left:-.9vw; transform: rotate(35deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8.6vh; left:-.9vw; transform: rotate(45deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8.6vh; left:-1.2vw; transform: rotate(55deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8.6vh; left:-1.5vw; transform: rotate(60deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8.2vh; left:-1.5vw; transform: rotate(63deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8vh; left:-1.5vw; transform: rotate(65deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8vh; left:-1.5vw; transform: rotate(67deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8vh; left:-1.5vw; transform: rotate(68deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8vh; left:-1.5vw; transform: rotate(69deg);", "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:8vh; left:-1.5vw; transform: rotate(70deg);"];
                j = 0;
                for (i = 0; i < 10; i++) {
                    setTimeout(() => {
                        document.getElementById("sls").style.top = tar[j];
                        document.getElementById("sar15").style = ar1ar[j];
                        document.getElementById("sar25").style = ar2ar[j];
                        document.getElementById("slg1").style = l1ar[j];
                        document.getElementById("slg2").style = l2ar[j];
                        j++;
                    }, i*25);
                }
                setTimeout(() => {
                    setTimeout(() => {
                        document.getElementById("txtS").hidden = false;
                        setTimeout(() => {
                            document.getElementById("txtS").hidden = true;
                            personMoveLeft();
                            slPh();
                        }, 2000);
                    }, moveObjRU("sls", 48.6, 76.3, 7) + 750);
                }, 250);
                break;
            case 17:
                document.getElementById('txtbx').innerHTML = "They can't get me now!";
                moveObjL("dummy", 1, 0);
                break;
            case 18:
                document.getElementById('txtbx').innerHTML = "Here I go!"
                document.getElementById('txt6').hidden = false;
                setTimeout(() => {
                    document.getElementById('txt6').hidden = true;
                    setTimeout(() => {
                        moveObjRU("strings", 41.9, -60, 5);
                        moveObjRU("perp", 40, 13, 5);
                        setTimeout(() => {
                            onPerson = onPerson + 1;
                            people();
                        }, 1500)
                    }, 1500);
                }, moveObjRD("strings", 41.9, 0, 6)/2);
                break;
            case 19:
                if (document.getElementById("perp").style.left != "30vw") {
                    document.getElementById("strings").hidden = true
                    document.getElementById("perp").hidden = true;
                    document.getElementById("perp").style.top = "73vh";
                }
                document.getElementById("txtbxSn").innerHTML = "▓▓░▒▒▓░░▒";
                setTimeout(() => {
                    document.getElementById('txtSn').hidden = true;
                    moveObjL("dummy", 1, 0);
                }, 1000);
                break
            case 20:
                rMore = true;
                document.getElementById('txtbx').innerHTML = "Wohoo!";
                document.getElementById('grd').hidden = false;
                document.getElementById('Lgrd').innerHTML = "A";
                moveObjL("dummy", 1, 0)
                break;
            case 21:
                document.getElementById('txtbx').innerHTML = "I don't want to work for this loser";
                document.getElementById("jobP").hidden = false;
                document.getElementById("jobP").style.left = "55vw";
                moveObjL("jobP", 38.2, 4)
                break;
            case 22:
                document.getElementById('lv1').style.backgroundColor = "#bea725";
                document.getElementById('lv2').style.backgroundColor = "#8b3f0c";
                document.getElementById('lv3').style.backgroundColor = "#961919";
                document.getElementById('lv4').style.backgroundColor = "#e0cf2e";
                document.getElementById('lv5').style.backgroundColor = "#aa5916";
                document.getElementById('lv6').style.backgroundColor = "#77c511";
                document.getElementById('lv7').style.backgroundColor = "#b45e0d";                
                document.getElementById('txtbx').innerHTML = "Much better";
                moveObjL("dummy", 1, 0)
                break;
            case 23:
                document.getElementById('txtbx').innerHTML = "Well aren't you boring.";
                moveObjL("dummy", 1, 0)
                break;
            case 24:
                document.getElementById('txtbx').innerHTML = "Yeah, whatever dad.";
                bzpic = document.createElement("img");
                bzpic.src = "../brazeltonz/info/STU5.jpg";
                bzpic.id = "bzpic";
                document.getElementById("BIGWALLOFBLUE").appendChild(bzpic);
                document.getElementById("bzpic").style.position = "fixed";
                document.getElementById("bzpic").style.left = "5vw";
                document.getElementById("bzpic").style.width = "90vw";
                setTimeout(() => {
                    document.getElementById("bzpic").style.width = "0vw";
                    setTimeout(() => {
                        document.getElementById("bzpic").style.width = "90vw";
                        setTimeout(() => {
                            document.getElementById("bzpic").style.width = "0vw";
                            setTimeout(() => {
                                document.getElementById("bzpic").style.top = "-20vh";
                                document.getElementById("bzpic").style.width = "90vw";
                                setTimeout(() => {
                                    document.getElementById("bzpic").style.width = "0vw";
                                    setTimeout(() => {
                                        document.getElementById("bzpic").style.width = "90vw";
                                        setTimeout(() => {
                                            bPxt = document.createElement("p");
                                            bPxt.id = "bPxt";
                                            document.getElementById("BIGWALLOFBLUE").appendChild(bPxt)
                                            document.getElementById("bPxt").style.wordBreak = "break-all";
                                            document.getElementById("bPxt").style = "position: fixed; word-break: break-all; left: .1vw; width: 99%; top: -.5vh"
                                            document.getElementById("bPxt").innerHTML = "SHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH";
                                            document.getElementById("bzpic").style.width = "0vw";
                                            setTimeout(() => {
                                                document.getElementById("bPxt").remove();
                                                document.getElementById("bzpic").remove();
                                                moveObjL("dummy", 1, 0)
                                            }, 2000);
                                        }, 150);
                                    }, 1000);
                                }, 150);
                            }, 500);
                        }, 150);
                    }, 300);
                }, 100);
                break;
            case 25:
                document.getElementById("phone").hidden = false;
                setTimeout(() => {
                    document.getElementById('txtbx').innerHTML = "Hello is this the Cheetos corporation?";
                    document.getElementById('txt6').hidden = false;
                    setTimeout(() => {
                        moveObjLU("perp", 25, 73, 10);
                        moveObjLU("phone", 25, 70.4, 10);
                        moveObjLU("txtbx", 25, 62.8, 10);
                        setTimeout(() => {
                            document.getElementById('txt6').style.opacity = 0;
                            document.getElementById('txt6t').style.left = "36.9vw";
                            document.getElementById('txtbx').style.left = "35vw";
                            document.getElementById('perp').style.left = "40vw";
                            document.getElementById('perp').hidden = true;
                            moveObjL("dummy", 1, 0);
                        }, moveObjLU("txt6t", 25, 66.2, 10) + 1500);
                    }, 500);
                }, moveObjLU("phone", 40.8, 70.4, 7) + 1000);
                break;
            case 26:
                document.getElementById('txtbx').innerHTML = "Haha now I'm rich!";
                moveObjL("dummy", 1, 0);
                break;
            case 27:
                document.getElementById('txtbx').innerHTML = "I'm so proud.";
                moveObjL("dummy", 1, 0);
                break;
            case 28:
                document.getElementById('txtbx').innerHTML = "Thank you.";
                document.getElementById('music').hidden = false;
                playMusic();
                moveObjL("dummy", 1, 0);
                break;
            case 29:
                document.getElementById("msth").hidden = false;
                document.getElementById('txtbx').innerHTML = "I feel very Frensh now";
                moveObjL("dummy", 1, 0);
                break;
            case 30:
                document.getElementById('perp').hidden = true;
                document.getElementById('ev').hidden = false;
                document.getElementById('txtbx').innerHTML = "What have you done to me?";
                document.getElementById('txt6').hidden = false;
                setTimeout(() => {
                    document.getElementById('txt6').style.opacity = 0;
                    moveObjL("ev", 20, 10);
                }, 1500);
                break;
            case 31:
                rMore = true;
                document.getElementById('etb').style.top = "100vh";
                document.getElementById('etb').hidden = false;
                document.getElementById('txtbx').innerHTML = "Ooo, delicious."
                setTimeout(() => {
                    moveObjL("dummy", 1, 0);
                }, moveObjRU('etb', 41.7, 70.5, 8) + 100);
                break;
            case 32:
                document.getElementById('txtbx').innerHTML = "Oh, ok, good.";
                moveObjL("dummy", 1, 0);
                break;
            case 33:
                for (i = 0; i < 200; i++){
                    setTimeout(() => {
                        document.getElementById('hd5').style.backgroundColor = "rgb(" + Math.random()*255 +"," +  Math.random()*255 + "," + Math.random()*255 + ")";
                        document.getElementById('ar15').style.transform = "rotate(" + Math.random()*360 + "deg)";
                        document.getElementById('ar25').style.transform = "rotate(" + Math.random()*360 + "deg)";
                        document.getElementById('lg1').style.transform = "rotate(" + Math.random()*360 + "deg)";
                        document.getElementById('lg2').style.transform = "rotate(" + Math.random()*360 + "deg)";
                    }, 10*i);
                }
                setTimeout(() => {
                    document.getElementById('hd5').style.backgroundColor = "black";
                    document.getElementById('ar15').style.transform = "rotate(45deg)";
                    document.getElementById('ar25').style.transform = "rotate(135deg)";
                    document.getElementById('lg1').style.transform = "rotate(145deg)";
                    document.getElementById('lg2').style.transform = "rotate(35deg)";
                    document.getElementById('txtbx').innerHTML = "Cool right?";
                    moveObjL("dummy", 1, 0);
                }, 2100);
                break;
            case 34:
                document.getElementById('bff').style.left = "50vw";
                document.getElementById('bff').hidden = false;
                document.getElementById('txtbx').innerHTML = "Making friends is easy!";
                moveObjL("bff", 38.6, 7);
                break;
            case 35:
                rMore = true;
                document.getElementById('grybl').hidden = false;
                document.getElementById('txtbx').innerHTML = "That's not normal.";
                document.getElementById('flp1').style = "position: absolute; left: -1vw; top: .7vh; width: 1.3vmax; height: .4vh; background-color: #89674a; transform: rotate(130deg)";
                document.getElementById('flp2').style = "position: absolute; left: 1.9vw; top: .7vh; width: 1.3vmax; height: .4vh; background-color: #89674a; transform: rotate(230deg)";
                setTimeout(() => {
                    for (i = 0; i < 80; i++){
                        setTimeout(() => {
                            document.getElementById('grybl').style.left = (parseFloat(document.getElementById('grybl').style.left) - .1) + "vw";
                            blsize = (parseFloat(document.getElementById('gbi').style.width) + .2) + "vmax";
                            document.getElementById('gbi').style.width = blsize;
                            document.getElementById('gbi').style.height = blsize;
                        }, i * 20);
                    }
                    setTimeout(() => {
                        document.getElementById('d6Eb').hidden = false;
                        for (i = 0; i < 90; i++){
                            setTimeout(() => {
                                document.getElementById('grybl').style.left = (parseFloat(document.getElementById('grybl').style.left) + .1) + "vw";
                                blsize = (parseFloat(document.getElementById('gbi').style.width) - .2) + "vmax";
                                document.getElementById('gbi').style.width = blsize;
                                document.getElementById('gbi').style.height = blsize;
                            }, i * 20);
                        }
                        setTimeout(() => {
                            moveObjL("dummy", 1, 0)
                        }, 90*20);
                    }, 90*20);
                }, moveObjRU("grybl", 41.6, 47, 5) + 100);
                
                break;
            default:
                document.getElementById('txtbx').innerHTML = "Thanks!";
                moveObjL("dummy", 1, 0);
                break;
        }
    }, 500);
}

function denied() {
    choices.push("n")
    document.getElementById("txt6").hidden = true;
    document.getElementById("helping").hidden = true;
    setTimeout(() => {
        switch (onPerson) {
            case 1:
                document.getElementById('txtbx').innerHTML = "Ǒw";
                document.getElementById('frans').style.left = "50vw";
                document.getElementById('bagcallback').hidden = false;
                moveObjL("frans", 40, 1);
                break;
            case 2:
                document.getElementById('txtbx').innerHTML = "Bye";
                moveObjL("dummy", 1, 0);
                break;
            case 3:
                document.getElementById('txtbx').innerHTML = "ʞO";
                moveObjL("dummy", 1, 0);
                break;
            case 5:
                document.getElementById('txtbx').innerHTML = "Ouch";
                wPerp.push("bloodcover");
                moveObjL("dummy", 1, 0);
                break;
            case 4:
                document.getElementById('txtbx').innerHTML = "Oh. I see.";
                document.getElementById('tear').hidden = false;
                moveObjL("dummy", 1, 0);
                break;
            case 6:
                document.getElementById('txtbx').innerHTML = "I will find murder elsewhere.";
                moveObjL("dummy", 1, 0);
                break;
            case 7:
                document.getElementById('txtbx').innerHTML = "Sweet, sweet, spit, spit, chew, chew";
                document.getElementById('perp').style.left = "40vw";
                wPerp.push("bird");
                moveObjL("dummy", 1, 0);
                break;
            case 10:
                document.getElementById('txtbx').innerHTML = "More for me";
                moveObjL("dummy", 1, 0);
                break;
            case 11:
                document.getElementById('txtbx').innerHTML = "I hate you Grandma";
                moveObjL("dummy", 1, 0);
                break;
            case 12:
                document.getElementById('txtbx').innerHTML = "Get rained on";
                document.getElementById("cloud").hidden = false;
                rain();
                moveObjL("dummy", 1, 0);
                break;
            case 13:
                document.getElementById('txtbxM').innerHTML = "You want to look like this?";
                setTimeout(() => {
                    onPerson = onPerson + 1;
                    people();
                    document.getElementById('txtM').hidden = true;
                }, 1000);
                break;
            case 15:
                document.getElementById('txtbx').innerHTML = 'Oh no!';
                document.getElementById('txt6').hidden = false;
                document.getElementById('perp').style.opacity = 1;
                for (i = 200; i > 0; i--) {
                    setTimeout(() => {
                        perc = (parseFloat(document.getElementById('perp').style.opacity)-.005);
                        document.getElementById('perp').style.opacity = perc;
                        document.getElementById('txt6').style.opacity = perc;
                    }, i * 10);
                }
                setTimeout(() => {
                    moveObjL("dummy", 1, 0)
                }, 2000);
                break;
            case 16:
                document.getElementById('txtbx').innerHTML = "You'll be back for me.";
                moveObjL("dummy", 1, 0);
                break;
            case 17:
                moveObjRU("claw", 40, 83, 3);
                setTimeout(() => {
                    document.getElementById('txtbx').innerHTML = "AHHHH!";
                    document.getElementById('txt6').hidden = false;
                    setTimeout(() => {
                        document.getElementById('txt6').hidden = true;
                        moveObjRD("claw", 40, 120, 2);
                        moveObjRD("perp", 40, 110, 2);
                        personMoveLeft();
                        setTimeout(() => {
                            document.getElementById('perp').style.top = '73vh';
                        }, 800);
                    }, 2000);
                }, 200)
                break;
            case 19:
                if (document.getElementById("perp").style.left != "30vw") {
                    document.getElementById("strings").hidden = true
                    document.getElementById("perp").hidden = true;
                    document.getElementById("perp").style.left = "40vw";
                    document.getElementById("perp").style.top = "73vh";
                }
                document.getElementById("txtbxSn").innerHTML = "░▒░▓░▓░▒";
                setTimeout(() => {
                    document.getElementById('txtSn').hidden = true;
                    setTimeout(() => {
                        moveObjL("sun", -4, 4);
                    }, 300);
                }, 1000);
                break
            case 20:
                rMore = true;
                document.getElementById('txtbx').innerHTML = "Well darn";
                document.getElementById('grd').hidden = false;
                document.getElementById('Lgrd').innerHTML = "F";
                moveObjL("dummy", 1, 0)
                break;
            case 21:
                document.getElementById('txtbx').innerHTML = "How am I going to eat now?";
                moveObjL("dummy", 1, 0)
                break;
            case 22:
                document.getElementById('txtbx').innerHTML = "I guess I was wrong";
                moveObjL("dummy", 1, 0)
                break;
            case 23:
                moveObjRU("bln",  42, -15, 6);
                document.getElementById('txt6').style.opacity = 0;
                setTimeout(() => {
                    moveObjL("dummy", 1, 0);
                }, moveObjRU("perp", 40, -15, 6)+500);
                break;
            case 24:
                document.getElementById('txtbx').innerHTML = "If you say so";
                moveObjL("dummy", 1, 0);
                break;
            case 25:
                document.getElementById('txtbx').innerHTML = "But I have ideas I need to share!";
                moveObjL("dummy", 1, 0);
                break;
            case 26:
                var a = new Audio("./D6A/26b.mp3");
                a.volume = .3;
                a.play();
                document.getElementById('txtbx').innerHTML = "Uh oh";
                moveObjL("dummy", 1, 0);
                break;
            case 27:
                document.getElementById('txtbx').innerHTML = "OHHHH YOU JUST GOT MICHAELED";
                document.getElementById('txt6').hidden = false;
                for (i = 0; i < 15; i++){
                    setTimeout(() =>{
                        document.getElementById("dbl").hidden = true;
                        document.getElementById("dbr").hidden = false;
                        setTimeout(() =>{
                            document.getElementById("dbl").hidden = false;
                            document.getElementById("dbr").hidden = true;
                        }, 50)
                    }, i*100);
                }
                setTimeout(() => {
                    document.getElementById("dbl").hidden = true;
                }, 1500)
                setTimeout(() => {
                    moveObjL("dummy", 1, 0);
                }, 800);
                break;
            case 28:
                document.getElementById('txtbx').innerHTML = "Fine, I'll go ask my mom.";
                moveObjL("dummy", 1, 0);
                break;
            case 29:
                document.getElementById('txtbx').innerHTML = "Alas, I'm destined to always be bald.";
                moveObjL("dummy", 1, 0);
                break;
            case 30:
                document.getElementById('txtbx').innerHTML = "It's ok that you're just not good enough.";
                moveObjL("dummy", 1, 0);
                break;
            case 31:
                document.getElementById('txtbx').innerHTML = "Hi hungry I'm dad";
                moveObjL("dummy", 1, 0);
                break;
            case 32:
                document.getElementById('txtbx').innerHTML = "Set it as your homepage!"
                syrupAd();
                break;
            case 33:
                document.getElementById('txtbx').innerHTML = "You suck";
                moveObjL("dummy", 1, 0);
                break;
            case 34:
                document.getElementById('txtbx').innerHTML = "Don't you know anything about social etiquette?";
                moveObjL("dummy", 1, 0);
                break;
            case 35:
                document.getElementById('txtbx').innerHTML = "Ok, but it says it's for you.";
                moveObjL("dummy", 1, 0);
                break;
            default:
                document.getElementById('txtbx').innerHTML = "You're mean";
                moveObjL("dummy", 1, 0);
                break;
        }
    }, 500);
}

function personWalkRight(goal) {
    i = parseFloat(document.getElementById("perp").style.left)
    j = 0;
    for (j = 0; i < goal; i = i + .1) {
        setTimeout(() => {
            wPerp.forEach(obj => {
                document.getElementById(obj).style.left = parseFloat(document.getElementById(obj).style.left) + .1 + "vw";
            });
        }, j*10);
        j = j + 1;
    }
    setTimeout(() => {
        document.getElementById("txt6").hidden = false;
        setTimeout(() => {
            document.getElementById("helping").hidden = false;
        }, 500);
    }, 10*j + 500);
}

function moveObjL(obj, goal, speed) {
    i = parseFloat(document.getElementById(obj).style.left)
    j = 0;
    for (j = 0; i > goal; i = i - .1) {
        setTimeout(() => {
            document.getElementById(obj).style.left = parseFloat(document.getElementById(obj).style.left) - .1 + "vw";
        }, j*speed);
        j = j + 1;
    }
    setTimeout(() => {
        document.getElementById("txt6").hidden = false;
        setTimeout(() => {
            document.getElementById("txt6").hidden = true;
            personMoveLeft();
        }, 2000);
    }, speed*j + 500);
}

function moveObjR(obj, goal, speed) {
    i = parseFloat(document.getElementById(obj).style.left)
    j = 0;
    for (j = 0; i < goal; i = i + .1) {
        setTimeout(() => {
            document.getElementById(obj).style.left = parseFloat(document.getElementById(obj).style.left) + .1 + "vw";
        }, j*speed);
        j = j + 1;
    }
    setTimeout(() => {
        document.getElementById("txt6").hidden = false;
        setTimeout(() => {
            document.getElementById("helping").hidden = false;
        }, 500);
    }, 10*j + 500);
}

function moveObjRU(obj, goalR, goalU, speed) {
    i = parseFloat(document.getElementById(obj).style.left);
    j = 0;
    for (j = 0; i < goalR; i = i + .1) {
        setTimeout(() => {
            document.getElementById(obj).style.left = parseFloat(document.getElementById(obj).style.left) + .1 + "vw";
        }, j*speed);
        j = j + 1;
    }
    k = 0
    i = parseFloat(document.getElementById(obj).style.top);
    for (j = 0; i > goalU; i = i - .1) {
        setTimeout(() => {
            document.getElementById(obj).style.top = parseFloat(document.getElementById(obj).style.top) - .1 + "vh";
        }, j*speed/2);
        j = j + 1;
    }
    return Math.max(j/2, k)*speed;
}

function moveObjLU(obj, goalL, goalU, speed) {
    i = parseFloat(document.getElementById(obj).style.left);
    j = 0;
    for (j = 0; i > goalL; i = i - .1) {
        setTimeout(() => {
            document.getElementById(obj).style.left = parseFloat(document.getElementById(obj).style.left) - .1 + "vw";
        }, j*speed);
        j = j + 1;
    }
    k = 0
    i = parseFloat(document.getElementById(obj).style.top);
    for (j = 0; i > goalU; i = i - .1) {
        setTimeout(() => {
            document.getElementById(obj).style.top = parseFloat(document.getElementById(obj).style.top) - .1 + "vh";
        }, j*speed/2);
        j = j + 1;
    }
    return Math.max(j/2, k)*speed;
}

function moveObjRD(obj, goalR, goalU, speed) {
    i = parseFloat(document.getElementById(obj).style.left);
    j = 0;
    for (j = 0; i < goalR; i = i + .1) {
        setTimeout(() => {
            document.getElementById(obj).style.left = parseFloat(document.getElementById(obj).style.left) + .1 + "vw";
        }, j*speed);
        j = j + 1;
    }
    k = 0
    i = parseFloat(document.getElementById(obj).style.top);
    for (j = 0; i < goalU; i = i + .1) {
        setTimeout(() => {
            document.getElementById(obj).style.top = parseFloat(document.getElementById(obj).style.top) + .1 + "vh";
        }, j*speed/2);
        j = j + 1;
    }
    return Math.max(j/2, k)*speed;
}

function moveObjLD(obj, goalR, goalU, speed) {
    i = parseFloat(document.getElementById(obj).style.left);
    j = 0;
    for (j = 0; i > goalR; i = i - .1) {
        setTimeout(() => {
            document.getElementById(obj).style.left = parseFloat(document.getElementById(obj).style.left) - .1 + "vw";
        }, j*speed);
        j = j + 1;
    }
    k = 0
    i = parseFloat(document.getElementById(obj).style.top);
    for (j = 0; i < goalU; i = i + .1) {
        setTimeout(() => {
            document.getElementById(obj).style.top = parseFloat(document.getElementById(obj).style.top) + .1 + "vh";
        }, j*speed/2);
        j = j + 1;
    }
    return Math.max(j/2, k)*speed;
}

function moveObjD(obj, goal, speed) {
    i = parseFloat(document.getElementById(obj).style.top)
    j = 0;
    for (j = 0; i < goal; i = i + .1) {
        setTimeout(() => {
            document.getElementById(obj).style.top = parseFloat(document.getElementById(obj).style.top) + .1 + "vh";
        }, j*speed);
        j = j + 1;
    }
    setTimeout(() => {
        document.getElementById("txt6").hidden = false;
        setTimeout(() => {
            document.getElementById("txt6").hidden = true;
            personMoveLeft();
        }, 1500);
    }, speed*j + 500);
}

function personMoveLeft() {
    goal = 30;
    if (rMore) {
        goal = 25
        rMore = false;
    }
    i = parseFloat(document.getElementById("perp").style.left)
    j = 0;
    for (j = 0; i > goal; i = i - .1) {
        setTimeout(() => {
            wPerp.forEach(obj => {
                document.getElementById(obj).style.left = parseFloat(document.getElementById(obj).style.left) - .1 + "vw";
            });
        }, j*10);
        j = j + 1;
    }
    setTimeout(() => {
        setTimeout(() => {
            wPerp.forEach(obj => {
                document.getElementById(obj).hidden = true;
            });
            onPerson = onPerson + 1;
            people();
        }, 500);
    }, 10*j + 500);
}

function rain() {
    rds = ["rd0", "rd1", "rd2", "rd3", "rd4", "rd5", "rd6", "rd7"]
    rds.forEach((rd) => {
        document.getElementById(rd).style.top = parseFloat(document.getElementById(rd).style.top) + .1 + "vh"
        if (parseFloat(document.getElementById(rd).style.top) > 35){
            document.getElementById(rd).style.top = "1vh"
        }
    });
    setTimeout(() => {
        rain();
    }, 10);
}

function slPh() {
    if (document.getElementById("txtS").hidden) { 
        if (Math.random()*45 > 44) {
            phs = ["Twee, twee, twee.", "It's quite hot out.", "Why am I here?"];
            idx = Math.floor(Math.random()*3);
            document.getElementById("txtS").hidden = false;
            document.getElementById("txtS").innerHTML = phs[idx];
        }
    } else {
        document.getElementById("txtS").hidden = true;
    }
    setTimeout(() => {
        slPh();
    }, 1000);
}

function playMusic() {
    qns = ["qn1", "qn2", "qn3", "qn4", "qn5", "qn6"]
    qns.forEach((qn) => {
        document.getElementById(qn).style.top = parseFloat(document.getElementById(qn).style.top) - .1 + "vh"
        if (parseFloat(document.getElementById(qn).style.top) < -6){
            document.getElementById(qn).style.top = "2.3vh"
        }
    });
    setTimeout(() => {
        playMusic();
    }, 10);
}

function syrupAd() {
    alert("Introducing: Syrup");
    alert("When you open your browser, do you wish for more?");
    alert("Do you want easy to read stats at your fingertips?");
    alert("Do you not feel immersed in your start page?");
    alert("Do you want open source solutions with designers that care?");
    alert("If you answered yes to any of those, Syrup is for you.");
    if (confirm("Check out monkeytoes999.github.io/syrup/ and support local code development!")) {
        window.open("https://monkeytoes999.github.io/syrup/", "_blank");
        setTimeout(() => {
            moveObjL("dummy", 1, 0);
        }, 1000);
    } else {
        alert("I don't think you actually read the messages if you AREN'T interested.");
        syrupAd();
    }
}

async function D6T() {
    field = document.getElementById('tbtn').value;
    if (field != undefined && field.length > 0) {
        await fetch("https://mhrduality.vercel.app/p5/d5/" + field).then(data => {
            data.json().then(response => {
                r = response["r"];
                if (r == "HIBERT"){
                    document.getElementById('TE6').src = response["f"];
                    document.getElementById('TE6').style.visibility = "visible";
                }
            });
        });
    }
}

async function slsRunner() {
    chStr = choices.toString();
    if (choices.length == 35) {
        await fetch("https://mhrduality.vercel.app/p5/sls/" + chStr).then(data => {
            data.json().then(response => {
                r = response['r'];
                if (r == "YSLS") {
                    document.getElementById('txtbx').innerHTML = response['ih'];
                    slsRev();
                }
            });
        });
    }
}

function slsRev() {
    setTimeout(() => {
        j = 9;
        for (i = 0; i < 10; i++) {
            setTimeout(() => {
                document.getElementById("sls").style.top = tar[j];
                document.getElementById("sar15").style = ar1ar[j];
                document.getElementById("sar25").style = ar2ar[j];
                document.getElementById("slg1").style = l1ar[j];
                document.getElementById("slg2").style = l2ar[j];
                j--;
            }, i*25);
        }
        setTimeout(() => {
            document.getElementById("sls").style.top = "73vh";
            document.getElementById("sar15").style = "width:0px; height: 2.6vmax; border:.15vmax solid black; position: absolute; top:1.5vh; left:1vw; transform: rotate(45deg);";
            document.getElementById("sar25").style = "width:0px; height: 2.6vmax; border:.15vmax solid black; position: absolute; top:1.5vh; left:-1vw; transform: rotate(135deg);";
            document.getElementById("slg1").style = "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:9vh; left:.9vw; transform: rotate(145deg);";
            document.getElementById("slg2").style = "width:0px; height: 2.86vmax; border:.15vmax solid black; position: absolute; top:9vh; left:-.9vw; transform: rotate(35deg);";
            document.getElementById('txt6').hidden = false;
            setTimeout(() => {
                document.getElementById('txt6').hidden = true;
                moveObjLD("sls", 20, 73, 10);
            }, 10000);
        }, 25*10);
    }, moveObjLD("sls", 40, 73, 7) + 750);
}