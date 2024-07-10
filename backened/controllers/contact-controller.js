const Contact=require('../utils/models/contact-models');

const contact=async (req,res)=>{
     try {
          const {username, email, message}=req.body;
          const contactDetails=await Contact.create({username, email, message});
          // console.log(contactDetails);
          res.status(200).send({msg:"Message is send succesfully"});

     } catch (error) {
          console.log("Error at contact controller",error);
          res.status(400).send({msg:"Message not delivered"});
     }

} 

module.exports=contact;