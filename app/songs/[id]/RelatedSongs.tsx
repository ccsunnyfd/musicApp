"use client";

import { useCallback } from "react";
import { type RelatedSong } from "@/lib/redux";
import SongBar from "./SongBar";

type RelatedSongsProps = {
  data: RelatedSong[];
  artistId?: string;
  isPlaying: boolean;
  activeSong: RelatedSong | undefined;
  onPlayPauseClick?: (idx: number) => void;
};

const RelatedSongs = ({
  data,
  artistId,
  isPlaying,
  activeSong,
  onPlayPauseClick,
}: RelatedSongsProps) => {
  const isActive = useCallback(
    (song: RelatedSong) =>
      activeSong != undefined && activeSong.key === song.key,
    [activeSong]
  );

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

      <div className="mt-6 w-full flex flex-col">
        {data?.map((song: RelatedSong, idx: number) => (
          <SongBar
            key={`${artistId}-${song.key}-${idx}`}
            song={song}
            idx={idx}
            isPlaying={isPlaying && isActive(song)}
            isActive={isActive(song)}
            onPlayPauseClick={() => onPlayPauseClick && onPlayPauseClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
