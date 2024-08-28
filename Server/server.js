import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express'; // importa o Express
import cors from 'cors';
const app = express(); // cria uma instância do Express
import { query } from './DB/index.js'; // importa o acesso ao banco de dados

// Middleware(s)
app.use(cors());
app.use(json());

const port = process.env.PORT || 3333;
app.listen(port, () => { // inicia o servidor na porta 3000
    console.log(`Server up and running on port ${port}`);
});

// ----- ROUTES ---- //
// get all games
app.get('/api/v1/games', async (req, res) => {
    try{
        const result = await query('SELECT * FROM games');
        res.status(200).json({
            results: result.rows.length,
            data: result.rows
        });
    } catch(err){
        console.log(err);
    }
});

// get a game
app.get('/api/v1/games/:id', async (req, res) => { // ':id' -> url parameter
    try{
        const result = await query('SELECT * FROM games WHERE id = $1', [req.params.id]);
        res.status(200).json({
            results: result.rows.length,
            data: result.rows
        });
    } catch(err){
        console.log(err);
    }
});

// create a game
app.post('/api/v1/games', async (req, res) => {
    try{
        const result = await query('INSERT INTO games(game_name, rdate, descr, company, dmc_rating) VALUES($1, $2, $3, $4, $5) returning *', [
            // Postman request body **
            req.body.game_name,
            req.body.release_date,
            req.body.description,
            req.body.company,
            req.body.sexy_rating
        ]);

        res.status(201).json({
            results: result.rows.length,
            data: result.rows
        });
    } catch(err){
        console.log(err);
    }
});

// update a game
app.put('/api/v1/games/:id', async (req, res) => {
    try{
        const result = await query('UPDATE games SET game_name = $1, rdate = $2, descr = $3, company = $4, dmc_rating = $5 WHERE id = $6 returning *', [
            req.body.game_name,
            req.body.release_date,
            req.body.description,
            req.body.company,
            req.body.sexy_rating,
            req.params.id
        ]);
        res.status(200).json({
            results: result.rows.length,
            data: result.rows
        }); 
    } catch(err){
        console.log(err);
    }
});

// delete a game
app.delete('/api/v1/games/:id', async (req, res) => {
    try{
        const result = await query('DELETE FROM games WHERE id = $1', [req.params.id]);
        res.status(204).send('O Dudu é guei');
    } catch(err){
        console.log(err);
    }
});
