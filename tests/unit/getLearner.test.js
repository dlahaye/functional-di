import {expect} from '../utils.js';
import Learner from "../../domain/learning/models/learner.js";
import getLearnerUseCase from "../../domain/useCases/getLearnerUseCase.js";

describe('Unit | getLeanerUseCase', function () {
    describe('Given a learner id', function () {
        const learnerId = 1;
        describe('When learner exists', function () {
            const existingLearner = new Learner({id: learnerId, name: 'Learner'});
            async function findLearnerByIdRepository(learnerId) {
                return existingLearner;
            }
            const useCase = getLearnerUseCase(findLearnerByIdRepository);
            it(`should return the learner`, async function () {
                const learner = await useCase(learnerId);
                expect(learner.id).to.be.equal(existingLearner.id);
                expect(learner.name).to.be.equal(existingLearner.name);
            });
        });

        describe('When learner does not exist', function () {
            async function findLearnerByIdRepository(learnerId) {
                return null;
            }
            const useCase = getLearnerUseCase(findLearnerByIdRepository);
            it(`should throw an exception`, async function () {
                await expect(useCase(learnerId)).to.be.rejectedWith('Learner does not exist');
            });
        });
    });
});
