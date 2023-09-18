import Server from '@hapi/hapi';

/**
 *
 * @param {Server<Server.ServerApplicationState>} server
 * @param useCase
 */
export default function(server, useCase) {
    server.route({
        method: 'GET',
        path: '/learner/{learnerId}',
        handler: async (request, h) => {
            const learnerId = request.params.learnerId;

            try {
                return await useCase(learnerId);
            } catch(e) {
                return h.response(e.message).code(404);
            }
        }
    });
}
