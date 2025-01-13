const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pedidos = [];

// Endpoint para recibir pedidos
app.post('/api/pedidos', (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido); // Almacena el pedido en el array
    res.json({ mensaje: 'Pedido recibido con éxito', pedido });
});

// Endpoint para listar todos los pedidos
app.get('/api/pedidos', (req, res) => {
    res.json(pedidos); // Devuelve todos los pedidos almacenados
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
