import Image from "next/image";
import { Album } from "./album";

type AlbumBarProps = {
  album: Album;
  idx: number;
};

const AlbumBar = ({ album, idx }: AlbumBarProps) => (
  <div
    className={`w-full flex flex-row items-center
     hover:bg-[#4c426e] bg-transparent py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
    <h3 className="font-bold text-base text-white mr-3">{idx + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <div className="w-20 h-20 relative">
        <Image
          alt={album?.attributes?.albumName}
          src={album?.attributes?.artwork?.url
            .replace("{w}", "125")
            .replace("{h}", "125")}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center mx-3">
        {
          <p className="text-xl font-bold text-white">
            {album?.attributes?.name}
          </p>
        }
        <p className="text-base text-gray-300 mt-1">
          {album?.attributes?.albumName}
        </p>
      </div>
    </div>
  </div>
);

export default AlbumBar;
