const User=require('../utils/models/user-models');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const home=(req, res)=>{
     try{
          res.status(200).send("Response by auth-routerrrrr");
     }
     catch(e){
          console.log('err : ',e);
     }
}

const about=(req,res)=>{
     try{
          res.status(200).send("This is about pageeee");
     } 
     catch(e){
          console.log('err : ',e);
     }
}

const register=async(req,res)=>{
     try{
         const {username, email, phone, password}=req.body;

         
         let userexits= await User.findOne({email:email});
     //     console.log(userexits);
         if(userexits)
          {
               let obj={message:"User already exist"}
               res.status(400).json(obj);
          }
          else
          {
               // # hashing the password 
               // let hashPassword= await bcrypt.hash(password,10);
               const userCreated= await User.create({username:username, email:email, phone:phone, password:password});
               res.status(201).json(
                    {
                         message:"Registration successful",
                         token:await userCreated.generateToken(),
                         userId:userCreated._id.toString(),
                    });
               // console.log(userCreated);
          }
     }
     catch(e)
     {
          console.log('err at the registation: ',e);
     }
}


const login= async (req,res)=>{
     try{
         const {email, password}=req.body;

         const userExists=await User.findOne({email:email});

         if(!userExists)
          {
               let obj={message:"User Does not exist! Please sign up"}
               res.status(401).json(obj);
               res.end();
          }

          const passCheck = await userExists.comparePassword(password);

               if(passCheck)
               {
                    res.status(200).send(
                         {
                              msg:"Login succesfully",
                              token:await userExists.generateToken(),
                              userId:userExists._id.toString(),
                         })
               }
               else
               {
                    let object={message:"Incorrect password Try once Again!!"}
                    res.status(401).send(object);
               }          
     }
     catch(e)
     {
          console.log("Error at login in auth-controller",e);
     }
}

const user=async(req,res)=>{  
     try {
          res.status(202).json(req.user);
     } catch (error) {
          console.error("Error at user-auth-contoller",error);
     }
     return;  
}



module.exports={home, about, register, login, user}