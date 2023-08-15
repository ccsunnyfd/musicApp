"use client";

import { genres } from "@/public/assets/constants";

import Error from "./components/Error";
import Loader from "./components/Loader";

import { useGetTopChartsQuery } from "@/app/services/shazamCore";
import {
  selectActiveSong,
  selectActiveSongIdx,
  selectCurrentSongs,
  selectIsPlaying,
} from "@/lib/redux/slices/songSlice";
import { useDispatch, useSelector } from "react-redux";
import { songSlice } from "@/lib/redux";
import { useCallback, useEffect } from "react";
import SongList from "./songs/SongList";

const Page = () => {
  const dispatch = useDispatch();
  const { setSongs, setPlayPauseState, locateSong, togglePlayPauseState } =
    songSlice.actions;
  const activeSong = useSelector(selectActiveSong);
  const songs = useSelector(selectCurrentSongs);
  const isPlaying = useSelector(selectIsPlaying);
  const activeSongIdx = useSelector(selectActiveSongIdx);

  const { data, isFetching, error } = useGetTopChartsQuery(null);

  useEffect(() => {
    if (data?.tracks) {
      dispatch(setSongs(data.tracks));
    }
  }, [data, dispatch, setSongs]);

  const handleSongCardClicked = useCallback(
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

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = "Pop";

  return (
    <div className="flex flex-col">
      <div
        className="w-full flex justify-between items-center
       sm:flex-row flex-col mt-4 mb-10"
      >
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm
           rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <SongList
        data={songs}
        activeSong={activeSong}
        isPlaying={isPlaying}
        onPlayPause={handleSongCardClicked}
      />
    </div>
  );
};

export default Page;
