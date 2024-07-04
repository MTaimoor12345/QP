const homeController=require('../app/http/controller/homeController');
const authController=require('../app/http/controller/authController');
const cartController=require('../app/http/controller/customers/cartController');

function initRoutes(app){
    app.get('/',homeController().index)
        
   
     app.get('/cart',cartController().cart)
      app.get('/login',authController().login)
      app.get('/register',authController().register)
}

module.exports=initRoutes