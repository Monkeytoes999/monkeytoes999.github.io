var creators = [];
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
    clock.name = "Simple";
    clock.update = function() {
        var d = new Date();
        document.getElementById(this.id).innerHTML = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getUTCFullYear();
    }
    return new Case(clock);
});