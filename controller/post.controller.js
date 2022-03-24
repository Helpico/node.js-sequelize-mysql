const { sequelize, User, Post } = require("../models");


class PostController {

 async createPost(req, res) {
  const { userUuid, name } = req.body;

  try {
   const user = await User.findOne({ where: { uuid: userUuid } });
   const post = await Post.create({ name, userId: user.id });
   console.log(post);
   return res.status(200).json(post);
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  
  } 
 }

 async getPostsByUser(req, res) {
  const uuid = req.query.uuid;
  try {
   const user = await User.findOne({ where: { uuid } });
   const posts = await Post.findAll({ 
    where: { userId: user.id },
    include: 'user'
  });
   
     
   // const posts = await Post.findAll({ where: { userId: user.id } });
   // const posts = await Post.findAll({ include: ['user'] });
   // const posts = await Post.findAll();
  
   return res.json(posts);
  } catch(err) {
   console.log(err);
   return res.status(500).json(err);
  }
 }

}

module.exports = new PostController();