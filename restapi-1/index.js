const express = require("express");
const app = express();
const port = 3000;
const fs=require("fs")

const users = require("./MOCK_DATA.json");
// middlewares
const createLog=(req,res,next)=>{
  
  fs.appendFile("log.txt",`\n${req.method} at ${new Date().toISOString()}`,(err,data)=>{
    if(!err){
      next();
    }
  })
}
app.use(express.urlencoded({extended:false}));
app.use(createLog)
app.get("/user", (req, res) => {
  const html = `<ul>
  ${users.map((user, index) => `<li>${user.first_name}</li>`).join(" ")}
  </ul>
  `;

  

  res.send(html);
});

app.route("/api/user").get((req,res)=>{
res.send(users);
}).post(createLog,(req,res)=>{

  const body=req.body;

  const newuser={...body,id:users.length+1};
  console.log(newuser);
  
  users.push(newuser);


  fs.writeFile("MOCK_DATA.json",JSON.stringify(users),(err)=>{
    try {
      res.json(users);
      
    } catch (error) {
      console.log(error);
      
    }
  })
  

}).patch((req,res)=>{
const id = req.body.id;
const newuser=req.body

const hel=users.map((data)=>{
  if(data.id==id){
    return {...newuser}
  }
  return data
})

fs.writeFile("MOCK_DATA.json",JSON.stringify(hel),(err)=>{
 
  res.send(hel);
})
})

// app.get("/api/user/:id", (req, res) => {
//   const user = users.find(user => user.id == req.params.id);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ error: "User not found" });
//   }
// });

app.get("/api/user/:id", (req, res) => {
  const no=Number(req.params.id);
  res.json(users.find(user=>user.id==no));

});


// app.route("/api/user").get(()=>{}).put(()=>{}).post(()=>{})  => prefered


app.listen(port, () => {
  console.log(`listeing on port ${port}`);
});
