function Widget() {
    this.base = document.createElement("h3");
    this.base.innerHTML = "Welcome";
    this.update = function() {
        console.log("Undefined Update");
    };
}
var w = new Widget();
w.update = function() {
    console.log("Hello");
}
var q = new Widget();
q.update = function() {
    console.log("Hey");
}
widgets[0] = new Case(w);
widgets[1] = new Case(q);