// Owl House
creators.push(function() {
    var dadjoke = new Widget();
    dadjoke.build = function() {
        var base = document.createElement("div");
        var head = document.createElement("p");
        var url = "https://api.tvmaze.com/shows/35073";
        fetch(url).then(data => data.json().then(d => head.innerHTML = (d["summary"])));
        head.style.margin = "20px";

        base.appendChild(head);

        this.setBase(base);
    }
    dadjoke.name = "Owl House";
    dadjoke.tag = "Playful";
    dadjoke.update = function() {}
    return new Case(dadjoke);
});