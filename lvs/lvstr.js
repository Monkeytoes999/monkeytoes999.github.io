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
const SOUND_CATS = [
    new Category("Single Words", "#34beeb"),
    new Category("RNG Groups", "#34beeb"),
    new Category("TV Shows", "#34beeb"),
    new Category("Music", "#34beeb"),
    new Category("Video Games", "#34beeb"),
    new Category("Sound", "#34beeb"),
    new Category("Long Stuff", "#34beeb"),
    new Category("Rate Limitted", "#34beeb"),
];
const BUTTONS = [
    new Button("Tasty", "sound", "https://mhrduality.vercel.app/lv/whtasty", ["Single Words", "Video Games"]),
    new Button("Reloading", "sound", "https://mhrduality.vercel.app/lv/whreloading", ["Single Words", "Video Games"]),
    new Button("Kostimo", "sound", "https://mhrduality.vercel.app/lv/whkostimo", ["RNG Groups"]),
    new Button("Aw Yeah", "sound", "https://mhrduality.vercel.app/lv/whawyeah", ["Single Words", "Music"]),
    new Button("Discord Ping", "sound", "https://mhrduality.vercel.app/lv/whdiscord", ["Sound"]),
    new Button("Lights Off", "sound", "https://mhrduality.vercel.app/lv/whlights", ["Music"]),
    new Button("Hurt Garm", "sound", "https://mhrduality.vercel.app/lv/whtorture", ["Long Stuff", "Rate Limitted"]),
    new Button("You Clod", "sound", "https://mhrduality.vercel.app/lv/whclod", ["TV Shows"]),
    new Button("Cooking", "sound", "https://mhrduality.vercel.app/lv/whcooking", ["TV Shows", "Long Stuff"]),
    new Button("Owl House", "sound", "https://mhrduality.vercel.app/lv/whowlh", ["TV Shows"]),
    new Button("Pew pew", "sound", "https://mhrduality.vercel.app/lv/whpew", ["Video Games", "RNG Groups"]),
];

// makeCaptcha(); // Figure out a way to disable for just me
const TIMETOCHECK = 60; // Minutes between captchas
setInterval(makeCaptcha, 60*1000*TIMETOCHECK);