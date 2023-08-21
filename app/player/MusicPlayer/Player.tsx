"use client";

/* eslint-disable jsx-a11y/media-has-caption */
import { RelatedSong } from "@/lib/redux";
import { useRef, useEffect, useCallback, ReactEventHandler } from "react";

type PlayerProps = {
  activeSong: RelatedSong;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  onEnded: () => void;
  onTimeUpdate: ReactEventHandler<HTMLAudioElement>;
  onLoadedData: ReactEventHandler<HTMLAudioElement>;
  repeatMode: boolean;
};

const Player = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  repeatMode,
}: PlayerProps) => {
  const audoRef = useRef<HTMLAudioElement>(null);
  // eslint-disable-next-line no-unused-expressions
  if (audoRef.current) {
    if (isPlaying) {
      audoRef.current.play();
    } else {
      audoRef.current.pause();
    }
  }

  const setVolume = useCallback(() => {
    audoRef.current!.volume = volume;
  }, [volume]);
  useEffect(() => setVolume(), [setVolume]);

  const setSeekTime = useCallback(() => {
    audoRef.current!.currentTime = seekTime;
  }, [seekTime]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => setSeekTime(), [setSeekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={audoRef}
      loop={repeatMode}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
