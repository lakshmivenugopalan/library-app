
const express=require('express');
const booksRouter=express.Router();
function router(nav){
 var books=[
        {   
          title:'tom and jerry',
         author:'joseph barbera',
         genre:'cartoon',
         img:'tom.jpg'
        },
          {   
            title:'harry potter',
           author:'j.krowling',
           genre:'fantassy',
           img:'harry.jpg'
          },
          {   
            title:'pathummayude adu',
           author:'basheer',
           genre:'drama',
           img:'basheer.jpg'
          }
          ]
          booksRouter.get('/',function(req,res){
        res.render("books",{
              nav,
          title:'library',
           books
            
            });
          });

booksRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render("book",{
          nav,
      title:'library',
       book:books[id]
        
        });
      });

 

return booksRouter;

}
module.exports=router;

 
 