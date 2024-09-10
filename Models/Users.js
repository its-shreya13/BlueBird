const mongoose=require('mongoose')


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
