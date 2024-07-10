const zod=require('zod');

const signupSchema=zod.object({
username:zod
     .string({required_error:"Name is required"})
     .trim()
     .min(3,{message:"username must be of atleast 3 characters"})
     .max(50,{message:"username must be of atmost 50 characters"}),
email:zod
     .string({required_error:"Email is required"})
     .trim()
     .email({ message: "Invalid email address" })
     .min(8,{message:"email must be of atleast 8 characters"})
     .max(50,{message:"email must be of atmost 50 characters"}),
phone: zod
     .string({required_error:"Phone Number is required"})
     .trim()
     .min(8,{message:"Phone Number must be of atleast 8 characters"})
     .max(50,{message:"Phone Number must be of atmost 50 characters"}),
password: zod
     .string({required_error:"password is required"})
     .trim()
     .min(8,{message:"password must be of atleast 8 characters"})
     .max(50,{message:"password must be of atmost 50 characters"}),
});

const loginSchema=zod.object({
     email:zod
     .string({required_error:"Email is required"})
     .trim()
     .email({ message: "Invalid email address" })
     .min(8,{message:"email must be of atleast 8 characters"})
     .max(50,{message:"email must be of atmost 50 characters"}),
     password: zod
     .string({required_error:"Password is required"})
     .trim()
     .min(8,{message:"password must be of atleast 8 characters"})
     .max(50,{message:"password must be of atmost 50 characters"}),
})
const contactSchema=zod.object({
username:zod
     .string({required_error:"Name is required"})
     .trim()
     .min(3,{message:"username must be of atleast 3 characters"})
     .max(50,{message:"username must be of atmost 50 characters"}),
email:zod
     .string({required_error:"Email is required"})
     .trim()
     .email({ message: "Invalid email address" })
     .min(8,{message:"email must be of atleast 8 characters"})
     .max(50,{message:"email must be of atmost 50 characters"}),
message:zod
     .string({required_error:"message is required"})
     .trim()
     .min(2,{message:"message must be of atleast 2 characters"})
     .max(500,{message:"message must be of atmost 500 characters"}),
})

module.exports={signupSchema, loginSchema,contactSchema};