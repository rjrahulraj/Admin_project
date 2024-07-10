const Services=require('../utils/models/service-models');

const services=async(req,res)=>{
     try {
          let services_data=await Services.find();

          if(!services_data){
               res.status(400).json({msg:"No services found"});
          }

          res.status(200).json(services_data);

     } catch (error) {
         console.log("Error at services contollers", error); 
     }
}

module.exports=services