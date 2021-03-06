import { roles } from "../models/Role";
import { Pool } from 'pg';

const db = new Pool({
    host: process.env.PROJECT_URL || 'localhost',
    database: 'postgres',
    user: process.env.PROJECT_USER || 'postgres',
    password: process.env.PROJECT_PASSWORD || 'password',
    port: 5432,
});

process.on('SIGINT', () => {
    console.log('Closing pool...');
    db.end();
    console.log('Pool closed successfully.');
    process.exit();
});

export default db; 
