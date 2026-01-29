const express = require('express');
const { register } = require('module');
const app = express();
app.use(express);

app.post('/', (req, res) => res.send('Welcome to user API'));

app.post('/register', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Missing fields' });

res.status(201).json({ message: `registered: ${name}, (${email})` })
})

app.get('/user/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'Sample User' });
})

app.listen(30000,() => console.log('API live on port 30000'))