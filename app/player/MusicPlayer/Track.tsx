import { Song } from "@/lib/redux";
import Image from "next/image";

type TrackProps = {
  isPlaying: boolean;
  activeSong: Song | undefined;
};

const Track = ({ isPlaying, activeSong }: TrackProps) => {
  return (
    <div className="w-4/12 flex-none flex items-center justify-start">
      <div
        className={`${
          isPlaying && activeSong ? "animate-[spin_3s_linear_infinite]" : ""
        } hidden sm:block h-16 w-16 mr-4`}
      >
        {(activeSong as Song)?.images?.coverart && (
          <Image
            src={(activeSong as Song)?.images?.coverart}
            alt="cover art"
            className="rounded-full"
            width={64}
            height={64}
          />
        )}
      </div>
      <div className="w-[50%]">
        <p className="truncate text-white font-bold text-lg">
          {(activeSong as Song)?.title
            ? (activeSong as Song)?.title
            : "No active Song"}
        </p>
        <p className="truncate text-gray-300">
          {(activeSong as Song)?.subtitle
            ? (activeSong as Song)?.subtitle
            : "No active Song"}
        </p>
      </div>
    </div>
  );
};

export default Track;
