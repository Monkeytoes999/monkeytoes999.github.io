function lobsterToggle() {
    var base = document.getElementById("lobster");
    var lobster = false; //base.classList.contains("active");
    if (lobster) {
        fetch('https://mhrduality.vercel.app/lv/lbc0');
    } else {
        fetch('https://mhrduality.vercel.app/lv/lbc1');
    }
    //lobster = !lobster;
    //base.classList.toggle("active");
}

async function tasty() {
    await fetch('https://mhrduality.vercel.app/lv/whtasty');
}

async function reloading() {
    await fetch('https://mhrduality.vercel.app/lv/whreloading');
}

async function kostimo() {
    await fetch('https://mhrduality.vercel.app/lv/whkostimo');
}

async function awYeah() {
    await fetch('https://mhrduality.vercel.app/lv/whawyeah');
}

async function discord() {
    await fetch('https://mhrduality.vercel.app/lv/whdiscord');
}