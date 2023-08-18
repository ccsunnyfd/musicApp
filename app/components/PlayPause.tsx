import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

type PlayPauseProps = {
  isPlaying: boolean;
  onClick?: () => void;
};

const PlayPause = ({ isPlaying, onClick }: PlayPauseProps) =>
  isPlaying ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={() => onClick && onClick()}
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={() => onClick && onClick()}
    />
  );

export default PlayPause;
