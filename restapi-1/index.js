const express = require("express");
const app = express();
const port = 3000;
const fs=require("fs");
const mongoose=require("mongoose");
const createLog=require("./middleware")
const dotenv=require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

const userschema=new mongoose.Schema({
  name:String,
  email:String,
  tags:[String],
  isactive:Boolean,
  createdat:{type:Date,default: Date.now},
})

// Date.now()->create at instance whether Date.now is created at model creation

const user =mongoose.model("Users",userschema);


async function runqueries() {
  try {
    const newuser1=new user({ name:"String",
  email:"String",
  tags:["1","2"],
  isactive:true,})
 await newuser1.save();
    
  } catch (err) {
    console.log(err);
    
  } finally{
    await mongoose.connection.close();
  }
}

runqueries();
const users = require("./MOCK_DATA.json");
// middlewares

app.use(express.urlencoded({extended:false}));

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





const route=express.Router();
route.use(createLog);

route.get("/purchase",(req,res)=>{

  res.send("<h1>inside middle ware</h1>");

})

app.use('/',route);

app.listen(port, () => {
  console.log(`listeing on port ${port}`);
});