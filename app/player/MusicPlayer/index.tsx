"use client";

import { type SyntheticEvent, useCallback, useState } from "react";
import { type RelatedSong } from "@/lib/redux";

import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import Track from "./Track";
import VolumeBar from "./VolumeBar";

type MusicPlayerProps = {
  activeSong: RelatedSong | undefined;
  togglePlayPause: () => void;
  isPlaying: boolean;
  onNext: (shuffleMode: boolean) => void;
  onPrev: (shuffleMode: boolean) => void;
};

const MusicPlayer = ({
  activeSong,
  togglePlayPause,
  isPlaying,
  onNext,
  onPrev,
}: MusicPlayerProps) => {
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeatMode, setRepeatMode] = useState(false);
  const [shuffleMode, setShuffleMode] = useState(false);

  const handleEnded = useCallback(
    () => onNext(shuffleMode),
    [onNext, shuffleMode]
  );

  const handleTimeUpdate = useCallback(
    (event: SyntheticEvent<HTMLAudioElement, Event>) =>
      setAppTime((event.target as HTMLAudioElement).currentTime),
    []
  );

  const handleLoadedData = useCallback(
    (event: SyntheticEvent<HTMLAudioElement, Event>) =>
      setDuration((event.target as HTMLAudioElement).duration),
    []
  );

  const handleVolumeChange = useCallback((vol: number) => setVolume(vol), []);

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track isPlaying={isPlaying} activeSong={activeSong} />
      <div className="flex-auto flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          hasPrev={activeSong != undefined}
          hasNext={activeSong != undefined}
          repeatMode={repeatMode}
          setRepeatMode={setRepeatMode}
          shuffleMode={shuffleMode}
          setShuffleMode={setShuffleMode}
          onPlayPause={togglePlayPause}
          onPrev={useCallback(() => onPrev(shuffleMode), [onPrev, shuffleMode])}
          onNext={useCallback(() => onNext(shuffleMode), [onNext, shuffleMode])}
        />
        <Seekbar
          value={appTime}
          min={0}
          max={duration}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        {activeSong && (
          <Player
            activeSong={activeSong as RelatedSong}
            volume={volume}
            isPlaying={isPlaying}
            seekTime={seekTime}
            repeatMode={repeatMode}
            onEnded={handleEnded}
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={handleLoadedData}
          />
        )}
      </div>
      <VolumeBar
        value={volume}
        min={0}
        max={1}
        setVolume={(vol: number) => handleVolumeChange(vol)}
      />
    </div>
  );
};

export default MusicPlayer;
