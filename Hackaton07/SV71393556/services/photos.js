import axios from "axios";

const getPhotos = async () => {
  const { data } = await axios.get(
    `${process.env.API_PHOTOS_URL}/photos`
  );

  return data;
};

export { getPhotos };