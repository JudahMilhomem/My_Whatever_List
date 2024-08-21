require('dotenv').config();
const express = require('express'); // importa o express
const app = express(); // cria uma instncia do express
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => { // inicia o servidor na porta 3000
    console.log(`Server up and running on port ${port}`);
});

// ----- ROUTES ---- //
// get all games
app.get('/api/v1/games', (req, res) => {
    res.status(200).json({
        status: 'Success!',
        data: {
            game_01: ['Resident Evil 4 Remake', '2023']
        }
    });
});

// get a game
app.get('/api/v1/games/:id', (req, res) => { // ':id' -> url parameter
    // console.log(req.params);
    res.status(200).json({
        status: 'Success!',
        data: {
            game_02: ['Devil May Cry V', '2019']
        }
    });
});

// create a game
app.post('/api/v1/games/:id', (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    res.status(201).json({
        status: 'Success!',
        data: {
            game_03: ['Broforce', '2013']
        }
    });
});

// update a game
app.put('/api/v1/games/:id', (req, res) => {
    res.status(200).json({
        status: 'Success!',
        data: {
            game_03: ['Broforce', '2014']
        }
    }); 
});

// delete a game
app.delete('/api/v1/games/:id', (req, res) => {
    res.status(204).json({ // no content
        status: 'Deleted!'
    }); 
});
