export const transformMovie = (data) => {
  return {
    id: data.id,
    title: data.name,
    genres: data.genre ? [data.genre] : [],
    releaseDate: data.released,
    runTime: data.run_time,
    cover: data.background_image,
    poster: data.poster_image,
    image: data.preview_image,
    preview: data.preview_video_link,
    rating: {
      score: data.rating,
      count: data.scores_count,
    },
    description: data.description,
    director: data.director,
    cast: data.starring.join(`, `),
    backgroundColor: data.background_color,
    isFavorite: data.is_favorite,
    videoLink: data.video_link,
  };
};


