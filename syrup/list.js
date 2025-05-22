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
        head.id = this.id;
        head.style.textAlign = "center";
        try {
            head.innerHTML = weatherdbi["currentConditions"]["comment"];
        } catch {
            head.innerHTML = "Sunny";
        }
        this.setBase(head);
    }
    weather.name = "Weather Conditions";
    weather.tag = "Weather";
    weather.update = function() {
        try {
            document.getElementById(this.id).innerHTML = weatherdbi["currentConditions"]["comment"];
        } catch {
            document.getElementById(this.id).innerHTML = "Sunny";
        }
    }
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
    var main = new Widget();
    main.build = function() {
        var base = document.createElement("div");
        base.style.padding = "4px";
        base.style.lineHeight = "0.75";
        base.style.textAlign = "center";
        var titl = document.createElement("b");
        var head = document.createElement("b");
        var des = document.createElement("p");
        var tim = document.createElement("p");

        var showName = "the+owl+house";

        var url = "https://api.tvmaze.com/singlesearch/shows?q=" + showName;
        fetch(url)
            .then(data => data.json()
            .then(d => titl.innerHTML = d["name"]));
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

        base.appendChild(titl);
        base.appendChild(document.createElement("br"));
        base.appendChild(head);
        base.appendChild(des);
        base.appendChild(tim);

        this.setBase(base);
    }
    main.name = "Owl House";
    main.tag = "Culture";
    main.update = function() {}
    return new Case(main);
});
// Molly McGee
creators.push(function() {
    var main = new Widget();
    main.build = function() {
        var base = document.createElement("div");
        base.style.padding = "4px";
        base.style.lineHeight = "0.75";
        base.style.textAlign = "center";
        var titl = document.createElement("b");
        var head = document.createElement("b");
        var des = document.createElement("p");
        var tim = document.createElement("p");

        var showName = "the+ghost+and+molly+mcgee";

        var url = "https://api.tvmaze.com/singlesearch/shows?q=" + showName;
        fetch(url)
            .then(data => data.json()
            .then(d => titl.innerHTML = d["name"]));
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

        base.appendChild(titl);
        base.appendChild(document.createElement("br"));
        base.appendChild(head);
        base.appendChild(des);
        base.appendChild(tim);

        this.setBase(base);
    }
    main.name = "Molly McGee";
    main.tag = "Culture";
    main.update = function() {}
    return new Case(main);
});
// Data
creators.push(function() {
    var main = new Widget();
    main.build = function() {
        var head = document.createElement("p");
        head.style.margin = "20px";
        head.style.whiteSpace = "pre";
        var wl = widgets.length;
        var x = globalX + "/" + window.innerWidth;
        var y = globalY + "/" + window.innerHeight;
        var len = document.cookie.length;
        var txt = "Widgets: " + wl + "\nMouse-X: " + x + "\nMouse-Y: " + y + "\nCookie Size: " + len;
        head.innerHTML = txt;
        head.id = this.id;

        this.setBase(head);
    }

    main.name = "Data";
    main.update = function() {
        var wl = widgets.length;
        var x = globalX + "/" + window.innerWidth;
        var y = globalY + "/" + window.innerHeight;
        var len = document.cookie.length;
        var txt = "Widgets: " + wl + "\nMouse-X: " + x + "\nMouse-Y: " + y + "\nCookie Size: " + len;
        document.getElementById(this.id).innerHTML = txt;
    }
    return new Case(main);
});
// Is it even?
creators.push(function() {
    var even = new Widget();
    even.build = function() {
        var base = document.createElement("div");
        var num = Math.round(Math.random()*1000);
        var head = document.createElement("b");
        var ad = document.createElement("p");
        head.innerHTML = num + (num%2==0 ? " is even" : " is not even");
        base.style.textAlign = "center";
        fetch("https://api.isevenapi.xyz/api/iseven/2")
            .then(data => data.json()
            .then(d => ad.innerHTML = d["ad"]));
        base.append(head);
        base.append(ad);
        this.setBase(base);
    }

    even.name = "Is it even?";
    even.tag = "Playful";
    even.update = function() {}
    return new Case(even);
});
// Welcome Visitor
creators.push(function() {
    var welcome = new Widget();
    welcome.build = function() {
        var head = document.createElement("h2");
        var num = Math.round(Math.random()*1000);
        head.innerHTML = "Welcome Daily Visitor #" + num;
        head.style.textAlign = "center";

        this.setBase(head);
    }

    welcome.name = "Welcome Visitor";
    welcome.update = function() {
    }
    return new Case(welcome);
});
// Weather Icon
creators.push(function() {
    var weather = new Widget();
    weather.build = function() {
            var base = document.createElement("div");
            base.style.textAlign = "center";
            var head = document.createElement("img");
            head.id = this.id;
            head.style.width = "auto";
            head.style.height = "100%";
            head.style.verticalAlign = "middle";
            try {
                head.src = weatherdbi["currentConditions"]["iconURL"];
            } catch (error) {
                head.src = "https://ssl.gstatic.com/onebox/weather/64/sunny.png";
            }
            base.appendChild(head)
            this.setBase(base);
    }
    weather.name = "Weather Icon";
    weather.tag = "Weather";
    weather.update = function() {
        try {
            document.getElementById(this.id).src = weatherdbi["currentConditions"]["iconURL"];
        } catch (error) {
            document.getElementById(this.id).src = "https://ssl.gstatic.com/onebox/weather/64/sunny.png";
        }
    }
    return new Case(weather);
});
// Temperatures (°F)
creators.push(function() {
    var weather = new Widget();
    weather.build = function() {
        var head = document.createElement("p");
        head.id = this.id;
        head.style.whiteSpace = "pre";
        head.style.padding = "5px";
        head.style.textAlign = "right";
        try {
            head.innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>" + weatherdbi["currentConditions"]["temp"]["f"] + "°F</td></tr> <tr> <td><b>Daily High:</b></td> <td>" + weatherdbi["next_days"]["0"]["max_temp"]["f"] + "°F</td></tr> <tr> <td><b>Daily Low:</b></td> <td>" + weatherdbi["next_days"]["0"]["min_temp"]["f"] + "°F</td></tr></table>";
        } catch {
            head.innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>58°F</td></tr> <tr> <td><b>Daily High:</b></td> <td>60°F</td></tr> <tr> <td><b>Daily Low:</b></td> <td>41°F</td></tr></table>";
        }
        this.setBase(head);
    }
    weather.name = "Temperatures (°F)";
    weather.tag = "Weather";
    weather.update = function() {
        try {
            document.getElementById(this.id).innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>" + weatherdbi["currentConditions"]["temp"]["f"] + "°F</td></tr> <tr> <td><b>Daily High:</b></td> <td>" + weatherdbi["next_days"]["0"]["max_temp"]["f"] + "°F</td></tr> <tr> <td><b>Daily Low:</b></td> <td>" + weatherdbi["next_days"]["0"]["min_temp"]["f"] + "°F</td></tr></table>";
        } catch {
            document.getElementById(this.id).innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>58°F</td></tr> <tr> <td><b>Daily High:</b></td> <td>60°F</td></tr> <tr> <td><b>Daily Low:</b></td> <td>41°F</td></tr></table>";
        }
    }
    return new Case(weather);
});
// Temperatures (°C)
creators.push(function() {
    var weather = new Widget();
    weather.build = function() {
        var head = document.createElement("p");
        head.id = this.id;
        head.style.whiteSpace = "pre";
        head.style.padding = "5px";
        head.style.textAlign = "right";
        try {
            head.innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>" + weatherdbi["currentConditions"]["temp"]["c"] + "°C</td></tr> <tr> <td><b>Daily High:</b></td> <td>" + weatherdbi["next_days"]["0"]["max_temp"]["c"] + "°C</td></tr> <tr> <td><b>Daily Low:</b></td> <td>" + weatherdbi["next_days"]["0"]["min_temp"]["c"] + "°C</td></tr></table>";
        } catch {
            head.innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>14°C</td></tr> <tr> <td><b>Daily High:</b></td> <td>16°C</td></tr> <tr> <td><b>Daily Low:</b></td> <td>5°C</td></tr></table>";
        }
        this.setBase(head);
    }
    weather.name = "Temperatures (°C)";
    weather.tag = "Weather";
    weather.update = function() {
        try {
            document.getElementById(this.id).innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>" + weatherdbi["currentConditions"]["temp"]["c"] + "°C</td></tr> <tr> <td><b>Daily High:</b></td> <td>" + weatherdbi["next_days"]["0"]["max_temp"]["c"] + "°C</td></tr> <tr> <td><b>Daily Low:</b></td> <td>" + weatherdbi["next_days"]["0"]["min_temp"]["c"] + "°C</td></tr></table>";
        } catch {
            document.getElementById(this.id).innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>14°C</td></tr> <tr> <td><b>Daily High:</b></td> <td>16°C</td></tr> <tr> <td><b>Daily Low:</b></td> <td>5°C</td></tr></table>";
        }
    }
    return new Case(weather);
});
// Temperatures (K)
creators.push(function() {
    var weather = new Widget();
    weather.build = function() {
        var head = document.createElement("p");
        head.id = this.id;
        head.style.whiteSpace = "pre";
        head.style.padding = "5px";
        head.style.textAlign = "right";
        try {
            head.innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>" + (parseInt(weatherdbi["currentConditions"]["temp"]["c"])+273.15) + " K</td></tr> <tr> <td><b>Daily High:</b></td> <td>" + (parseInt(weatherdbi["next_days"]["0"]["max_temp"]["c"])+273.15) + " K</td></tr> <tr> <td><b>Daily Low:</b></td> <td>" + (parseInt(weatherdbi["next_days"]["0"]["min_temp"]["c"])+273.15) + " K</td></tr></table>";
        } catch {
            head.innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>287.15 K</td></tr> <tr> <td><b>Daily High:</b></td> <td>289.15 K</td></tr> <tr> <td><b>Daily Low:</b></td> <td>278.15 K</td></tr></table>";
        }
        this.setBase(head);
    }
    weather.name = "Temperatures (K)";
    weather.tag = "Weather";
    weather.update = function() {
        try {
            document.getElementById(this.id).innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>" + (parseInt(weatherdbi["currentConditions"]["temp"]["c"])+273.15) + " K</td></tr> <tr> <td><b>Daily High:</b></td> <td>" + (parseInt(weatherdbi["next_days"]["0"]["max_temp"]["c"])+273.15) + " K</td></tr> <tr> <td><b>Daily Low:</b></td> <td>" + (parseInt(weatherdbi["next_days"]["0"]["min_temp"]["c"])+273.15) + " K</td></tr></table>";
        } catch {
            document.getElementById(this.id).innerHTML = "<table> <tr> <td><b>Current:</b></td> <td>287.15 K</td></tr> <tr> <td><b>Daily High:</b></td> <td>289.15 K</td></tr> <tr> <td><b>Daily Low:</b></td> <td>278.15 K</td></tr></table>";
        }
    }
    return new Case(weather);
});
// Chance of rain (next hour)
creators.push(function() {
    var weather = new Widget();
    weather.build = function() {
        var head = document.createElement("h1");
        head.id = this.id;
        head.style.textAlign = "center";
        try {
            head.innerHTML = weatherdbi["currentConditions"]["precip"];
        } catch {
            head.innerHTML = "0%";
        }
        this.setBase(head);
    }
    weather.name = "Hourly chance of rain";
    weather.tag = "Weather";
    weather.update = function() {
        try {
            document.getElementById(this.id).innerHTML = weatherdbi["currentConditions"]["precip"];
        } catch {
            document.getElementById(this.id).innerHTML = "0%";
        }
    }
    return new Case(weather);
});
creators.push(function() {
    var arg = new Widget();
    arg.build = function(){
        var head = document.createElement("h1");
        head.id = this.id;
        head.style.textAlign = "center";
        head.innerHTML = "Please refer to the Masterdoc instead."
        this.setBase(head);
    }
    arg.name = "Latest of 135";
    arg.tag = "News";
    arg.update = function() {}
    return new Case(arg);
});
// Miraculous
creators.push(function() {
    var main = new Widget();
    main.build = function() {
        var base = document.createElement("div");
        base.style.padding = "4px";
        base.style.lineHeight = "0.75";
        base.style.textAlign = "center";
        var titl = document.createElement("b");
        var head = document.createElement("b");
        var des = document.createElement("p");
        var tim = document.createElement("p");

        var showName = "miraculous";

        var url = "https://api.tvmaze.com/singlesearch/shows?q=" + showName;
        fetch(url)
            .then(data => data.json()
            .then(d => titl.innerHTML = d["name"]));
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

        base.appendChild(titl);
        base.appendChild(document.createElement("br"));
        base.appendChild(head);
        base.appendChild(des);
        base.appendChild(tim);

        this.setBase(base);
    }
    main.name = "Molly McGee";
    main.tag = "Culture";
    main.update = function() {}
    return new Case(main);
});