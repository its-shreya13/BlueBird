const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');

mongoose.connect(process.env.MONGODB_URI, {})
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
