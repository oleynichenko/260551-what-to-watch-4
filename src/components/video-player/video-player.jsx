class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const {poster, isMuted, src} = this.props;
    const video = this._videoRef.current;

    video.poster = poster;
    video.muted = isMuted;
    video.src = src;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.poster = ``;
    video.src = ``;
    video.isMuted = false;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    return (
      <video className="player__video" ref={this._videoRef}/>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
};

export default VideoPlayer;
