async function fetchAPI() {
    let response = await fetch("api");
    let data = await response.json()
    return data;
}

function apiName() {
    console.log(fetchTest().then(data => console.log(data)));
}

async function getWidget(name) {
    var output;
    if (name == wName[0]) {
        output = addDemo();
    } else if (name == wName[1]) {
        output = newsJson();
    } else if (name == wName[2]) {
        output = await covidJson();
    }
    return output;
}