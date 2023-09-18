import knex from 'knex';

/**
 * @var {Knex<any, any[]>}
 */
let db;

async function dbClient({ host, port, user, password, database }) {
    db = knex({
        client: 'pg',
        connection: {
            host, port, user, password, database,
        }
    });

    try {
        await db.raw("SELECT 1");
        console.log("PostgreSQL connected");
    } catch (e) {
        console.log("PostgreSQL not connected");
        console.error(e);
    }

    return db;
}

export {
    dbClient, db,
}
