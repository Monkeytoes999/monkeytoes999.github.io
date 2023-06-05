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
    for (i = 0; i < 150; i++){
        setTimeout(() => {
            document.getElementById("bd").style.top = parseFloat(document.getElementById("bd").style.top.substring(0, 4)) - -.1 + "vh";
            document.getElementById("hd").style.bottom = parseFloat(document.getElementById("hd").style.bottom.substring(0, 4)) - .1 + "vh";
            document.getElementById("ar1").style.top = parseFloat(document.getElementById("ar1").style.top.substring(0, 4)) - -.1 + "vh";
            document.getElementById("ar2").style.top = parseFloat(document.getElementById("ar2").style.top.substring(0, 4)) - -.1 + "vh";
            document.getElementById("bqFeed").style.top = parseFloat(document.getElementById("bqFeed").style.top.substring(0, 4)) - -.1 + "vh";
            document.getElementById("bagFeed").style.top = parseFloat(document.getElementById("bagFeed").style.top.substring(0,4)) - -.1 + "vh";
        }, i*10);
    }
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
            document.getElementById("day").hidden = true;
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
    for (i = 0; i < 150; i++){
        setTimeout(() => {
            document.getElementById("bd").style.top = parseFloat(document.getElementById("bd").style.top.substring(0, 4)) - .1 + "vh";
            document.getElementById("hd").style.bottom = parseFloat(document.getElementById("hd").style.bottom.substring(0, 4)) - -.1 + "vh";
            document.getElementById("ar1").style.top = parseFloat(document.getElementById("ar1").style.top.substring(0, 4)) - .1 + "vh";
            document.getElementById("ar2").style.top = parseFloat(document.getElementById("ar2").style.top.substring(0, 4)) - .1 + "vh";
            document.getElementById("bqFeed").style.top = parseFloat(document.getElementById("bqFeed").style.top.substring(0, 4)) - .1 + "vh";
            document.getElementById("bagFeed").style.top = parseFloat(document.getElementById("bagFeed").style.top.substring(0,4)) - .1 + "vh";
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
        }
    }, 2000)
}

function BW1() {
    if (!haveBag) {
        document.getElementById("bw1").hidden = true;
        document.getElementById("bw1BUT").hidden = true;
        document.getElementById("bagFeed").hidden = false;
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
                document.getElementById("cusY").hidden = false;
                setTimeout(() => {
                    retreat();
                }, 1000);
            }
        }, 10)
    } else {
        document.getElementById("bagFeed").style.left = "47.5vw";
        document.getElementById("bagFeed").style.top = "46.5vh";
        document.getElementById("bagFeed").style.top = "rotate(" + Math.random()*360 + "deg)";
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