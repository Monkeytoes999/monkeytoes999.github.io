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
