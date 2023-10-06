import sql from 'mssql';
import { sqlConfig } from './config';

export const connectDB = async () => {
    await sql.connect(sqlConfig)
};
