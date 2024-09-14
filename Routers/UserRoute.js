
app.get('/', (req, res) => {
   res.sendFile(path.join('home.html'));
});

app.get('/register', (req, res) => {
   res.sendFile(path.join( 'Sign-in.html'));
});

app.get('/login', (req, res) => {
   res.sendFile(path.join('Log-in.html'));
});