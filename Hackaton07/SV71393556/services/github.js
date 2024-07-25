import axios from "axios";

const getUserByUsername = async (username = "") => {
  const { data } = await axios.get(
    `${process.env.API_GITHUB_URL}/users/${username}`
  );

  return data;
};

const getUserReposByUsername = async (username = "") => {
  const { data } = await axios.get(
    `${process.env.API_GITHUB_URL}/users/${username}/repos`
  );
  return data;
};
export { getUserByUsername, getUserReposByUsername };
