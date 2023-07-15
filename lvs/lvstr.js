function lobsterToggle() {
    var base = document.getElementById("lobster");
    var lobster = base.classList.contains("active");
    if (lobster) {
        fetch('https://mhrduality.vercel.app/lv/lbc0');
    } else {
        fetch('https://mhrduality.vercel.app/lv/lbc1');
    }
    lobster = !lobster;
    base.classList.toggle("active");
}

function tasty() {
    fetch('https://mhrduality.vercel.app/lv/whtasty');
}

function awYeah() {
    fetch('https://mhrduality.vercel.app/lv/whawyeah');
}