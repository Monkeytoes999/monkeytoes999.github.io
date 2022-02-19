async function callW() {
    let response = await fetch("api.openweathermap.org/data/2.5/weather?lat={33.957409}&lon={-83.376801}&appid={0720fc8331f4175cbeb36cf226c9f876");
    let data = await response.json()
    return data;
}

async function weatherJson() {
    return await callW().then(data => {return changeHtml("Right Now: " + data["weather"]["main"] + data["main"]["temp"] + "\nFeels Like " + data["main"]["feels_like"] + "\nHumidity: " + data["main"]["humidity"] + "\n\n" + data["name"] + " " + data["sys"]["country"])});
}

function changeHtml(content) {
    var par = content.split("\n")
    var base = document.createElement("div");
    base.classList.add("widget");
    for (let i = 0; i < par.length; i++){
        var text = document.createElement("p");
        text.innerHTML = par[i];
        base.appendChild(text);
    }
    return base;
}