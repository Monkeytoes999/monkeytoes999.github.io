var creators = [];
var tags = ["Time","Other"];
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
creators.push(function() {
    var dadjoke = new Widget();
    dadjoke.build = function() {
        var head = document.createElement("h1");
        fetch("https://icanhazdadjoke.com/slack").then(data => data.json().then(d => head.innerHTML = (d["attachments"]["0"]["text"])))        
        head.style.textAlign = "center";
        head.style.fontSize = "18px";
        this.setBase(head);
    }
    dadjoke.name = "Dad Joke";
    dadjoke.update = function() {}
    return new Case(dadjoke);
});