import React from "react";
import ReactPlayer from "react-player";

interface CustomPlayerProps {
  url: string;
}

const CustomPlayer: React.FC<CustomPlayerProps> = ({ url }) => {
  return (
    <div
      className="player-wrapper"
      style={{ position: "relative", paddingTop: "56.25%" }}
    >
      <ReactPlayer
        className="react-player"
        url={url}
        controls
        width="100%"
        height="100%"
        style={{ color: "white", position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
};

export default CustomPlayer;
