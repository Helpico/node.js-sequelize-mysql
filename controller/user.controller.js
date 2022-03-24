const { sequelize, User } = require("../models");

class UserController {

  async createUser(req, res) {
   const {name, email, role} = req.body;

   try {
    const user = await User.create({name, email, role});
    console.log(user);
    return res.json(user);
   } catch(err) {
    console.log(err);
    return res.status(400).json(err);
   }
  }

  async getUsers(req, res) {
    try {
      const users = await User.findAll({ include: ['posts'] });
      return res.status(200).json(users);
    } catch(err) {
      return res.status(500).json({error: "Something went wrong!"})
    }
  }

  async getOneUser(req, res) {
    const uuid = req.params.uuid;
 
    try {
      const user = await User.findOne({ 
        where: { uuid },
        include: 'posts'
      });
      return res.json(user);
    } catch (err) {
       return res.status(500).json({error: "Something went wrong"});
    }
  }

  async updateUser(req, res) {
    const uuid = req.params.uuid;
    const { name, email, role } = req.body;
  
    try {
    const user = await User.findOne({ where: { uuid } });
    
    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;

    await user.save();

      return res.json(user);
    } catch (err) {
      return res.status(500).json({error: "Something went wrong"});
    }
  }

  async deleteUser(req, res) {
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
  }

}

module.exports = new UserController();


