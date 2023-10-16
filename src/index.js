const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Read (GET)
app.get('/:game/:data', (req, res) => {
    fs.readFile(path.join(__dirname, 'data/' + req.params.game + '/' + req.params.data + '.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Server Error');
            console.error(err);
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
