var creators = [];
var tags = ["Time","News","Weather","Playful","Culture","Other"];
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
// Default Clock
creators.push(function() {
    var clock = new Widget();
    clock.build = function() {
        var main = document.createElement("p");
        main.style.textAlign = "center";
        main.innerHTML = new Date();
        main.id = this.id;

        this.setBase(main);
    }
    clock.name = "Default Clock";
    clock.tag = "Time";
    clock.update = function() {
        document.getElementById(this.id).innerHTML = new Date();
    }
    return new Case(clock);
});
// Simple Clock
creators.push(function() {
    var clock = new Widget();
    clock.build = function() {
        var main = document.createElement("h1");
        main.style.textAlign = "center";
        var d = new Date();
        var txt = (((d.getHours() + 11) % 12) + 1) + ":";
        if (d.getMinutes().toString().length < 2) {
            txt = txt + "0" + d.getMinutes();
        } else {
            txt = txt + d.getMinutes();
        }
        if (d.getHours() >= 13) {
            txt = txt + "PM";
        } else {
            txt = txt + "AM";
        }
        main.innerHTML = txt;
        main.id = this.id;

        this.setBase(main);
    }
    clock.name = "Simple Clock";
    clock.tag = "Time";
    clock.update = function() {
        var d = new Date();
        var txt = (((d.getHours() + 11) % 12) + 1) + ":";
        if (d.getMinutes().toString().length < 2) {
            txt = txt + "0" + d.getMinutes();
        } else {
            txt = txt + d.getMinutes();
        }
        if (d.getHours() >= 13) {
            txt = txt + "PM";
        } else {
            txt = txt + "AM";
        }
        document.getElementById(this.id).innerHTML = txt;
    }
    return new Case(clock);
});
// 24 Hour Clock
creators.push(function() {
    var clock = new Widget();
    clock.build = function() {
        var main = document.createElement("h1");
        main.style.textAlign = "center";
        var d = new Date();
        var txt = d.getHours() + ":";
        if (d.getMinutes().toString().length < 2) {
            txt = txt + "0" + d.getMinutes();
        } else {
            txt = txt + d.getMinutes();
        }
        main.innerHTML = txt;
        main.id = this.id;

        this.setBase(main);
    }
    clock.name = "24 Hour Clock";
    clock.tag = "Time";
    clock.update = function() {
        var d = new Date();
        var txt = d.getHours() + ":";
        if (d.getMinutes().toString().length < 2) {
            txt = txt + "0" + d.getMinutes();
        } else {
            txt = txt + d.getMinutes();
        }
        document.getElementById(this.id).innerHTML = txt;
    }
    return new Case(clock);
});
// Simple Date
creators.push(function() {
    var clock = new Widget();
    clock.build = function() {
        var main = document.createElement("h1");
        main.style.textAlign = "center";
        var d = new Date();
        main.innerHTML = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getUTCFullYear();
        main.id = this.id;

        this.setBase(main);
    }
    clock.name = "Simple Date";
    clock.tag = "Time";
    clock.update = function() {
        var d = new Date();
        document.getElementById(this.id).innerHTML = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getUTCFullYear();
    }
    return new Case(clock);
});
// Simon Date
creators.push(function() {
    var clock = new Widget();
    clock.build = function() {
        var main = document.createElement("h1");
        main.style.textAlign = "center";
        var d = new Date();
        var txt = d.getUTCFullYear() + "-"
        if ((d.getUTCMonth() + 1).toString().length < 2) {
            txt = txt + "0" + (d.getUTCMonth() + 1);
        } else {
            txt = txt + (d.getUTCMonth() + 1);
        }
        txt = txt + "-";
        if (d.getUTCDate().toString().length < 2) {
            txt = txt + "0" + d.getUTCDate();
        } else {
            txt = txt + d.getUTCDate();
        }
        main.innerHTML = txt;
        main.id = this.id;

        this.setBase(main);
    }
    clock.name = "Simon Date";
    clock.tag = "Time";
    clock.update = function() {
        var d = new Date();
        var txt = d.getUTCFullYear() + "-"
        if ((d.getUTCMonth() + 1).toString().length < 2) {
            txt = txt + "0" + (d.getUTCMonth() + 1);
        } else {
            txt = txt + (d.getUTCMonth() + 1);
        }
        txt = txt + "-";
        if (d.getUTCDate().toString().length < 2) {
            txt = txt + "0" + d.getUTCDate();
        } else {
            txt = txt + d.getUTCDate();
        }
        document.getElementById(this.id).innerHTML = txt;
    }
    return new Case(clock);
});
// Standard Date
creators.push(function() {
    var clock = new Widget();
    clock.build = function() {
        var main = document.createElement("h1");
        main.style.textAlign = "center";
        var d = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        main.innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getUTCFullYear();
        main.id = this.id;

        this.setBase(main);
    }
    clock.name = "Standard Date";
    clock.tag = "Time";
    clock.update = function() {
        var d = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        document.getElementById(this.id).innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getUTCFullYear();
    }
    return new Case(clock);
});
// Daily Message
creators.push(function() {
    var clock = new Widget();
    clock.build = function() {
        var main = document.createElement("h1");
        main.style.textAlign = "center";
        var d = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        main.innerHTML = "Happy " + days[d.getDay()] + "!";
        main.id = this.id;

        this.setBase(main);
    }
    clock.name = "Daily Message";
    clock.tag = "Time";
    clock.update = function() {
        var d = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        document.getElementById(this.id).innerHTML = "Happy " + days[d.getDay()] + "!";
    }
    return new Case(clock);
});
// Owl House
creators.push(function() {
    var dadjoke = new Widget();
    dadjoke.build = function() {
        var base = document.createElement("div");
        base.style.padding = "4px";
        base.style.lineHeight = "0.75";
        base.style.textAlign = "center";
        var head = document.createElement("b");
        var des = document.createElement("p");
        var tim = document.createElement("p");
        var url = "https://api.tvmaze.com/shows/35073";
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => head.innerHTML = (e["name"])))));
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => des.innerHTML = (e["summary"])))));
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => tim.innerHTML = new Date(new Date(e["airdate"]) - new Date()).getUTCDate() + " days remaining"))));

        base.appendChild(head);
        base.appendChild(des);
        base.appendChild(tim);

        this.setBase(base);
    }
    dadjoke.name = "Owl House";
    dadjoke.tag = "Culture";
    dadjoke.update = function() {}
    return new Case(dadjoke);
});
// Molly McGee
creators.push(function() {
    var dadjoke = new Widget();
    dadjoke.build = function() {
        var base = document.createElement("div");
        base.style.padding = "4px";
        base.style.lineHeight = "0.75";
        base.style.textAlign = "center";
        var head = document.createElement("b");
        var des = document.createElement("p");
        var tim = document.createElement("p");
        var url = "https://api.tvmaze.com/shows/52771";
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => head.innerHTML = (e["name"])))));
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => des.innerHTML = (e["summary"])))));
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => tim.innerHTML = new Date(new Date(e["airdate"]) - new Date()).getUTCDate() + " days remaining"))));

        base.appendChild(head);
        base.appendChild(des);
        base.appendChild(tim);

        this.setBase(base);
    }
    dadjoke.name = "Molly McGee";
    dadjoke.tag = "Culture";
    dadjoke.update = function() {}
    return new Case(dadjoke);
});