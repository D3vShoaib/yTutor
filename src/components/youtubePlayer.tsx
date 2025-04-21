import React, { useState } from "react";
import ReactPlayer from "react-player";

const YoutubePlayer: React.FC = () => {
  const [inputUrl, setInputUrl] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string>("");

  const handlePlay = () => {
    setVideoUrl(inputUrl);
  };

  return (
    <div className="p-4 rounded-lg bg-zinc-800 w-full">
      <input
        type="text"
        placeholder="Enter YouTube URL"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        className="border p-2 w-auto rounded bg-zinc-700 text-white mr-2"
      />
      <button
        onClick={handlePlay}
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded"
      >
        Play
      </button>

      {videoUrl && (
        <div
          className="mt-4"
          style={{ position: "relative", paddingTop: "56.25%" }}
        >
          <ReactPlayer
            className="react-player"
            url={videoUrl}
            controls
            style={{ color: "white", position: "absolute", top: 0, left: 0 }}
          />
        </div>
      )}
    </div>
  );
};

export default YoutubePlayer;
