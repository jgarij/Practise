const express = require('express')
const app = express();
const User=require('./models/Usermodel')
app.get("/",(req,res)=>{
    res.render("index");
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/usersdata",async function(req,res){
    const {username,email,password}=req.body;
    const data = await User.create({
        username:username,
        email:email,
        password:password
    })
    console.log(email,username,password);
    res.send("done created successfully")
    res.redirect("/")

})
const db=require('./config/dbconfig')
app.set('view engine','ejs')
const dotenv = require('dotenv');
const Usermodel = require('./models/Usermodel');
dotenv.config();
const port = process.env.PORT||3000
app.listen(port);