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
        main.innerHTML = d.getHours() + ":" + d.getMinutes();
        main.id = this.id;

        this.setBase(main);
    }
    clock.name = "Simple Clock";
    clock.update = function() {
        var d = new Date();
        document.getElementById(this.id).innerHTML = d.getHours() + ":" + d.getMinutes();
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
    clock.update = function() {
        var d = new Date();
        document.getElementById(this.id).innerHTML = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getUTCFullYear();
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
    clock.update = function() {
        var d = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        document.getElementById(this.id).innerHTML = "Happy " + days[d.getDay()] + "!";
    }
    return new Case(clock);
});