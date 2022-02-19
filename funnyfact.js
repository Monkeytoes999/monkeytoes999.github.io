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

    var head = document.createElement("h3");
    head.innerHTML = "Jokes";
    base.appendChild(head);

    for (let i = 0; i < par.length; i++){
        var text = document.createElement("p");
        text.innerHTML = par[i];
        base.appendChild(text);
    }
    var button = document.createElement("button");
    button.innerHTML = "New Joke";
    button.onclick = async function() {
        console.log("cheese")
        data = await callDadJokesAPI();
        var par = data["attachments"]["0"]["text"].split("\n")
        while (base.childElementCount > 1){
            base.removeChild(base.firstChild);
        }
        temp = base.firstChild;
        base.removeChild(base.firstChild);

        var head = document.createElement("h3");
        head.innerHTML = "Jokes";
        base.appendChild(head); 

        for (let i = 0; i < par.length; i++){
            var text = document.createElement("p");
            text.innerHTML = par[i];
            base.appendChild(text);
        }

        base.appendChild(temp);

    }
    base.appendChild(button);

    return base;
}