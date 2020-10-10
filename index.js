const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});