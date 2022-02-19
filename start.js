addDemo();

async function fetchAPI() {
    let response = await fetch("api");
    let data = await response.json()
    return data;
}

function apiName() {
    console.log(fetchTest().then(data => console.log(data)));
}