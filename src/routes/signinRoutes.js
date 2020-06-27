const express=require('express');
const signinRouter=express.Router();
function router(nav){
    signinRouter.get('/',function(req,res){
        res.render("signin",{
            
          title:'library',
            nav
            });
          });
return signinRouter;
}
module.exports=router;