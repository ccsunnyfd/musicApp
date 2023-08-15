import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

type PlayPauseProps = {
  isPlaying: boolean;
};

const PlayPause = ({ isPlaying }: PlayPauseProps) =>
  isPlaying ? (
    <FaPauseCircle size={35} className="text-gray-300" />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" />
  );

export default PlayPause;
