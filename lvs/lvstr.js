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
const BUTTONS = [
    new Button("Tasty", "sound", "https://mhrduality.vercel.app/lv/whtasty"),
    new Button("Reloading", "sound", "https://mhrduality.vercel.app/lv/whreloading"),
    new Button("Kostimo", "sound", "https://mhrduality.vercel.app/lv/whkostimo"),
    new Button("Aw Yeah", "sound", "https://mhrduality.vercel.app/lv/whawyeah"),
    new Button("Discord Ping", "sound", "https://mhrduality.vercel.app/lv/whdiscord")
];