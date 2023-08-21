import { RelatedSong } from "@/lib/redux";
import Image from "next/image";

type TrackProps = {
  isPlaying: boolean;
  activeSong: RelatedSong | undefined;
};

const Track = ({ isPlaying, activeSong }: TrackProps) => {
  return (
    <div className="w-4/12 flex-none flex items-center justify-start">
      <div
        className={`${
          isPlaying && activeSong ? "animate-[spin_3s_linear_infinite]" : ""
        } hidden sm:block h-16 w-16 mr-4`}
      >
        {(activeSong as RelatedSong)?.images?.coverart && (
          <Image
            src={(activeSong as RelatedSong)?.images?.coverart}
            alt="cover art"
            className="rounded-full"
            width={64}
            height={64}
          />
        )}
      </div>
      <div className="w-[50%]">
        <p className="truncate text-white font-bold text-lg">
          {(activeSong as RelatedSong)?.title
            ? (activeSong as RelatedSong)?.title
            : "No active Song"}
        </p>
        <p className="truncate text-gray-300">
          {(activeSong as RelatedSong)?.subtitle
            ? (activeSong as RelatedSong)?.subtitle
            : "No active Song"}
        </p>
      </div>
    </div>
  );
};

export default Track;
