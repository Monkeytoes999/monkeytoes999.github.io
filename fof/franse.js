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
    document.getElementById("35" + d).hidden = true;
    console.log(e, d)
    ar.push(d);
    d = ar.splice(Math.floor(Math.random()*ar.length), 1)[0];
    document.getElementById("35" + d).hidden = false;
    ds.push(d);
}

function upd() {
    setTimeout(() => {
        th35Rnd();
        upd();
    }, 100);
}