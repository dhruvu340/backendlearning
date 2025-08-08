const express=require("express");
const app=express();
const port = 3000;

app.get('/:age',(req,res)=>{
    // res.header({
    //      "content-type":"text/html"
    // })
//res.render(`<h1>hello from home page name is ${req.query.name} and age is ${req.query.age} and ${req.params.age}</h1>`)
    res.set(
         "content-type","text/html"
    )

    // res.status(200)
    return res.send(`<h1>hello from home page name is ${req.query.name} and age is ${req.query.age} and ${req.params.age}</h1>`)
})

app.listen(port,()=>{
    console.log("running on port 3000")
});



