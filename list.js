var creators = [];
var tags = ["Time","News","Weather","Playful","Other"];
// Welcome
creators.push(function() {
    var welcome = new Widget();
    welcome.build = function() {
        var head = document.createElement("h1");
        head.innerHTML = "Welcome";
        head.style.textAlign = "center";

        this.setBase(head);
    }

    welcome.name = "Welcome";
    welcome.update = function() {
    }
    return new Case(welcome);
});
// Dad Joke
creators.push(function() {
    var dadjoke = new Widget();
    dadjoke.build = function() {
        var base = document.createElement("div");
        var head = document.createElement("p");
        fetch("https://icanhazdadjoke.com/slack").then(data => data.json().then(d => head.innerHTML = (d["attachments"]["0"]["text"])));
        head.style.margin = "20px";

        var button = document.createElement("button");
        button.innerHTML = "New Joke";
        button.style.position = "absolute";
        button.style.right = "2px";
        button.style.bottom = "2px";
        const temp = head;
        button.onclick = function() {
            fetch("https://icanhazdadjoke.com/slack").then(data => data.json().then(d => temp.innerHTML = (d["attachments"]["0"]["text"])));
        }
        base.appendChild(button);
        base.appendChild(head);

        this.setBase(base);
    }
    dadjoke.name = "Dad Joke";
    dadjoke.tag = "Playful";
    dadjoke.update = function() {}
    return new Case(dadjoke);
});
// Weather Conditions
creators.push(function() {
    var weather = new Widget();
    weather.build = function() {
        var head = document.createElement("h1");
        head.style.textAlign = "center";
        fetch("https://freegeoip.app/json/").then(loc => loc.json().then(l => fetch("https://weather-react-api.vercel.app/forecast/coords/"+l["latitude"]+","+l["longitude"]).then(weather => weather.json().then(w => head.innerHTML = w["currently"]["summary"]))))
        this.setBase(head);
    }
    weather.name = "Weather Conditions";
    weather.tag = "Weather";
    weather.update = function() {}
    return new Case(weather);
});