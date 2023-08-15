import { Song } from "@/lib/redux";
import { ReactNode } from "react";

type renderSongProps = {
  song: Song;
  isActive: boolean;
  isPlaying: boolean;
  idx: number;
  onPlayPause: (idx: number) => void;
};

type ListProps = {
  renderItemFunc: ({
    song,
    isActive,
    isPlaying,
    idx,
    onPlayPause,
  }: renderSongProps) => ReactNode;
  data: Song[];
  activeSong: Song | undefined;
  isPlaying: boolean;
  onPlayPause: (idx: number) => void;
};

export default function List({
  renderItemFunc,
  data = [],
  activeSong,
  isPlaying,
  onPlayPause,
}: ListProps) {
  const elements = data.map((item, idx) => {
    const isActive = activeSong?.key === item?.key;
    return renderItemFunc({
      song: item,
      isActive,
      isPlaying,
      idx,
      onPlayPause,
    });
  });

  return (
    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {elements}
    </div>
  );
}
