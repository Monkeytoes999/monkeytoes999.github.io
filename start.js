makeSidebar();
async function manAddWidget(name, position) {
    var temp = document.getElementById(widgetLocations[position]);
    temp.appendChild(await getWidget(name));
}
manAddWidget("Demo", 0);
manAddWidget("Demo", 1);
manAddWidget("News", 2);
manAddWidget("Covid", 3);