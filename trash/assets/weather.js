async function callW() {
    let response = await fetch(process.env.WEATHER_API);
    let data = await response.json()
    return data;
}

async function weatherJson() {
    return await callW().then(data => {return changeWeHtml("Right Now: " + data["weather"][0]["main"] + " " + data["main"]["temp"] + " F" + "\nFeels like " + data["main"]["feels_like"] + " F" + "\nHumidity: " + data["main"]["humidity"])});
}

function changeWeHtml(content) {
    var par = content.split("\n")
    var base = document.createElement("div");
    base.classList.add("widget");
    var head = document.createElement("h3");
    head.innerHTML = "Weather";
    base.appendChild(head);
    for (let i = 0; i < par.length; i++){
        var text = document.createElement("p");
        text.innerHTML = par[i];
        base.appendChild(text);
    }
    return base;
}