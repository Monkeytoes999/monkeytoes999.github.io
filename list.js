function welcome() {
    var welcome = new Widget();
    welcome.build = function() {
        var head = document.createElement("h1");
        head.innerHTML = "Welcome";
        head.style.textAlign = "center";
    
        this.setBase(head);
    }

    welcome.type = "Welcome";
    welcome.update = function() {
    }
    widgets.push(new Case(welcome));
    pos.push([]);
}

function posWelcome(x,y) {
    var welcome = new Widget();
    welcome.build = function() {
        var head = document.createElement("h1");
        head.innerHTML = "Welcome";
        head.style.textAlign = "center";
    
        this.setBase(head);
    }

    welcome.type = "Welcome";
    welcome.update = function() {
    }
    widgets.push(new Case(welcome));
    pos.push([x, y]);
}

function clock() {
    var clock = new Widget();
    clock.build = function() {
        var main = document.createElement("p");
        main.style.textAlign = "center";
        main.innerHTML = new Date();
        main.id = this.id;
    
        this.setBase(main);
    }
    clock.type = "Clock";
    clock.update = function() {
        document.getElementById(this.id).innerHTML = new Date();
    }
    widgets.push(new Case(clock));
    pos.push([]);
}

function posClock(x, y) {
    var clock = new Widget();
    clock.build = function() {
        var main = document.createElement("p");
        main.style.textAlign = "center";
        main.innerHTML = new Date();
        main.id = this.id;
    
        this.setBase(main);
    }
    clock.type = "Clock";
    clock.update = function() {
        document.getElementById(this.id).innerHTML = new Date();
    }
    widgets.push(new Case(clock));
    pos.push([x,y]);
}

welcome();
clock();
clock();
clock();
clock();
welcome();
welcome();
posWelcome(540,420);
posClock(540,520);
