import React, { useState } from "react";
import CustomPlayer from "./customPlayer";

const YoutubePlayer: React.FC = () => {
  const [inputUrl, setInputUrl] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string>("");

  const handlePlay = () => {
    setVideoUrl(inputUrl);
  };

  return (
    <div className="p-4 rounded-lg  bg-zinc-800 w-full">
      {/* className="p-2 rounded-lg w-full bg-zinc-800" */}
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
        <div className="mt-4">
          <CustomPlayer url={videoUrl} />
        </div>
      )}
    </div>
  );
};

export default YoutubePlayer;
