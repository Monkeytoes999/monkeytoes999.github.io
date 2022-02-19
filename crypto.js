async function callCryptoAPI() {
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    let data = await response.json()
    return data;
}

async function cryptoJson() {
    return await callCryptoAPI().then(data => {return changeCryptHtml("Bitcoin Price: " + data["0"]["current_price"] + "\n" 
        + "Ethereum Price: " + data["1"]["current_price"])});
}

function changeCryptoHtml(content) {
    var par = content.split("\n")
    var base = document.createElement("div");
    base.classList.add("widget");

    for (let i = 0; i < par.length; i++){
        var text = document.createElement("a");
        text.innerHTML = par[i];
        text.href = par[i+1];
        i++;
        base.appendChild(text);
        var lineBreak = document.createElement("br");
        base.appendChild(lineBreak);
    }

    return base;
}