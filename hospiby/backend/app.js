const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET="dfsgvcerecgevgb8541e45gf6e45fer98e765g4v1cr"

const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://team_ampty:ampty@hospiby.mtl0onz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURL, {
    useNewUrlParser: true
}).then(() => { console.log("Connected to Database."); })
    .catch(e => console.log(e));




app.listen(5000, () => {
    console.log("Server Started!");
})


require("./userDetails");

const User = mongoose.model("userInfo");

app.post("/register", async (req, res) => {
    const { fname, lname, email, password, userType, city } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.send({ error: "User Already Exists" });
        }
        await User.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
            userType,
            city
        });
        res.send({ status: "Ok" })
    } catch (error) {
        res.send({ status: "error" })
    }
});


app.post("/login-user",async(req,res)=>{
    const {email,password}=req.body;

    const user= await User.findOne({email});
    if (!user) {
        return res.send({ error: "User not Found!!" });
    }
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({email:user.email},JWT_SECRET,{
            expiresIn:10,
        });

        if(res.status(201)){
            return res.json({status:"Ok",data:token});
        }else{
            return res.json({status:"error"})
        }
    }
    res.json({status:"error",error:"Invalid Password!!"})
});

app.post("/userData",async(req,res)=>{
    const {token}=req.body;
    try {
        const user = jwt.verify(token,JWT_SECRET,(err,res)=>{
            if(err){
                return "token expired";
            }
            return res;
        });

        if(user=="token expired"){
            return res.send({status:"error",data:"token expired"});
        }
        const useremail=user.email;
        User.findOne({email:useremail}).then((data)=>{
            res.send({status:"ok",data:data});
        }).catch((error)=>{
            res.send({status:"error",data:error})
        })
    } catch (error) {}
})