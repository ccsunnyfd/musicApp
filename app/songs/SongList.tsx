import List from "./List";
import renderSong from "./renderSong";
import { RelatedSong } from "@/lib/redux";

const SongList = ({
  data,
  activeSong,
  isPlaying,
  onPlayPause,
}: {
  data: RelatedSong[];
  activeSong: RelatedSong | undefined;
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
