

const validate=(schema)=>async (req,res, next)=>{

     try{
          const parseBody=await schema.parseAsync(req.body)
          console.log(parseBody);
          req.body=parseBody;
          next();
     }
     catch(err)
     {
          // console.log(err);
          // res.status(400).json({msg:err.errors[0].message});
          // console.log(err)
          next(err);
     }
}

module.exports=validate;