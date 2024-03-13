const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//soma
app.get('/soma/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = parseFloat(a) - parseFloat(b);
    res.json({ resultado });
});

//subtração
app.get('/sub/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = parseFloat(a) - parseFloat(b);
    res.json({ resultado });
});

//multiplicação
app.get('/multi/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const resultado = parseFloat(a) * parseFloat(b);
    res.json({ resultado });
});

//divisão
app.get('/div/:a/:b', (req, res) => {
    const { a, b } = req.params;
        const resultado = parseFloat(a) / parseFloat(b);
        res.json({ resultado });
});

app.listen(8080, () => {
    let data = new Date();
    console.log('servidor node iniciado em: ' + data);
});
