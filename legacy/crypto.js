/**
 * Calls CoinGecko to get lastest prices on crypto currency.
 * @returns a JSON object containing data on crypto
 */
async function callCryptoAPI() {
    let response = await fetch(process.env.CRYPTO_API);
    let data = await response.json()
    return data;
} // callCryptoAPI

/**
 * Calls the CoinGecko API and parses the JSON it returns.
 * @returns a string containg bitcoin, ethereum, and dogecoin prices
 */
async function cryptoJson() {
    return await callCryptoAPI().then(data => {return changeCryptoHtml("Bitcoin Price: $" + data["0"]["current_price"] + "\n" 
        + "Ethereum Price: $" + data["1"]["current_price"] + "\n"
        + "Dogecoin Price: $" + data["11"]["current_price"] )});
} // cryptoJson

/**
 * Creates a crypto widget by parsing a string.
 * @param {*} content a string containing the prices of various crypto currencies
 * @returns a crypto widget
 */
function changeCryptoHtml(content) {
    var par = content.split("\n")
    var base = document.createElement("div");
    base.classList.add("widget");
    // Creates the widget title
    var head = document.createElement("h3");
    head.innerHTML = "Crypto Prices";
    base.appendChild(head);
    // Loops through the input to separate the different crypto
    for (let i = 0; i < par.length; i++){
        var text = document.createElement("p");
        text.innerHTML = par[i];
        base.appendChild(text);
    } // for
    return base;
} // changeCryptoHtml