export class GamePiece {
    constructor(y, x) {
        this.y = y;
        this.x = x;
        this.type = "Tile";
        this.occupant = null;
    }
}

export class Volcano {
    width = 2;
    height = 2;
    passable = false;
}

export class Tile {
    width = 1;
    height = 1;
    passable = true;
}

export class Slayer {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 1;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = 1;
    }
    name = "Slayer";
}

export class Scout {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 10;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = 2;
    }
    name = "Scout";
}

export class Dwarf {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 1;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = 3;
    }
    name = "Dwarf";
}

export class Elf {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 1;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = 4;
    }
    name = "Elf";
}

export class Beast {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 1;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = 5;
    }
    name = "Beast";
}

export class Sorceress {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 1;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = 6;
    }
    name = "Sorceress";
}

export class BeastRider {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 2;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = 7;
    }
    name = "BeastRider";
}

export class Knight {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 2;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = 8;
    }
    name = "Knight";
}

export class Mage {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 1;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = 9;
    }
    name = "Mage";
}

export class Dragon {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 1;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = 10;
    }
    name = "Dragon";
}

export class Trap {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 0;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = 0;
    }
    name = "Trap";
}

export class Flag {
    constructor (team, id) {
        this.y = -1;
        this.x = -1;
        this.speed = 0;
        this.team = team;
        this.captured = false;
        this.enchanted = false;
        this.id = id;
        this.power = -1;
    }
    name = "Flag";
}