require('dotenv').config();
const express=require('express');
const connectDB=require('../utils/db');
const app=express() ;
const router=require('./auth-router');
const AdminRouter = require('./admin-router');
const errorMiddleware=require('../midllewares/error-middleware');
const cors=require('cors');

const corseOption={
     origin:"http://localhost:5173",
     methods:"GET, POST, PUT, DELETE, HEAD,PATCH",
     credential:true
}

// tackling the cors policy
app.use(cors(corseOption));

app.use(express.json());

app.use('/admin',AdminRouter)

app.use("/api",router);
// app.use("/about",router2);

app.use('/', (req,res)=>{
     res.status(200).send("hello word");
});

app.use('/about', (req,res)=>{
     res.status(200).send("this ia about page");
});

app.use(errorMiddleware);

connectDB().then(()=>{    
app.listen(9001,()=>{
     console.log("Server start at : 9001");
})
})
