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