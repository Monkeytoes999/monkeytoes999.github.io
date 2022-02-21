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
    widgets.push(welcome);
}
welcome();

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
    widgets.push(clock);
}
clock();
