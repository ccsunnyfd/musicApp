"use client";

import { useSelector, useDispatch } from "@/lib/redux";

import {
  selectRelatedActiveSong,
  selectRelatedActiveSongIdx,
  selectRelatedIsPlaying,
  relatedSongSlice,
  selectRelatedCurrentSongs,
} from "@/lib/redux/slices/relatedSongSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "@/app/services/shazamCore";
import Loader from "@/app/components/Loader";
import Error from "@/app/components/Error";
import DetailsHeader from "./DetailsHeader";
import RelatedSongs from "./RelatedSongs";
import { useCallback, useEffect } from "react";

const SongDetails = ({ params }: { params: { id: string } }) => {
  const { id: songid } = params;

  const { setSongs, locateSong, setPlayPauseState, togglePlayPauseState } =
    relatedSongSlice.actions;

  const dispatch = useDispatch();

  const currentSongs = useSelector(selectRelatedCurrentSongs);
  const isPlaying = useSelector(selectRelatedIsPlaying);
  const activeSong = useSelector(selectRelatedActiveSong);
  const activeSongIdx = useSelector(selectRelatedActiveSongIdx);

  const {
    data: relatedSongsData,
    isFetching: isFetchinRelatedSongs,
    error: getSongRelatedError,
  } = useGetSongRelatedQuery({ songid });
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error: getSongDetailsError,
  } = useGetSongDetailsQuery({ songid });

  useEffect(() => {
    if (relatedSongsData?.tracks) {
      dispatch(setSongs(relatedSongsData.tracks));
    }
  }, [relatedSongsData, dispatch, setSongs]);

  const handlePlayPauseClicked = useCallback(
    (idx: number) => {
      if (activeSongIdx == idx) {
        dispatch(togglePlayPauseState());
      } else {
        dispatch(setPlayPauseState(false));
        dispatch(locateSong(idx));
        dispatch(setPlayPauseState(true));
      }
    },
    [
      activeSongIdx,
      dispatch,
      locateSong,
      setPlayPauseState,
      togglePlayPauseState,
    ]
  );

  if (isFetchingSongDetails && isFetchinRelatedSongs) {
    return <Loader title="Searching song details" />;
  }

  if (getSongRelatedError || getSongDetailsError) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <DetailsHeader songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1]?.text.map((line: string, i: number) => (
              <p
                key={`lyrics-${line}-${i}`}
                className="text-gray-400 text-base my-1"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, No lyrics found!
            </p>
          )}
        </div>
      </div>

      <RelatedSongs
        data={currentSongs}
        isPlaying={isPlaying}
        activeSong={activeSong}
        onPlayPauseClick={(idx: number) => handlePlayPauseClicked(idx)}
      />
    </div>
  );
};

export default SongDetails;
