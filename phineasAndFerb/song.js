export class Song {

    /**
     * Create a new song with relevant info.
     * @param {string} name The name of the song.
     * @param {[Character]} performers The characters who performed the song.
     */
    constructor(name, performers) {
        this.name = name;
        this.performers = performers;
    }
}