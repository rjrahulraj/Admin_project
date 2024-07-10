const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017";
const uri=process.env.MONGODB_URL;


const connectDB=async()=>{
     try{
          await mongoose.connect(uri);
          console.log("DB connection Successfully"); 
     }
     catch(e)
     {
          console.error("Database connection failure",e);
          process.exit(0);
     }
}

module.exports=connectDB;