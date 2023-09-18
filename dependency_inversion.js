import getLearnerUseCase_ from "./domain/useCases/getLearnerUseCase.js";
import findLearnerByIdRepository from "./infrastructure/persistence/repositories/knex/findLearnerByIdRepository.js";

const getLearnerUseCase = getLearnerUseCase_(findLearnerByIdRepository);

export default { getLearnerUseCase };
