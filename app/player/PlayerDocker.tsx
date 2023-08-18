"use client";

import MusicPlayer from "@/app/player/MusicPlayer";
import {
  songSlice,
  selectActiveSong,
  selectActiveSongIdx,
  selectCurrentSongs,
  selectHasActiveSong,
  selectIsPlaying,
} from "@/lib/redux";
import { useCallback } from "react";
import { useDispatch, useSelector } from "@/lib/redux";

const PlayerDocker = () => {
  const dispatch = useDispatch();

  const currentSongs = useSelector(selectCurrentSongs);
  const activeSong = useSelector(selectActiveSong);
  const activeSongIdx = useSelector(selectActiveSongIdx);
  const hasActiveSong = useSelector(selectHasActiveSong);
  const isPlaying = useSelector(selectIsPlaying);

  const { locateSong, togglePlayPauseState, setPlayPauseState } =
    songSlice.actions;

  const togglePlayPause = useCallback(() => {
    if (!hasActiveSong) return;
    dispatch(togglePlayPauseState());
  }, [dispatch, hasActiveSong, togglePlayPauseState]);

  const handleNext = useCallback(
    (shuffleMode: boolean) => {
      dispatch(setPlayPauseState(false));
      if (!shuffleMode) {
        dispatch(locateSong((activeSongIdx + 1) % currentSongs.length));
      } else {
        dispatch(locateSong(Math.floor(Math.random() * currentSongs.length)));
      }
      dispatch(setPlayPauseState(true));
    },
    [
      activeSongIdx,
      currentSongs.length,
      dispatch,
      locateSong,
      setPlayPauseState,
    ]
  );

  const handlePrev = useCallback(
    (shuffleMode: boolean) => {
      dispatch(setPlayPauseState(false));
      if (activeSongIdx === 0) {
        dispatch(locateSong(currentSongs.length - 1));
      } else if (!shuffleMode) {
        dispatch(locateSong(activeSongIdx - 1));
      } else {
        dispatch(locateSong(Math.floor(Math.random() * currentSongs.length)));
      }
      dispatch(setPlayPauseState(true));
    },
    [activeSongIdx, currentSongs.length, dispatch, locateSong]
  );

  return (
    <>
      <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
        <MusicPlayer
          activeSong={activeSong}
          togglePlayPause={togglePlayPause}
          isPlaying={isPlaying}
          onNext={(shuffleMode: boolean) => handleNext(shuffleMode)}
          onPrev={(shuffleMode: boolean) => handlePrev(shuffleMode)}
        />
      </div>
    </>
  );
};

export default PlayerDocker;
