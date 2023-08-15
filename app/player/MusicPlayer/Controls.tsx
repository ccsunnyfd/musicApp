"use client";

import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { useCallback } from "react";

type ControlsProps = {
  isPlaying: boolean;
  hasPrev: boolean;
  hasNext: boolean;
  repeatMode: boolean;
  setRepeatMode: (current: (prev: boolean) => boolean) => void;
  shuffleMode: boolean;
  setShuffleMode: (current: (prev: boolean) => boolean) => void;
  onPlayPause: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const Controls = ({
  isPlaying,
  hasPrev,
  hasNext,
  repeatMode,
  setRepeatMode,
  shuffleMode,
  setShuffleMode,
  onPlayPause,
  onPrev,
  onNext,
}: ControlsProps) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat
      size={20}
      color={repeatMode ? "red" : "white"}
      onClick={useCallback(
        () => setRepeatMode((prev: boolean) => !prev),
        [setRepeatMode]
      )}
      className="hidden sm:block cursor-pointer"
    />
    {hasPrev && (
      <MdSkipPrevious
        size={30}
        color="#FFF"
        className="cursor-pointer"
        onClick={onPrev}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        size={45}
        color="#FFF"
        onClick={onPlayPause}
        className="cursor-pointer"
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color="#FFF"
        onClick={onPlayPause}
        className="cursor-pointer"
      />
    )}
    {hasNext && (
      <MdSkipNext
        size={30}
        color="#FFF"
        className="cursor-pointer"
        onClick={onNext}
      />
    )}
    <BsShuffle
      size={20}
      color={shuffleMode ? "red" : "white"}
      onClick={useCallback(
        () => setShuffleMode((prev) => !prev),
        [setShuffleMode]
      )}
      className="hidden sm:block cursor-pointer"
    />
  </div>
);

export default Controls;
