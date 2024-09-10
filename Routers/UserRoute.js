
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/register', (req, res) => {
   res.sendFile(path.join(__dirname, 'Sign-in.html'));
});



app.get('/login', (req, res) => {
   res.sendFile(path.join(__dirname, 'Log-in.html'));
});