import axios from "axios";

const getUser = async () => {
  const { data } = await axios.get(
    `${process.env.API_USER_URL}`
  );

  return data;
};

export { getUser };