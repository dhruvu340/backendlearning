const express = require("express");
const app = express();
const port = 3000;

const users = require("./MOCK_DATA.json");
app.get("/user", (req, res) => {
  const html = `<ul>
  ${users.map((user, index) => `<li>${user.first_name}</li>`).join(" ")}
  </ul>
  `;

  res.send(html);
});

app.get("/api/user", (req, res) => {
  res.send(users);
});

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
