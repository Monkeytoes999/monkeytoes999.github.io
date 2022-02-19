async function fetchAPI() {
    let response = await fetch("api");
    let data = await response.json()
    return data;
}

function apiName() {
    console.log(fetchTest().then(data => console.log(data)));
}


function showWidget(name, position) {
    shown[position] = name;
    var temp = document.getElementById("widgetList");
    while (temp.firstChild) {
        temp.removeChild(temp.firstChild);
    }
    for (var i = 0; i < 4; i++) {
        makeWidget(i);
    }
}
function makeWidget(position) {
    setTimeout(() => { 
        var temp = shown[position];
        if (temp == widgetList[0]) {
            addDemo();
        } else if (temp == widgetList[1]) {
            newsJson();
        }   
    }, 50*position);
}