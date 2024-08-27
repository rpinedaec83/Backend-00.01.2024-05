import bcryptjs from "bcryptjs";
import UserModel from "../../users/entity/index.js";

import jsonwebtoken from "jsonwebtoken";

const authLoginCredentials = async (req, resp) => {
  const { email, password } = req.body;

  console.log("data");
  console.log(email, password);
  const foundUser = await UserModel.findOne({ email });

  //validacion

  const match = await bcryptjs.compareSync(password, foundUser.password);

  if (!match) {
    return resp.status(401).json({ message: "Credenciales incorrectas" });
  }

  //crear tokens

  const token = jsonwebtoken.sign(
    { id: foundUser._id },
    process.env.SECRET_TOKEN
  );

  const responseData = {
    token,
    user: foundUser.toJSON(),
  };
  console.log(token);
  return resp.json(responseData);
};

export { authLoginCredentials };
