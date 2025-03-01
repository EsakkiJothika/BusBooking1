const logindata = require("../model/login.model");
const signupdata = require("../model/signup.model")

module.exports = {

    signup : async (req,res)=>{

        let {username,email,password} = req.body

        let exist = await signupdata.findOne({email:email});

        if (exist) {
            
            res.send("User Already exist")

        }
        else{

            signupdata.create({username:username,email:email,password:password})
            .then(()=>{
                res.send("Account Created!")
            })
            .catch(()=>{
                res.send("OOPS! Error")
            })
        }
        
        
    },


    login : async (req,res)=>{

        let {email,password} = req.body

        let exist = await signupdata.findOne({email:email});

        if (exist) {


            res.send("Logged in successfully")

            // logindata.create({email:email,password:password})
            // .then(()=>{
            //     res.send("Logged in")
            // })
            // .catch(()=>{
            //     res.send("Error")
            // })
            
        }
        else{

            res.send("User doesn't Exist")

        }
    }
}