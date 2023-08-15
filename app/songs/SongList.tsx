import List from "./List";
import renderSong from "./renderSong";
import { Song } from "@/lib/redux";

const SongList = ({
  data,
  activeSong,
  isPlaying,
  onPlayPause,
}: {
  data: Song[];
  activeSong: Song | undefined;
  isPlaying: boolean;
  onPlayPause: (idx: number) => void;
}) => {
  return (
    <List
      renderItemFunc={renderSong}
      data={data}
      activeSong={activeSong}
      isPlaying={isPlaying}
      onPlayPause={onPlayPause}
    />
  );
};

export default SongList;
