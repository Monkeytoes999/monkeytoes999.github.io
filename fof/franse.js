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