const express=require('express');
const router=express.Router();




router.get('/', (req,res)=>{
     res.status(200).send("Response by about router");
})

router.get('/hello', (req,res)=>{
     res.status(200).send("Response by about-helloo router");
})
module.exports=router;
