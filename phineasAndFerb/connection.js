//Level 1 interaction: Characters are seen very close to each other, experiencing the same thing. I.E. Tilly and Sam watch an award show in the same crowd.
//Level 2 interaction: Character A is told about an event involving character B. I.E. Perry is told about Big Boots Boris.
//Level 3 interaction: Character A watches/listens to character B do something. I.E. Tilly watches Timmy get a prize for having a large hamster.
//Level 4 interaction: Character A speaks about character B, but something that did not directly happen to them. I.E. Monogram talking about Doof.
//Level 5 interaction: Character A speaks about something that was a direct interaction between themselves and character B. I.E. Candace talks about something Jeremy said to her.
//Level 5.5 interaction: 6, but uh one sided? I.E. Isabella watches Candace walk up to Rushmore.
//Level 6 interaction: Character A is shown to directly interact with character B. I.E. Tilly comments on Doof after he walks out of his building.

//Level 7: Familial, given directly to characters
//Level 8: Character to episode
export class Connection {
    directionality = "to";
    color = "#000000";

    constructor(source, destination, level) {
        this.source = source;
        this.destination = destination;
        this.level = level;
        this.levelToDirectionality()
        return this;
    }

    levelToDirectionality() {
        if (this.level == 1 || this.level == 6 || this.level == 7) {
            this.directionality = "to, from";
        }
    }

    pack() {
        return {
            from: this.source.getID(),
            to: this.destination.getID(),
            arrows: this.directionality,
            color: this.color
        }
    }

    getConnectionSource() {
        return this.source;
    }

    getConnectionDestination() {
        return this.destination;
    }
    
    getConnectionLevel() {
        return this.level;
    }

    checkIdenticality(otherConnection) {
        if (this.source == otherConnection.getConnectionSource() && this.destination == otherConnection.getConnectionDestination()) {
            return true;
        }
        if (this.source == otherConnection.getConnectionDestination() && this.destination == otherConnection.getConnectionSource() && (this.level == 6 || otherConnection.getConnectionLevel() == 6)) {
            return true;
        }
        return false;
    }

    getStrongestConnection(otherConnection, allowFamilial) {
        if (this.level == 7 && !allowFamilial) {
            return otherConnection;
        }
        if (otherConnection.getConnectionLevel() == 7 && !allowFamilial) {
            return this;
        }
        if (otherConnection.getConnectionLevel() > this.level) {
            return otherConnection;
        }
        return this;
    }
}