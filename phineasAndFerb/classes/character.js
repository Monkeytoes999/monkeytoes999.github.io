import {Connection} from './connection.js';

export class Character {
    backgroundColor = "#000000";
    familial = [];

    /**
     * Creates a new character node.
     * @param {string} name The full name of the character.
     * @param {string} id The character's internal ID.
     * @param {string} label What the character's name should be abbreviated to.
     * @param {string} type The grouping that the character belongs to.
     * @param {string} outline An outline color that represents the character.
     */
    constructor(name, id, label, type, outline) {
        this.name = name;
        this.id = id;
        this.label = label;
        this.type = type;
        this.outline = outline;
        this.groupToBackground();
        this.epCount = 0;
    }

    /**
     * Return the character as a vis node
     * @returns {visNode} the character as a vis node.
     */
    pack() {
        return {
            id: this.id,
            label: this.label,
            title: this.name,
            color: {
                background: this.backgroundColor,
                border: this.outline
            },
            graphColor: this.backgroundColor,
            size: 20 + Math.sqrt(this.epCount)*5
        }
    }

    groupToBackground() {
        switch (this.type) {
            case ("Flynn-Fletcher"):
                this.backgroundColor = "#90be6d";
                break;
            case ("Gang"):
                this.backgroundColor = "#207fa2";
                break;
            case ("B-Plot"):
                this.backgroundColor = "#42565e";
                break;
            case ("Candace Crew"):
                this.backgroundColor = "#832404";
                break;
            case ("Family"):
                this.backgroundColor = "#8e97c5";
                break;
            case ("Fireside"):
                this.backgroundColor = "#e15527";
                break;
            case ("Recurring"):
                this.backgroundColor = "#837004";
                break;
            case ("Background Kids"):
                this.backgroundColor = "#057703";
                break;
            case ("BackgroundNotKids"):
                this.backgroundColor = "#fa88fc";
                break;
            case ("OWCA"):
                this.backgroundColor = "#77034b";
                break;
            case ("Evil"):
                this.backgroundColor = "#000000";
                break;
            case ("OneOff"):
                this.backgroundColor = "#ffffff";
                break;
            case ("Cameos"):
                this.backgroundColor = "#1ce0d0";
                break;
        }
    }

    /**
     * Returns an array of the character's familial connections.
     * @returns {[Connection]} the character's familial connections.
     */
    getFamily() {
        return this.familial;
    }

    /**
     * Add a family member
     * @param {Character} member A family member 
     */
    addFamily(member) {
        this.familial.push(new Connection(this, member, 7));
    }

    /**
     * Return the character's internal ID.
     * @returns {string} the character's internal ID.
     */
    getID() {
        return this.id;
    }

    /**
     * Increments the number of episodes the character has appeared in.
     */
    incrementEpisodeCount() {
        this.epCount++;
    }

    /**
     * Returns the number of episodes the character has appeared in.
     * @return {int} the number of episodes the character has appeared in.
     */
    getEpisodeCount(){
        return this.epCount;
    }
}