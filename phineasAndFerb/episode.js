import {Connection} from './connection.js';
import {Song} from './song.js';
import {Character} from './character.js';
import {Bit} from './bit.js';

export class Episode {
    episodeConnections = [];

    /**
     * Establish the events and interactions present in an episode.
     * @param {int} number The episode number by production order.
     * @param {string} code The episode production code.
     * @param {string} title The episode title.
     * @param {string} aPlot What Phineas, Ferb, and Candace are up to.
     * @param {string} bPlot What Perry and Doof are up to.
     * @param {[Song]} songs An array of songs present in the episode.
     * @param {[Character]} characters An array of characters present in the episode.
     * @param {[Connection]} interactions An array of interactions between characters that occurred in the episode.
     * @param {[Bit]} bits An array of the bits that occurred in the episode.
     * @param {int} ferbLines The number of lines Ferb has in the episode.
     */
    constructor(number, code, title, aPlot, bPlot, songs, characters, interactions, bits, ferbLines) {
        this.number = number;
        this.code = code;
        this.title = title;
        this.aPlot = aPlot;
        this.bPlot = bPlot;
        this.songs = songs;
        this.characters = characters;
        this.interactions = interactions;
        this.bits = bits;
        this.ferbLines = ferbLines;
        // this.generateConnections();
    }

    /**
     * Return the episode as a vis node
     * @returns {visNode} the episode as a vis node.
     */
    packEpisode() {
        return {
            id: `Ep${this.number}`,
            label: this.title,
            title: this.code,
        }
    }

    /**
     * Packs and returns the characters present in an episode.
     * @returns {[visNode]} an array a characters as vis nodes.
     */
    packCharacters() {
        var characterPack = [];
        this.characters.forEach(c => {
            characterPack.push(c.pack());
        });
        return characterPack;
    }

    /**
     * Creates connections between the characters present in an episode and the episode node.
     */
    generateConnections() {
        this.episodeConnections = [];
        this.characters.forEach(c => {
            this.episodeConnections.push(new Connection(this, c, 8))
        });
    }

    /**
     * Returns both the character interactions and epsiode connections as an array.
     * @returns {[Connection]} A concatenated array of character interactions and episode connections. 
     */
    returnConnections() {
        var allConnections = this.episodeConnections.concat(this.interactions);
        this.characters.forEach(c => {
            var fam = c.getFamily();
            fam.forEach(f => {
                allConnections.push(f);
            });
        });
        return allConnections;
    }

    /**
     * Returns the episode's production code.
     * @returns {string} the episode's production code.
     */
    getID() {
        return `Ep${this.number}`;
    }
}