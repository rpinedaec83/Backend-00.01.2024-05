import { request } from "express";
import bcryptjs from "bcryptjs";

import UserModel from "../entity/index.js";

const createUser = async (req = request, resp) => {
  const { firstName, lastName, password, phoneNumber, email, username } =
    req.body;

  //validacion de usuario si existe
  //   UserModel.findOne({ email, username });
  if (!firstName || !password || !phoneNumber || !email || !username) {
    return resp.status(400).json({ message: "se requiere mas datos" });
  }
  console.log("create user");

  const salt = await bcryptjs.genSalt(10);

  const newPassword = await bcryptjs.hash(password, salt);

  const newUser = await UserModel.create({
    firstName,
    lastName,
    password: newPassword,
    phoneNumber,
    email,
    username,
  });
  await newUser.save();

  console.log(newUser);

  return resp.json(newUser);
};

const listUser = async (req = request, resp) => {
  const users = await UserModel.find();

  resp.json(users);
};
export { createUser, listUser };
