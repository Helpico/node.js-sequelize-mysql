const express = require("express");
const userRouter = require("./routes/user.routes"); 
const postRouter = require("./routes/post.routes");
const { sequelize } = require("./models");

const app = express();
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", postRouter);


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
