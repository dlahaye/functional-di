import 'dotenv/config'

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;
const apiHost = process.env.API_HOST;
const apiPort = process.env.API_PORT;

export default {
    dbHost, dbPort, dbUser, dbPassword, dbDatabase,
    apiHost, apiPort,
}
