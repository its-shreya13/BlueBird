const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

mongoose.connect("mongodb://localhost:27017/your-db-name")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'Sign-in.html'));
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);

    const newUser = new User({
        username,
        email,
        password
    });
    
    try {
        await newUser.save();
        res.redirect('/login'); // Redirect to the login page after successful registration
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registering user.');
    }
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'Log-in.html'));
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            if (user.password === password) {
                res.redirect('/'); // Redirect to the home page after successful login
            } else {
                res.send('Password is incorrect!!');
            }
        } else {
            res.send('User not found!!');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error during login.');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
