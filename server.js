const express = require('express');

const app = express();

const path = require('path');
const PORT = process.env.PORT || 3500;

app.use(express.static(path.join(__dirname, 'src')));

app.get("^/$|/index(.html)?", (req, res) => {
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname, "src", "index.html"))
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));