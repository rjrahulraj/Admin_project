


const AdminMiddlewares=(req,res,next)=>{
     try {
          if(req.user.isAdmin===false)
          {
               res.status(403).json({message :"Access denied ! User is not admin"});
          } 
          else{
               next();
          }    
     } catch (error) {
          console.log("Error in isAdmin middlewares", error);
     }     

}

module.exports=AdminMiddlewares;