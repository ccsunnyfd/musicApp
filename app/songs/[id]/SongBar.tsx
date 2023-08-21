import Link from "next/link";
import Image from "next/image";
import PlayPause from "@/app/components/PlayPause";
import { RelatedSong } from "@/lib/redux";

type SongBarProps = {
  song: RelatedSong;
  idx: number;
  isPlaying: boolean;
  isActive: boolean;
  onPlayPauseClick: () => void;
};

const SongBar = ({
  song,
  idx,
  isPlaying,
  isActive,
  onPlayPauseClick,
}: SongBarProps) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
      isActive ? "bg-[#4c426e]" : "bg-transparent"
    } py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
    <h3 className="font-bold text-base text-white mr-3">{idx + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <div className="w-20 h-20 relative">
        <Image
          alt={song?.title}
          src={song?.images?.coverart}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center mx-3">
        {
          <Link href={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">{song?.title}</p>
          </Link>
        }
        <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
      </div>
    </div>
    {<PlayPause isPlaying={isPlaying} onClick={onPlayPauseClick} />}
  </div>
);

export default SongBar;
