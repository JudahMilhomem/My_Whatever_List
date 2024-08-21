require('dotenv').config();
const express = require('express'); // importa o express

const app = express(); // cria uma instncia do express

const port = process.env.PORT || 3000;
app.listen(port, () => { // inicia o servidor na porta 3000
    console.log(`Server up and running on port ${port}`);
});
