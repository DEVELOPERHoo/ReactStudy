const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kimgyoungho:abcd1234@boilerplate.jzttk.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send("Hello, world!"));

app.listen(port, () => console.log('Example app listening on port ${port}!'))