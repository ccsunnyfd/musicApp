import { RelatedSong } from "@/lib/redux";
import PlayPause from "../components/PlayPause";
import Image from "next/image";
import Link from "next/link";

type TopChartCardProps = {
  song: RelatedSong;
  idx: number;
  isPlaying: boolean;
  isActive: boolean;
  onPlayPauseClick: () => void;
};

const TopChartCard = ({
  song,
  idx,
  isPlaying,
  isActive,
  onPlayPauseClick,
}: TopChartCardProps) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
      isActive ? "bg-[#4c426e]" : "bg-transparent"
    } py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
    <h3 className="font-bold text-base text-white mr-3">{idx + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <Image
        width={80}
        height={80}
        className="rounded-lg"
        src={song?.images?.coverart}
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link href={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-white">{song?.title}</p>
        </Link>
        <Link href={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
        </Link>
      </div>
    </div>
    <PlayPause isPlaying={isPlaying} onClick={onPlayPauseClick} />
  </div>
);

export default TopChartCard;
