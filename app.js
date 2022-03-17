const express = require("express");
const app = express();
const { sequelize, User } = require("./models");

app.use(express.json());



app.post("/user", async(req, res) => {
 const {name, email, role} = req.body;

 try {
  const user = await User.create({name, email, role});
  console.log(user);
  return res.json(user);
 } catch(err) {
  console.log(err);
  return res.status(500).json(err);
 }
})


app.listen({ port: 5000}, async() => {
 console.log("Server is on port http://localhost:5000");
 await sequelize.sync({ force: true });
 // await sequelize.authenticate();
 console.log("Database connected!");
})

