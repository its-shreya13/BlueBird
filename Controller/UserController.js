

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