import Link from "next/link";

import PlayPause from "../components/PlayPause";
import Image from "next/image";
import { RelatedSong } from "@/lib/redux";

type renderSongProps = {
  song: RelatedSong;
  isActive: boolean;
  isPlaying: boolean;
  idx: number;
  onPlayPause: (idx: number) => void;
};

const renderSong = ({
  song,
  isActive,
  isPlaying,
  idx,
  onPlayPause,
}: renderSongProps) => {
  return (
    <div
      key={song.key}
      className="flex flex-col w-[250px] p-4
     bg-white/5 bg-opacity-80 backdrop-blur-sm
     animate-slideup rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center
           bg-black bg-opacity-50 group-hover:flex ${
             isActive ? "flex bg-black bg-opacity-70" : "hidden"
           }`}
          onClick={() => onPlayPause(idx)}
        >
          <PlayPause isPlaying={isPlaying && isActive} />
        </div>
        <Image
          alt="song_img"
          src={song.images?.coverart}
          width={246}
          height={224}
          className="rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link href={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            href={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default renderSong;
