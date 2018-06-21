const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World'); // resp do servidor
});

app.get('/pudim', (req, res) => {
    res.send({
        sabor: 'Leite',
        cobertura: 'Caramelo',
        frescura: 'Uva Passa'
    });
});

app.get('/teste', (req, res) => {
    res.send('Deu certo'); // resp do servidor
});


app.listen(3000); 