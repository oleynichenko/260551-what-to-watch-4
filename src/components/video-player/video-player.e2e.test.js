import VideoPlayer from "@components/video-player/video-player";

const movie = {
  id: 5,
  title: `Revenant`,
  image: `img/revenant.jpg`,
  preview: `path`
};

describe(`VideoPlayer`, () => {
  it(`should be playing when isPlaying turns to true`, () => {

    const videoPlayer = Enzyme.mount(
        <VideoPlayer
          isPlaying={false}
          poster={movie.image}
          src={movie.preview}
          isMuted={true}
        />
    );

    const {_videoRef} = videoPlayer.instance();

    window.HTMLMediaElement.prototype.play = () => {};
    jest.spyOn(_videoRef.current, `play`);

    videoPlayer.setProps({
      isPlaying: true
    });

    expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
  });

  it(`should pause after paused isPlaying turns to false`, () => {
    const videoPlayer = Enzyme.mount(
        <VideoPlayer
          isPlaying={true}
          poster={movie.image}
          src={movie.preview}
          isMuted={true}
        />
    );

    const {_videoRef} = videoPlayer.instance();

    window.HTMLMediaElement.prototype.load = () => {};
    jest.spyOn(_videoRef.current, `load`);

    videoPlayer.setProps({
      isPlaying: false
    });

    expect(_videoRef.current.load).toHaveBeenCalledTimes(1);
  });
});
