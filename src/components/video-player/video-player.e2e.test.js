import VideoPlayer from "@components/video-player/video-player";

const movie = {
  id: 5,
  title: `Revenant`,
  image: `img/revenant.jpg`,
  preview: `path`
};

describe(`VideoPlayer`, () => {
  it(`should have isPlaying true while playing`, () => {
    const videoPlayer = Enzyme.mount(
        <VideoPlayer
          isPlaying={true}
          poster={movie.image}
          src={movie.preview}
          isMuted={true}
        />
    );

    expect(videoPlayer.state(`isPlaying`)).toEqual(true);
  });

  it(`should have isPlaying false after paused`, () => {
    const videoPlayer = Enzyme.mount(
        <VideoPlayer
          isPlaying={false}
          poster={movie.image}
          src={movie.preview}
          isMuted={true}
        />
    );

    expect(videoPlayer.state(`isPlaying`)).toEqual(false);
  });
});
