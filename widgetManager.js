/**
 * Gets relevant API information.
 * @returns data for the API call
 */
async function fetchAPI() {
    let response = await fetch("api");
    let data = await response.json()
    return data;
} // fetchAPI

/**
 * This logs API calls.
 */
function apiName() {
    console.log(fetchTest().then(data => console.log(data)));
} // apiName

/**
 * Assists in widget selection
 * @param {String} name 
 * @returns the widget to be applied.
 */
async function getWidget(name) {
    var output;
    if (name == wName[0]) {
        output = addDemo();
    } else if (name == wName[1]) {
        output = newsJson();
    } else if (name == wName[2]) {
        output = await covidJson();
    } else if (name == wName[3]) { 
        output = await cryptoJson();
    } else if (name == wName[4]) { 
        output = await weatherJson();
    } else if (name == wName[5]) {
        output = await dadJokesJson();
    } // if
    return output;
} // getWidget