import { db } from "../../client.js";
import Learner from "../../../../domain/learning/models/learner.js";

/**
 * @type findLearnerByIdRepository
 * @param {number} learnerId
 * @returns {Promise<Learner|null>}
 */
export default async function(learnerId) {
    const result = await db.raw('select * from learner where id = ?', [learnerId]);

    if (result.rows.length === 0) {
        return null;
    }

    return new Learner(result.rows[0]);
}
