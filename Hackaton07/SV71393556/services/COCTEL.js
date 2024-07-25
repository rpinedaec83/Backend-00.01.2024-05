import axios from "axios";

const getCoctel = async () => {
  const { data } = await axios.get(
    `${process.env.API_COTEL_URL}/search.php?s=margarita`
  );

  return data;
};

export { getCoctel };