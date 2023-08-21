import { type RelatedSong } from "@/lib/redux";
import Image from "next/image";
import Link from "next/link";

type DetailsHeaderProps = {
  songData: {
    title: string;
    images: {
      coverart: string;
    };
    artists: [
      {
        adamid: string;
      }
    ];
    genres: {
      primary: string;
    };
    subtitle: string;
  };
};

const DetailsHeader = ({ songData }: DetailsHeaderProps) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div className="absolute inset-0 flex items-center">
      <div className="sm:h-48 h-28 sm:w-48 w-28 relative">
        <Image
          alt="profile"
          src={songData?.images?.coverart}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-full border-2 shadow-xl shadow-black"
        />
      </div>

      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
          {songData?.title}
        </p>
        <Link href={`/artists/${songData?.artists[0]?.adamid}`}>
          <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
        </Link>

        <p className="text-base text-gray-400 mt-2">
          {songData?.genres?.primary}
        </p>
      </div>
    </div>

    <div className="w-full sm:h-44 h-24" />
  </div>
);

export default DetailsHeader;
