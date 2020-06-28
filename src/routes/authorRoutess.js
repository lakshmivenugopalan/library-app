const express=require('express');
const authorRouter=express.Router();
function router(nav){
 var books=[
        { 
        BestSeller:'tom and jerry',
         author:'joseph barbera',
         genre:'cartoon',
         img:'JBarbera.jpg'
        }
    ];

authorRouter.get('/',function(req,res){
  res.render("authors",{
    nav,
title:'library',
 books
  
  });
});
      return authorRouter;

}
module.exports=router;
