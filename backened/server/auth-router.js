const express=require('express');
const router=express.Router();
const {home, about,register, login,user}=require('../controllers/auth-controller');
const contact=require('../controllers/contact-controller');
const validate=require('../midllewares/validate-middleware');
const {signupSchema,loginSchema,contactSchema}=require('../validators/auth-validators');
const authMiddlewares = require('../midllewares/auth-middleware');
const services = require('../controllers/service-controller');


// router.get('/', (req,res)=>{
//      res.status(200).send("Response by auth-router");
// })


router.route('/').get(home);
router.route('/about').get(about);
router.route('/register').post(validate(signupSchema),register);
router.route('/login').post(validate(loginSchema),login);
router.route('/contact').post(validate(contactSchema),contact);
router.route('/user').get(authMiddlewares,user);
router.route('/services').get(services);


module.exports=router;
