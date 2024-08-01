import axios from "axios";

const getMarte = async () => {
  const { data } = await axios.get(
    `${process.env.API_NASA_URL}/?api_key=DEMO_KEY&feedtype=json&ver=1.0`
  );

  return data;
};

export { getMarte };