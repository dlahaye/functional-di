'use strict';

import envs from './envs.js';
import { dbClient } from "./infrastructure/persistence/client.js";
import server from "./application/api/server.js";
import dependencies from "./dependency_inversion.js";

const db = await dbClient({ host: envs.dbHost, port: envs.dbPort, user: envs.dbUser, password: envs.dbPassword, database: envs.dbDatabase });
const api = await server({ port: envs.apiPort, host: envs.apiHost }, dependencies);

process.on('unhandledRejection', async (err) => {
    await api.close();
    await db.destroy();
    console.log(err);
    process.exit(1);
});
