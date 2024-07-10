const jwt=require('jsonwebtoken');
const User=require('../utils/models/user-models');
const { user } = require('../controllers/auth-controller');

const authMiddlewares=async(req,res,next)=>{
     try {
          let token=req.header("Authorization");
          // console.log(token)
          if(!token)
               {
                    res.status(400).send({message: "Unauthorized HTTP, Token not Provided"});
               }
               if(token)
               {
                    token=token.replace("Bearer ","").trim();
                    let userData=await jwt.verify(token, process.env.JWT_SIGN_KEY);
                    console.log(userData.email);
               userData=await User.findOne({email:userData.email}).select({password:0});
                    console.log(userData);
               req.user=userData;
               req.token=token;
               req.userID=userData._id;
               next();
               }
               
     } catch (error) {
          console.log("error at authenication in auth-middlewares",error);
     }
}

module.exports=authMiddlewares;