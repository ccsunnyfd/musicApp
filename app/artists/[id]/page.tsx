"use client";

import { useSelector, selectActiveSong, selectIsPlaying } from "@/lib/redux";

import Loader from "@/app/components/Loader";
import Error from "@/app/components/Error";
import {
  useGetArtistAlbumsQuery,
  useGetArtistDetailsQuery,
} from "@/app/services/shazamCore";
import DetailsHeader from "@/app/artists/[id]/DetailsHeader";
import RelatedAlbums from "./RelatedAlbums";

const ArtistDetails = ({ params }: { params: { id: string } }) => {
  const { id: artistId } = params;

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error: artistDetailsError,
  } = useGetArtistDetailsQuery(artistId);

  const {
    data: artistAlbums,
    isFetching: isFetchingArtistAlbums,
    error: albumsError,
  } = useGetArtistAlbumsQuery(artistId);

  if (isFetchingArtistDetails || isFetchingArtistAlbums)
    return <Loader title="Loading artist details..." />;

  if (artistDetailsError || albumsError) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistData={artistData?.data[0]} />

      <RelatedAlbums data={artistAlbums?.data} artistId={artistId} />
    </div>
  );
};

export default ArtistDetails;
