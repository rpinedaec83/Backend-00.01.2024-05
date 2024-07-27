import axios from "axios";

const getMaincharacter = async () => {
  const { data } = await axios.get(
    `${process.env.API_RICKMORTY_URL}/character/1,2,3`
  );

  return data;
};

const getDetail = async () => {
    const { data } = await axios.get(
      `${process.env.API_RICKMORTY_URL}/character`
    );
  
    return data;
  };

export { getMaincharacter, getDetail };