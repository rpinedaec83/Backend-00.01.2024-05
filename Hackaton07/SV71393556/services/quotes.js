import axios from "axios";

const getQuote = async () => {
  const { data } = await axios.get(
    `${process.env.API_QUOTES_URL}/qod?language=en`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY_QUOTES}`,
      },
    }
  );

  return data;
};

export { getQuote };
