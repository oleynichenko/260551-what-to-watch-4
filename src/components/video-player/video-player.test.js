import VideoPlayer from "@components/video-player/video-player";

const movie = {
  id: 5,
  title: `Revenant`,
  image: `img/revenant.jpg`,
  preview: `path`
};

describe(`VideoPlayerComponent`, () => {
  it(`should render VideoPlayer`, () => {
    const tree = renderer.create(
        <VideoPlayer
          isPlaying={false}
          poster={movie.image}
          src={movie.preview}
          isMuted={true}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
