var welcome = new Widget();
welcome.build = function() {
    var head = document.createElement("h1");
    head.innerHTML = "Welcome";
    head.style.textAlign = "center";

    this.setBase(head);
}
welcome.update = function() {
}
widgets[0] = new Case(welcome);

var clock = new Widget();
clock.build = function() {
    var main = document.createElement("p");
    main.innerHTML = new Date();
    main.id = this.id;

    this.setBase(main);
}
clock.update = function() {
    document.getElementById(this.id).innerHTML = new Date();
}
widgets[1] = new Case(clock);