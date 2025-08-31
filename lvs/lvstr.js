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
    new Category("Key Phrases", "#00ff70"),
    new Category("RNG Groups", "#9e34eb"),
    new Category("TV Shows", "#70beff"),
    new Category("Music", "#eb6eeb"),
    new Category("Video Games", "#eb3434"),
    new Category("Sound", "#ebeb34"),
    new Category("Long Stuff", "#34aed0"),
    new Category("Rate Limited", "#eb9e34"),
];
const BUTTONS = [
    new Button("Tasty", "sound", "https://mhrduality.vercel.app/lv/whtasty", ["Key Phrases", "Video Games"]),
    new Button("Reloading", "sound", "https://mhrduality.vercel.app/lv/whreloading", ["Key Phrases", "Video Games"]),
    new Button("Kostimo", "sound", "https://mhrduality.vercel.app/lv/whkostimo", ["RNG Groups"]),
    new Button("Aw Yeah", "sound", "https://mhrduality.vercel.app/lv/whawyeah", ["Key Phrases", "Music"]),
    new Button("Discord Ping", "sound", "https://mhrduality.vercel.app/lv/whdiscord", ["Sound"]),
    new Button("Lights Off", "sound", "https://mhrduality.vercel.app/lv/whlights", ["Music"]),
    new Button("Hurt Garm", "sound", "https://mhrduality.vercel.app/lv/whtorture", ["Long Stuff", "Rate Limited"]),
    new Button("You Clod", "sound", "https://mhrduality.vercel.app/lv/whclod", ["TV Shows"]),
    new Button("Cooking", "sound", "https://mhrduality.vercel.app/lv/whcooking", ["TV Shows", "Long Stuff"]),
    new Button("Owl House", "sound", "https://mhrduality.vercel.app/lv/whowlh", ["TV Shows"]),
    new Button("Pew pew", "sound", "https://mhrduality.vercel.app/lv/whpew", ["Video Games", "RNG Groups"]),
    new Button("Fingertips", "sound", "https://mhrduality.vercel.app/lv/whfingertips", ["Music"]),
    new Button("Portal 2 SFX", "sound", "https://mhrduality.vercel.app/lv/whp2sfx", ["Video Games", "RNG Groups"]),
    new Button("Hardly", "sound", "https://mhrduality.vercel.app/lv/whhkh", ["Key Phrases"])
];

// makeCaptcha(); // Figure out a way to disable for just me
const TIMETOCHECK = 60; // Minutes between captchas
fetch("https://mhrduality.vercel.app/lv/src")
        .then(data => data.json()
        .then(d => document.getElementById("VIDEO").src = d["v"]));
setInterval(makeCaptcha, 60*1000*TIMETOCHECK);