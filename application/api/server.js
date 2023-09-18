'use strict';

import Hapi from '@hapi/hapi';
import getLearnerRoute from "./routes/getLearnerRoute.js";

export default async function({ port, host }, dependencies) {

    const server = Hapi.server({
        port, host,
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });

    getLearnerRoute(server, dependencies.getLearnerUseCase);

    await server.start();
    console.log('Server running on %s', server.info.uri);

    return server;
};

