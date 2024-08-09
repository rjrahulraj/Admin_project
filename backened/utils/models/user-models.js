const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt= require('jsonwebtoken');


const userSchema=new mongoose.Schema({
     username:{
          type:String,
          require:true,
     },
     email:{
          type:String,
          require:true,
     },
     phone:{
          type:String,
          require:true,
     },
     password:{
          type:String,
          require:true,
     },
     isAdmin:{
          type:Boolean,
          default:false,
     }
});

// this pre methods run before new data is going to save. 
// imp-note: always use async function and avoid callback function(it will give errror)/ 

userSchema.pre('save', async function(next){

     const user=this;

          if(!user.isModified('password'))
          {
               next();
          }
          try{
               const saltRound=await bcrypt.genSalt(10);
               let hashPassword=await bcrypt.hash(user.password, saltRound);
               user.password=hashPassword;
          }
          catch(e)
          {    
               console.log("err at modifing the password in user-models");
               next();
          }
})

// instance method  -we can create any  method 
// note :-writing async function is important and  arrow function will not work.  
//note :- these will run on query return from model 
userSchema.methods.generateToken=async function()
{
     try{

          return await jwt.sign(
               {
                    userId:this._id.toString(),
                    email: this.email,
                    isAdmin:this.isAdmin
               },
               process.env.JWT_SIGN_KEY,
               {
                    expiresIn:'30d',
                    
               }
          );
     }
     catch(e)
     {
          console.error("Err at generateToken in userModels",e);
     }
}

userSchema.methods.comparePassword=async function(password)
{
     return await bcrypt.compare(password,this.password);
}


const User=new mongoose.model("User",userSchema);

module.exports=User; 