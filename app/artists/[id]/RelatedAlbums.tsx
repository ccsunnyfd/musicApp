import AlbumBar from "./AlbumBar";
import { Album } from "./album";

type RelatedAlbumsProps = {
  data: Album[];
  artistId: string;
};

const RelatedAlbums = ({ data, artistId }: RelatedAlbumsProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

      <div className="mt-6 w-full flex flex-col">
        {data?.map((album: Album, idx: number) => (
          <AlbumBar
            key={`${artistId}-${album.id}-${idx}`}
            album={album}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedAlbums;
