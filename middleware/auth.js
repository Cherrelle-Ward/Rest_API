// // $ npm install bcrypt jsonwebtoken passport passport-jwt passport-local
// const bcrypt = require("bcrypt");
// const ExtractJWT = require("passport-jwt").ExtractJwt;
// const JWTStrategy = require("passport-jwt").Strategy;
// const LocalStrategy = require("passport-local").Strategy;
// const User = (require = "../models/user");

// const register = async (name, password, next) => {
//   const saltRounds = parseInt(process.env.SALT_ROUNDS);
//   try {
//     if (!name) {
//       throw new Error("A name was not provided");
//     }
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hash = await bcrypt.has(password, salt);
//     // sequelize user.build
//     const user = await User.build({ name, password: hash });
//     try {
//       await user.save();
//       next(null, user);
//     } catch (error) {
//       next(null, {});
//     }
//   } catch (error) {
//     next(error);
//   }
// };
// const login = async (name, password, next) => {
//   console.log("got here login");
//   try {
//     const user = await User.findOne({ where: { name } });
//     if (!user) {
//       return next(null, false, { msg: "Incorrect Username" });
//     }
//     const match = await bcrypt.compare(password, user.password);
//     return match
//       ? next(null, user)
//       : next(null, false, { msg: "incorrect password" });
//   } catch (error) {
//     next(error);
//   }
// };
// const verify = () => 0;
// // jwt
// const verifyStrategy = 0;
// // local
// const registerStrategy = new LocalStrategy(
//   { usernameField: "name", passwordField: "password" },
//   register
// );
// const loginStrategy = new loginStrategy(login);

// module.exports = {
//   verifyStrategy,
//   registerStrategy,
//   loginStrategy,
// };
