import axios from "axios";

const getLista = async () => {
  const { data } = await axios.get(
    `${process.env.API_PRODUCTS_URL}/products`
  );

  return data;
};

export { getLista };