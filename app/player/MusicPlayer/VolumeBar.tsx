"use client";

import { ChangeEvent, useCallback } from "react";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

type VolumeBarProps = {
  value: number;
  min: number;
  max: number;
  setVolume: (vol: number) => void;
};

const VolumeBar = ({ value, min, max, setVolume }: VolumeBarProps) => {
  const handleMute = useCallback(() => setVolume(0), [setVolume]);
  const handleVolume = useCallback(() => setVolume(0.5), [setVolume]);

  return (
    <div className="hidden lg:flex flex-auto items-center justify-end">
      {value <= 1 && value > 0.5 && (
        <BsFillVolumeUpFill size={25} color="#FFF" onClick={handleMute} />
      )}
      {value <= 0.5 && value > 0 && (
        <BsVolumeDownFill size={25} color="#FFF" onClick={handleMute} />
      )}
      {value === 0 && (
        <BsFillVolumeMuteFill size={25} color="#FFF" onClick={handleVolume} />
      )}
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={useCallback(
          (event: ChangeEvent<HTMLInputElement>) =>
            setVolume(parseFloat((event.target as HTMLInputElement).value)),
          [setVolume]
        )}
        className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      />
    </div>
  );
};

export default VolumeBar;
