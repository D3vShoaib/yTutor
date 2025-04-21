import ReactPlayer from "react-player";

interface CustomPlayerProps {
  url: string;
}

function CustomPlayer({ url }: CustomPlayerProps) {
  return (
    <div
      className="player-wrapper"
      style={{ position: "relative", paddingTop: "56.25%" }}
    >
      <ReactPlayer
        className="react-player"
        url={url}
        controls
        style={{ color: "white", position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
}

export default CustomPlayer;
