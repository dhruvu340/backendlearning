const fs=require("fs");

const createLog=(req,res,next)=>{
  
  fs.appendFile("log.txt",`\n${req.method} at ${new Date().toISOString()}`,(err,data)=>{
    if(!err){
      next();
    }
  })
}

module.exports=createLog;