/**
 * Tell me, and I forget, teach me, and I may remember, involve me, and I learn.
 * @typedef {Object} Learner
 * @property {number} id
 * @property {string} name
 */
export default class Learner {
    constructor({id, name}) {
        this.id = id;
        this.name = name;
    }
}
