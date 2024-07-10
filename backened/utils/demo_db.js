const mongoose=require('mongoose');

const uri="mongodb://127.0.0.1/shop";

const url="mongodb+srv://rolex07:7050583008@cluster0.aja0q7y.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url);

// schema
const productSchema=new mongoose.Schema({
     id:Number,
     name:String,
     company:String,
     price:Number,
     colors:[String],
     image:String,
     category:String,
     isFeatured:Boolean
})
const cartSchema=new mongoose.Schema({
     id:Number,
     userId:Number,
     date:String,
     products:[{
          productId:Number,
          quantity:Number,
     }], 
     __v:Number,
})
//model

const Product=new mongoose.model("Product", productSchema);
const Cart=new mongoose.model("cart", cartSchema);

let Insertdata={
     id:3,
     name:"cloth",
     company:"64bjk4r394nencn33535ece43",
     price:159,
     colors:["#000000", "#fe8967", "#tr3423"],
     image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
     category:"Child's wearing",
     isFeatured:true,
}

const main=async()=>{
     try{
          // CRUD 
          // 1.>read
          // const dt  =await Product.find({id:2})
          // const dt  =await Cart.find({id:2})
          // console.log(dt);
          
          
          // 2.>insert/create
          // const dt  =await Product.find({id:1})
          // await Product.insertMany(Insertdata);
          // console.log(dt);
           
          // 3.>Update
          // const updateQuery=await Product.findOneAndUpdate(
          //      {id:{$lt:3}},
          //      {$set:{price:399}}
          // )
          // console.log(updateQuery);

          // 4.> Delete 
          // await Product.findOneAndDelete({id:2});

     }
     catch(e)
     {
          console.log("err: ", e);
     }
     finally{
          mongoose.connection.close();
     }
}

main();