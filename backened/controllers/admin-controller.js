const User =require('../utils/models/user-models');
const Contact =require('../utils/models/contact-models');
const Service=require('../utils/models/service-models');

const getAllusers=async(req,res)=>{

     try {
          const users= await User.find({}).select({password:0});
          // console.log(users);

          if(!users || users.length===0)
          {
               res.status(404).json({message:"No Users found"});
          }
          else
          {
               res.status(200).json(users);
          }

     } catch (error) {
          console.log('Error at admin Controlles -getAllusers',error);    
     }
}


const deleteUser=async(req,res)=>{
     try {
          const {id}=req.body;
          
          let delUser=await User.deleteOne({id});
          console.log(delUser, id);
          
          if(delUser.deletedCount===0)
          {
               res.status(400).json({message:"User Deletion is unsuccessfull"});
          }
          else{
               res.status(200).json({message:"User Deleted successfull"});
          }
     } catch (error) {
          console.log('Error at admin Controlles -deleteAlluser',error);
     }
}


const getUserById=async(req,res)=>{
     try {
          let id=req.params.id;
          let UserDt=await User.findOne({_id:id}).select({password:0});
          console.log(id);
          if(!UserDt)
          {
               res.status(400).json({message:"Failed to user Details"});
          }
          else
          {
               res.status(200).json(UserDt);
          }
     } catch (error) {
          console.log('Error at admin Controlles -getUserById',error);
     }
}

const UpdateUserById=async(req,res)=>{
     try {
          const id=req.params.id;
     const {email, phone, username}=req.body;
     console.log(res.body);

     const updateDT=await User.updateOne({_id:id},{email:email,phone:phone,username:username});
     console.log(updateDT);
     if(updateDT.acknowledged)
     {
          res.status(200).json({message:"Update successful"});
     }
     else{
               res.status(400).json({message:"Update unsuccessful"});
     }
     } catch (error) {
          console.log('Error at admin Controlles -UpdateUserById',error);
     }

}


const getAllcontacts=async(req,res)=>{
     try {
          const contacts=await Contact.find({});
          if(!contacts || contacts.length===0)
               {
                    res.status(404).json({message: "No contacts found"});
               }
          else
          {
               res.status(200).json(contacts);

          }
          
     } catch (error) {
          console.log('Error at admin Controlles -getAllcontacts',error); 
     }

}

const deleteContactById=async(req,res)=>{
     try {
          const id=req.params.id;
          const deleteContact=await Contact.deleteOne({_id:id});
          console.log(deleteContact);
          if(deleteContact.deletedCount===0)
          {
               res.status(200).json({message:"Message Deleted unsuccessful"});
          }
          else{
               
               res.status(402).json({message:"Message Deleted successful"});
          }
          
     } catch (error) {
          console.log('Error at admin Controlles -deleteContactById',error); 
     }
}

const getAllservices=async(req,res)=>{

     try {

          const services=await Service.find({}).select();
          if(!services || services.length===0)
               {
                    res.status(404).json({message: "No Services found"});
               }
               res.status(200).json(services);
   
     } catch (error) {
          console.log('Error at admin Controlles -getAllservices',error);    
     }
}

const getServiceById=async(req,res)=>{

     try {
          const id=req.params.id;
          const reqService=await Service.findOne({_id:id});
          // console.log(reqService);

          if(reqService)
          {
               res.status(200).json(reqService);
          }
          else{
               res.status(401).json("Error in fetching the user data");
          }
     
     } catch (error) {
          console.log('Error at admin Controlles -getAllservices',error);
     }
}

const AddNewServices=async(req,res)=>{
     try {
          const {service,description,price,provider}=req.body;
          
          // console.log(service,description,price,provider); 
          let newServices=await Service.create({service,description,price,provider});
          console.log(newServices);
          if(!newServices)
               {
                    res.status(403).json({message:"Service is not added"});
               }
          else{
               res.status(200).json({message:"Service is added"});
          }
     } catch (error) {
          console.log('Error at admin Controlles -AddNewServices',error);    
     }
}
const deleteServiceById=async(req,res)=>{
     try {
          const id=req.params.id;
          let delSer=await Service.deleteOne({_id:id});
          console.log(delSer);

          if(delSer.deletedCount==0)
               {
                    res.status(403).json({message:"Service is not Deleted"});
               }
          else{
               res.status(200).json({message:"Service is Deleted"});
          }
     } catch (error) {
          console.log('Error at admin Controlles -DeleteserviceById',error);    
     }
}

const UpdateServicesById=async (req,res)=>{
     
     try {
          const id=req.params.id;
          const {service,description,price,provider}=req.body;
          console.log(id,service,description,price,provider); 

          
          let updSer=await Service.updateOne({_id:id},{service,description,price,provider});
          
          console.log(updSer);

          if(updSer.modifiedCount===0)
          {
               res.status(403).json({message:"Service is not updated"});
          }
          else{
               res.status(200).json({message:"Service is updated"});
          }
     } catch (error) {
          console.log('Error at admin Controlles -updateserviceById',error);    
     }
}




module.exports={getAllcontacts, getAllusers, getAllservices,deleteUser,getUserById, UpdateUserById,deleteContactById,deleteServiceById,UpdateServicesById,AddNewServices,getServiceById};


// {
//      "_id": {
//        "$oid": "667d6a0118296f95eb6bd620"
//      },
//      "service": "E-commerce Website Development",
//      "description": "Building powerful e-commerce websites for your business.",
//      "price": "$2,000 - $8,000",
//      "provider": "Take you forward."
// }