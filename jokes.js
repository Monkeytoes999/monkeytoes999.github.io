async function callDadJokesAPI() {
    let response = await fetch("https://icanhazdadjoke.com/slack");
    let data = await response.json();
    return data;
}

async function dadJokesJson() {
    return await callDadJokesAPI().then(data => {return changeDadHtml(data["attachments"]["0"]["text"])});
}

function changeDadHtml(content) {
    var par = content.split("\n")
    var base = document.createElement("div");
    base.classList.add("widget");

    for (let i = 0; i < par.length; i++){
        var text = document.createElement("p");
        text.innerHTML = par[i];
        base.appendChild(text);
    }
    var button = document.createElement("button");
    button.innerHTML = "New Joke";
    button.onclick = async function() {
        await dadJokesJson();
    }
    base.appendChild(button);

    return base;
}