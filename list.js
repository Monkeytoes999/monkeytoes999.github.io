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

if (document.cookie.includes("types") == false){
    welcome();
    clock();
} else {
    cookies = document.cookie.split("; ");
    cookies[cookies.length] = cookies[cookies.length-1].substring(0, cookies[cookies.length].length-1);
    let i = 0;
    for (i = 0; !cookies[i].includes("types="); i++);
    types = cookies[i].substring(6).split(',');
    for (i = 0; !cookies[i].includes("xpos="); i++);
    x = cookies[i].substring(5).split(',');
    for (i = 0; !cookies[i].includes("ypos="); i++);
    y = cookies[i].substring(5).split(',');
    for (i=0; i < types.length; i++){
        switch(types[i]){
            case "Welcome":
                posWelcome(x[i], y[i]);
                break;
            case "Clock":
                posClock(x[i], y[i]);
                break;
        }
    }
}
