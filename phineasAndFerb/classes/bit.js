export class Bit {
    appearances = [];
    modifiedAppearances = [];

    /**
     * Create a new bit.
     * @param {string} description A description of the bit.
     * @param {boolean} byPeople Is the bit said by people? Default = true;
     */
    constructor(description, byPeople=true){
        this.description = description;
        this.byPeople = byPeople;
    }

    /**
     * Add an appearance of this bit in an episode.
     * @param {Episode} episode The episode in which the bit made an appearance.
     * @param {Character} saidBy The character who did the bit.
     */
    addAppearance(episode, saidBy) {
        this.appearances.push({in: episode, by: saidBy});
    }

    /**
     * Add an appearance of this bit in an episode.
     * @param {Episode} episode The episode in which the bit made an appearance.
     * @param {Character} saidBy The character who did the bit.
     */
    addAppearance(episode) {
        this.appearances.push({in: episode});
    }

    /**
     * Add an appearance of a variation of this bit in an episode.
     * @param {Episode} episode The episode in which the variation made an appearance.
     * @param {Character} saidBy The character who did the bit.
     */
    addModifiedAppearance(episode, saidBy) {
        this.modifiedAppearances.push({in: episode, by: saidBy});
    }
}