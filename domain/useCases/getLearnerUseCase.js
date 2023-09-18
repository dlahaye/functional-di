/**
 *
 * @param {findLearnerByIdRepository} findLearnerByIdRepository
 * @returns {function(learnerId: number): Promise<Learner | null>}
 */
export default function(findLearnerByIdRepository) {
    return async function(learnerId) {
        const learner = await findLearnerByIdRepository(learnerId);
        if (!learner) {
            throw new Error('Learner does not exist');
        }

        return learner;
    }
}
