const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');




mongoose.connect("mongodb://localhost:27017/Register")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
