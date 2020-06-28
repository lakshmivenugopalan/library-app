const express=require('express');
const app=express();
const nav=
[
  {
  link:'/books',name:'books'},
  {
    link:'/authors',name:'authors'

},
      {
 link:'/signup',name:'signup'
},
{
    link:'/signin',name:'signin'
}

   ]
const booksRouter=require('./src/routes/bookRoutes')(nav)
const signupRouter=require('./src/routes/signupRoutes')(nav)
const signinRouter=require('./src/routes/signinRoutes')(nav)
const authorRouter=require('./src/routes/authorRoutess')(nav)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);
app.use('/authors',authorRouter);
app.get('/',function(req,res){
    res.render("home",{
        nav,
title:'library'
    
    });
});

app.listen(3000);