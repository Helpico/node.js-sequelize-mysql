const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes"); 
const postRouter = require("./routes/post.routes");
const { sequelize } = require("./models");

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", postRouter);





/* 
// Create a user with name, email and role values
app.post("/user", async(req, res) => {
 const {name, email, role} = req.body;

 try {
  const user = await User.create({name, email, role});
  console.log(user);
  return res.json(user);
 } catch(err) {
  console.log(err);
  return res.status(400).json(err);
 }
})

// Create a post of a user
app.post("/posts", async(req, res) => {
 const { userUuid, name } = req.body;

 try {
  const user = await User.findOne({ where: { uuid: userUuid }});
  const post = await Post.create({ name, userId: user.id });
 
  return res.json(post);
 
 } catch(err) {
  console.log(err);
  return res.status(500).json(err);
 }
})

// Find all posts with their Users model inclosed
app.get("/posts", async(req, res) => {
   
  try {
   const posts = await Post.findAll({ include: ['user'] });
  
   return res.json(posts);
  
  } catch(err) {
   console.log(err);
     return res.status(500).json(err);
  }
 });

// Delete a user
app.delete("/user/:uuid", async(req, res) => {
  const uuid = req.params.uuid;
  
  try {
   const user = await User.findOne({ 
    where: { uuid },
    include: 'posts'
  });
   
   await user.destroy();

   return res.json({ message: "User and its posts are deleted!"});
  } catch (err) {
   return res.status(500).json({error: "Something went wrong"});
  }
 })
 

 */



app.listen({ port: 5000}, async() => {
 console.log("Server is on port http://localhost:5000");
 // await sequelize.sync({ force: true });
 await sequelize.authenticate();
 console.log("Database connected!");
})









/* (async () => {
 await sequelize.sync();
 const jane = await User.create({
   username: 'janedoe',
   birthday: new Date(1980, 6, 20)
 });
 console.log(jane.toJSON());
})(); */
