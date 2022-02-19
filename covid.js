/**
 * Queries a current Covid API and returns current data 
 * @returns a JSON file that holds current Covid data
 */
async function callCovidAPI() {
    let response = await fetch("https://api.covidactnow.org/v2/country/US.json?apiKey=dd1370169b8c4397b1ffc66b629b03da");
    let data = await response.json()
    return data;
}

/**
 * Procresses the JSON data to find the relevant current data
 * @returns Information about the current covid data in the US
 */
async function covidJson() {
    return await callCovidAPI().then(data => {return changeHtml("<h3>United States Daily Covid Report</h3>\nDaily reported cases: " + data["actuals"]["newCases"] + "\nDaily reported deaths: " + data["actuals"]["newDeaths"] + "\nLast updated: " + data["lastUpdatedDate"])});
}

/**
 * Creates HTML data that will display the Covid data in a legible way
 * @param {Covid data} content 
 * @returns a HTML widget
 */
function changeHtml(content) {
    var par = content.split("\n")
    var base = document.createElement("div");
    base.style.lineHeight = 1;
    base.classList.add("widget");
    for (let i = 0; i < par.length; i++){
        var text = document.createElement("p");
        text.innerHTML = par[i];
        base.appendChild(text);
    }
    return base;
}