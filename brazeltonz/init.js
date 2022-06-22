Pages = [
new Page("Syrup", "Utility", "https://monkeytoes999.github.io/syrup/"),

new Page("Maze", "Games", "https://monkeytoes999.github.io/maze/"),

new Page("My Github", "References", "https://github.com/monkeytoes999"),
new Page("Iceman013's Page", "References", "https://github.com/Iceman013/Iceman013.github.io")
];

Pages.forEach(element => {
    var a = document.createElement("a");
    a.href = element.src;
    a.innerHTML = element.name;
    document.getElementById(element.type).appendChild(a);
});