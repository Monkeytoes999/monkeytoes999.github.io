async function callCryptoAPI() {
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    let data = await response.json()
    return data;
}

async function cryptoJson() {
    return await callCryptoAPI().then(data => {return changeCryptoHtml("Bitcoin Price: $" + data["0"]["current_price"] + "\n" 
        + "Ethereum Price: $" + data["1"]["current_price"] + "\n"
        + "Dogecoin Price: $" + data["11"]["current_price"] )});
}

function changeCryptoHtml(content) {
    var par = content.split("\n")
    var base = document.createElement("div");
    base.classList.add("widget");

    var head = document.createElement("h3");
    head.innerHTML = "Crypto Prices";
    base.appendChild(head);

    for (let i = 0; i < par.length; i++){
        var text = document.createElement("p");
        text.innerHTML = par[i];
        base.appendChild(text);
    }

    return base;
}