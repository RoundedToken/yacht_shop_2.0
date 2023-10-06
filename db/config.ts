export const sqlConfig = {
    user: process.env.DB_USER || '',
    password: process.env.DB_PWD || '',
    database: process.env.DB_NAME || '',
    server: process.env.DB_SERVER || '',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: false,
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
};
