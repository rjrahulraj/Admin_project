const mongoose=require('mongoose')


const servicesSchema=new mongoose.Schema({
     service:{
          type:String, 
          required:true,
     },
     description:{
          type:String,
          required:true,
     },
     price:{
          type:String,
          required:true,
     },
     provider:{
          type:String,
          required:true,
     }         
})

const Service=new mongoose.model("Service",servicesSchema);

module.exports=Service;
