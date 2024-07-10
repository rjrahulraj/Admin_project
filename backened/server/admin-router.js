const express =require('express');        
// const { getAllusers, getAllcontacts, getAllservices, deleteUser, getUserById , UpdateUserById,deleteContactById,deleteServiceById,UpdateServicesById,AddNewServices} = require('../controllers/admin-controller');
const adminControllers=require('../controllers/admin-controller');
const AdminRouter=express.Router();
const authMiddlewares=require('../midllewares/auth-middleware');
const AdminMiddlewares=require('../midllewares/auth-admin-middleware');


// users router 
AdminRouter.route('/users').get(authMiddlewares,AdminMiddlewares,adminControllers.getAllusers);
AdminRouter.route('/users/:id').get(authMiddlewares,AdminMiddlewares,adminControllers.getUserById);
AdminRouter.route('/users/:id').patch(authMiddlewares,AdminMiddlewares,adminControllers.UpdateUserById);
AdminRouter.route('/users').delete(authMiddlewares,AdminMiddlewares,adminControllers.deleteUser);

// contact router 
AdminRouter.route('/contacts').get(authMiddlewares,AdminMiddlewares,adminControllers.getAllcontacts);
AdminRouter.route('/contacts/:id').delete(authMiddlewares,AdminMiddlewares,adminControllers.deleteContactById);


//  services router
AdminRouter.route('/services').get(authMiddlewares,AdminMiddlewares,adminControllers.getAllservices);
AdminRouter.route('/service/:id').get(authMiddlewares,AdminMiddlewares,adminControllers.getServiceById);
AdminRouter.route('/service').post(authMiddlewares,AdminMiddlewares,adminControllers.AddNewServices);
AdminRouter.route('/service/:id').delete(authMiddlewares,AdminMiddlewares,adminControllers.deleteServiceById);
AdminRouter.route('/service/:id').patch(authMiddlewares,AdminMiddlewares,adminControllers.UpdateServicesById);


module.exports=AdminRouter;