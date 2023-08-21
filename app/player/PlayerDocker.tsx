"use client";

import { usePathname } from "next/navigation";
import MusicPlayer from "@/app/player/MusicPlayer";
import {
  songSlice,
  selectActiveSong,
  selectActiveSongIdx,
  selectCurrentSongs,
  selectHasActiveSong,
  selectIsPlaying,
  selectRelatedCurrentSongs,
  selectRelatedActiveSong,
  selectRelatedActiveSongIdx,
  selectRelatedHasActiveSong,
  selectRelatedIsPlaying,
  relatedSongSlice,
} from "@/lib/redux";
import { useCallback } from "react";
import { useDispatch, useSelector } from "@/lib/redux";
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";

const PlayerDocker = () => {
  const pathname = usePathname();

  const dispatch = useDispatch();

  // discover page:
  const currentSongs = useSelector(selectCurrentSongs);
  const activeSong = useSelector(selectActiveSong);
  const activeSongIdx = useSelector(selectActiveSongIdx);
  const hasActiveSong = useSelector(selectHasActiveSong);
  const isPlaying = useSelector(selectIsPlaying);

  const { locateSong, togglePlayPauseState, setPlayPauseState } =
    songSlice.actions;

  // related songs page:
  const relatedCurrentSongs = useSelector(selectRelatedCurrentSongs);
  const relatedActiveSong = useSelector(selectRelatedActiveSong);
  const relatedActiveSongIdx = useSelector(selectRelatedActiveSongIdx);
  const relatedHasActiveSong = useSelector(selectRelatedHasActiveSong);
  const relatedIsPlaying = useSelector(selectRelatedIsPlaying);

  const {
    locateSong: relatedLocateSong,
    togglePlayPauseState: relatedTogglePlayPauseState,
    setPlayPauseState: relatedSetPlayPauseState,
  } = relatedSongSlice.actions;

  const togglePlayPause = useCallback(
    (
      hasActiveSong: boolean,
      togglePlayPauseState: ActionCreatorWithoutPayload
    ) => {
      if (!hasActiveSong) return;
      dispatch(togglePlayPauseState());
    },
    [dispatch]
  );

  const handleNext = useCallback(
    (
      shuffleMode: boolean,
      setPlayPauseState: ActionCreatorWithPayload<boolean>,
      locateSong: ActionCreatorWithPayload<number>,
      activeSongIdx: number,
      total: number
    ) => {
      dispatch(setPlayPauseState(false));
      if (!shuffleMode) {
        dispatch(locateSong((activeSongIdx + 1) % total));
      } else {
        dispatch(locateSong(Math.floor(Math.random() * total)));
      }
      dispatch(setPlayPauseState(true));
    },
    [dispatch]
  );

  const handlePrev = useCallback(
    (
      shuffleMode: boolean,
      setPlayPauseState: ActionCreatorWithPayload<boolean>,
      locateSong: ActionCreatorWithPayload<number>,
      activeSongIdx: number,
      total: number
    ) => {
      dispatch(setPlayPauseState(false));
      if (activeSongIdx === 0) {
        dispatch(locateSong(total - 1));
      } else if (!shuffleMode) {
        dispatch(locateSong(activeSongIdx - 1));
      } else {
        dispatch(locateSong(Math.floor(Math.random() * total)));
      }
      dispatch(setPlayPauseState(true));
    },
    [dispatch]
  );

  return (
    <>
      <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
        {pathname === "/" && (
          <MusicPlayer
            activeSong={activeSong}
            togglePlayPause={() =>
              togglePlayPause(hasActiveSong, togglePlayPauseState)
            }
            isPlaying={isPlaying}
            onNext={(shuffleMode: boolean) =>
              handleNext(
                shuffleMode,
                setPlayPauseState,
                locateSong,
                activeSongIdx,
                currentSongs.length
              )
            }
            onPrev={(shuffleMode: boolean) =>
              handlePrev(
                shuffleMode,
                setPlayPauseState,
                locateSong,
                activeSongIdx,
                currentSongs.length
              )
            }
          />
        )}
        {pathname.startsWith("/songs") && (
          <MusicPlayer
            activeSong={relatedActiveSong}
            togglePlayPause={() =>
              togglePlayPause(relatedHasActiveSong, relatedTogglePlayPauseState)
            }
            isPlaying={relatedIsPlaying}
            onNext={(shuffleMode: boolean) =>
              handleNext(
                shuffleMode,
                relatedSetPlayPauseState,
                relatedLocateSong,
                relatedActiveSongIdx,
                relatedCurrentSongs.length
              )
            }
            onPrev={(shuffleMode: boolean) =>
              handlePrev(
                shuffleMode,
                setPlayPauseState,
                locateSong,
                activeSongIdx,
                currentSongs.length
              )
            }
          />
        )}
      </div>
    </>
  );
};

export default PlayerDocker;
