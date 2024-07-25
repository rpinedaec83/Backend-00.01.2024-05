import axios from "axios";

const getDolar = async () => {
  const { data } = await axios.get(
    `${process.env.API_Frankfurter_URL}/latest`
  );

  return data;
};

export { getDolar };
