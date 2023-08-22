import Image from "next/image";

type DetailsHeaderProps = {
  artistData: {
    attributes: {
      artwork: {
        url: string;
      };
      name: string;
      genreNames: string[];
    };
  };
};

const DetailsHeader = ({ artistData }: DetailsHeaderProps) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div className="absolute inset-0 flex items-center">
      <div className="sm:h-48 h-28 sm:w-48 w-28 relative">
        <Image
          alt="profile"
          src={artistData?.attributes?.artwork?.url
            .replace("{w}", "500")
            .replace("{h}", "500")}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-full border-2 shadow-xl shadow-black"
        />
      </div>

      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
          {artistData?.attributes?.name}
        </p>

        <p className="text-base text-gray-400 mt-2">
          {artistData?.attributes?.genreNames[0]}
        </p>
      </div>
    </div>

    <div className="w-full sm:h-44 h-24" />
  </div>
);

export default DetailsHeader;
