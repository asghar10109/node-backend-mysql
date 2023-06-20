// const userModel = require('../Models/users')
const Sequelize = require('sequelize');

const sequelize = new Sequelize('mealpass', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});



const User = require('../Models/user')(sequelize);



const CryptoJS = require("crypto-js");
const Login_Token_Authentication = require('../Middleware/loginJwt')

const createUser = async (req, res, next) => {
  try {
    const filename = req.file.path;
    const files = `${filename}`.replace("public", "")
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const password = CryptoJS.AES.encrypt(req.body.password, process.env.Secret_password).toString();
    const phone = req.body.phone;
    const avator = `${files}`?.replace(/\\/g, "/");
    const role = req.body.role;
    const query = 'INSERT INTO users (name,email,password,address,avator,phone,role,createdAt,updatedAt) VALUES (?,?,?,?,?,?,?,"2023-06-08 14:30:45","2023-06-08 14:30:45")';
    const values = [name, email, password, address, avator, phone, role];
    try {
      const result = await sequelize.query(query, { replacements: values });
      console.log('User created successfully.');
      console.log("results .......... ", result)
      const user = {

        name: name,
        email: email,
        password: password,
        address: address,
        avator: avator,
        phone: phone,
        role: role
      };


      res.status(201).send({
        message: 'User created successfully',
        data: user
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message: 'Error creating user',
        error: err
      });
    }

  } catch (err) {
    res.send({
      message: err,
      status: 404
    });
  }
}


const LoginUser = async (req, res, next) => {
  const email = req?.body?.email;
  const password = req?.body?.password;

  const query = `SELECT * FROM users where email = '${email}'`;
  const values = [email];

  try {
    const results = await sequelize.query(query, { replacements: values });
    // console.log("........",results)


    if (results.length > 0) {
      const data = results[0];
      const show_password = CryptoJS.AES.decrypt(data[0]?.password, process.env.Secret_password);
      const original_password = show_password.toString(CryptoJS.enc.Utf8);



      if (email === data[0]?.email && password === original_password) {
        console.log("email === data[0]?.email && password === original_password",
          email === data[0]?.email && password === original_password
        )
        res.send({
          message: "Token generated",
          status: 201,
          data: Login_Token_Authentication(data[0], '1h')
        });
      } else {
        res.send({
          message: "Invalid email or password",
          status: 404
        });
      }
    } else {
      res.send({
        message: "User not found",
        status: 404
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: 'Error logging in',
      error: err
    });
  }
}


const updateUsers = async (req, res, next) => {

  const Id = req.id

  // console.log("email",email,"password",password)
  try {
    // var sql = `UPDATE users SET  name='${name}', email='${email}', password='${password}' WHERE id = '${Id}'`;
    // console.log(".....",sql)
    // res.send({
    //   message: "User updated",
    //   status: 201,
    // })
    console.log(req.body.name);
    const updatedValues = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      // Include other fields you want to update
    };
    const result = await User.update(updatedValues, {
      where: { id: Id },
    });
    
      res.send({
        message: 'User updated successfully',
        status: 200,
      });
    // }

  }
  catch (err) {
    res.send({
      message: err,
      status: 404
    })
  }

}


const deleteUser = async (req, res, next) => {
  const Id = req.id// Assuming the user ID is provided in the request parameters

  try {
    const deletedUser = await User.destroy({
      where: { id: Id },
    });

    if (deletedUser) {
      // User deleted successfully
      res.status(200).send({
        message: 'User deleted successfully',
      });
    } else {
      // User not found
      res.status(404).send({
        message: 'User not found',
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: 'Error deleting user',
      error: err,
    });
  }
};


module.exports = {
  createUser,
  LoginUser,
  updateUsers,
  deleteUser

}