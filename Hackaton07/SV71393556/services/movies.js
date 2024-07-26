import axios from "axios";

const getMovie = async () => {
  const { data } = await axios.get(
    `${process.env.API_MOVIES_URL}/movie/now_playing`,
    {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY_MOVIES}`,
        },
      }
  );

  return data;
};

const getMovieselect = async () => {
    const { data } = await axios.get(
      `${process.env.API_MOVIES_URL}/search/movie?query=Inside%20Out%202&include_adult=false&language=en-US&page=1`,
      {
          headers: {
            Authorization: `Bearer ${process.env.API_KEY_MOVIES}`,
          },
        }
    );
  
    return data;
  };

export { getMovie, getMovieselect };