const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
