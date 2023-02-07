import mysql from 'mysql2';
const Connectdb = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: 'm!;;VHW$1I4C',
    database: process.env.DB_NAME,
    port: 3306,
    charset:'utf8mb4_general_ci'
});
module.exports = Connectdb;