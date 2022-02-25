function weatherAPIs() {
    fetch("https://freegeoip.app/json/")
    .then(loc => loc.json()
        .then(l => {
            fetch("https://weatherdbi.herokuapp.com/data/weather/"+l["city"])
            .then(wdbi => wdbi.json()
            .then(wdb => weatherdbi = wdb));
            console.log("owo");

            fetch("http://www.7timer.info/bin/api.pl?lon=" + l["lon"] + "7&lat=" + l["lat"] + "&product=civil&output=json")
            .then(cv => cv.json()
            .then(cvw => civil = cvw));
            fetch("http://www.7timer.info/bin/api.pl?lon=" + l["lon"] + "7&lat=" + l["lat"] + "&product=civillight&output=json")
            .then(cvl => cvl.json()
            .then(cvlw => civillight = cvlw));
            fetch("http://www.7timer.info/bin/api.pl?lon=" + l["lon"] + "7&lat=" + l["lat"] + "&product=astro&output=json")
            .then(as => as.json()
            .then(asw => astro = asw));
            fetch("http://www.7timer.info/bin/api.pl?lon=" + l["lon"] + "7&lat=" + l["lat"] + "&product=two&output=json")
            .then(me => me.json()
            .then(mew => meteo = mew));
        })
    );
}