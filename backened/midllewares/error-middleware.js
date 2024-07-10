
function errorMiddleware(err, req, res, next){
     try {
          const status=err.status || 400;
          const message=err.errors[0].message || "Errror in backened";
          const detailsMessage=err.detailsMessage|| "Error in backened";

          let obj={status,message,detailsMessage};

          res.status(status).json(obj);
          

     } catch (err) {
          console.log("Error in middlewares", err);
          
     }

}

module.exports=errorMiddleware;