// Owl House
creators.push(function() {
    var dadjoke = new Widget();
    dadjoke.build = function() {
        var base = document.createElement("div");
        base.style.padding = "4px";
        base.style.lineHeight = "0.75";
        base.style.textAlign = "center";
        var head = document.createElement("b");
        var des = document.createElement("p");
        var tim = document.createElement("p");
        var url = "https://api.tvmaze.com/shows/35073";
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => head.innerHTML = (e["name"])))));
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => des.innerHTML = (e["summary"])))));
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => tim.innerHTML = new Date(new Date(e["airdate"]) - new Date()).getUTCDate() + " days remaining"))));

        base.appendChild(head);
        base.appendChild(des);
        base.appendChild(tim);

        this.setBase(base);
    }
    dadjoke.name = "Owl House";
    dadjoke.tag = "Culture";
    dadjoke.update = function() {}
    return new Case(dadjoke);
});
// Molly McGee
creators.push(function() {
    var dadjoke = new Widget();
    dadjoke.build = function() {
        var base = document.createElement("div");
        base.style.padding = "4px";
        base.style.lineHeight = "0.75";
        base.style.textAlign = "center";
        var head = document.createElement("b");
        var des = document.createElement("p");
        var tim = document.createElement("p");
        var url = "https://api.tvmaze.com/shows/52771";
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => head.innerHTML = (e["name"])))));
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => des.innerHTML = (e["summary"])))));
        fetch(url)
            .then(data => data.json()
            .then(d => fetch(d["_links"]["nextepisode"]["href"])
            .then(ep => ep.json()
            .then(e => tim.innerHTML = new Date(new Date(e["airdate"]) - new Date()).getUTCDate() + " days remaining"))));

        base.appendChild(head);
        base.appendChild(des);
        base.appendChild(tim);

        this.setBase(base);
    }
    dadjoke.name = "Molly McGee";
    dadjoke.tag = "Culture";
    dadjoke.update = function() {}
    return new Case(dadjoke);
});