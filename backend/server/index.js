import express from "express";
import pg from 'pg'
import { DB_HOST, DB_DATABASE, DB_USER, DB_PASSWORD, DB_PORT, FRONTEND_URL} from '../config.js'
import cors from 'cors'

const PORT = process.env.PORT || 5000;
const app = express();

const pool = new pg.Pool({
    host: DB_HOST,
    database: DB_DATABASE ,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT 
})

app.use(cors({
    origin: FRONTEND_URL
}))

app.get("/api", async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    
    res.send({
        time: result.rows[0].now
    })
})

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
});
