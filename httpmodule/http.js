const app=require('http');
const url=require('url');

const server = app.createServer((req,res)=>{
  if(req?.url=="/profile"){res.writeHead(200,{
    "content-type":"text/plain"
    //application/json text/html etc
  })

  res.end("<h1>hello from the server</h1>");}

  else{
    res.writeHead(200,{
    "content-type":"text/plain"
  })

  res.end("<h1>page not found</h1>");

  }


  const myurl = url.parse(req.url,true);
  switch (myurl.pathname) {
    case '/':

    if(req.method=="GET")
     res.writeHead(200,{
    "content-type":"text/plain"
    //application/json text/html etc
  })

  res.end("<h1>hello from the server</h1>")
      break;
  
    default:
       res.writeHead(200,{
    "content-type":"text/plain"
  })

  res.end("<h1>page not found</h1>");
      break;
  }
})

const port=3000;

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});


/*http methods ->get method always in browser(get some data from the server)
post req->send some data to the server and mutate data in the server 
put - file upload to
patch update 
delete -> delete some thing inthe server 

always respect all http methods 

ssr is faster than csr because first data is fecthed then rendered


rest api ->best practices to achieve standards of industry and works on the server client architecture

html response and json format text image and xml format 

json-> key value pair [{},{},{}.........] give data in form of json and client process this raw data how to render this


if you are sure that client is web then server side rendering is best
*/
