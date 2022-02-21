function Widget() {
    this.base = document.createElement("div");
    this.id = "default";
    this.setBase = function(input) {
        this.base = input;
    }
    this.update = function() {
        console.log("Undefined Update Function");
    }
    this.build = function() {
        console.log("Undefined Build Function");
    }
    this.randomId = function() {
        var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        this.id = "";
        for (var i = 0; i < 20; i++) {
            var temp = Math.floor(characters.length*Math.random() - 1);
            this.id = this.id + characters.substring(temp, temp + 1);
        }
    }
    this.randomId();
}