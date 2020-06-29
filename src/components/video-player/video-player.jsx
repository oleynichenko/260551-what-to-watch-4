class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {poster, isMuted, src} = this.props;
    const video = this._videoRef.current;

    video.poster = poster;
    video.muted = isMuted;
    video.src = src;

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onload = () => {
      this.setState({
        isPlaying: false,
      });
    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.poster = ``;
    video.src = ``;
    video.isMuted = false;

    video.onplay = null;
    video.onload = null;
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
      return;
    }

    video.load();
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
