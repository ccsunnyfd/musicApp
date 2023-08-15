"use client";

import { FormEvent, FormEventHandler, useCallback } from "react";

type SeekbarProps = {
  value: number;
  min: number;
  max: number;
  setSeekTime: (seekTime: number) => void;
  appTime: number;
};

const Seekbar = ({ value, min, max, setSeekTime, appTime }: SeekbarProps) => {
  // converts the time to format 0:00
  const getTime = useCallback(
    (time: number) =>
      `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`,
    []
  );

  return (
    <div className="hidden sm:flex flex-row items-center">
      <button
        type="button"
        onClick={useCallback(
          () => setSeekTime(appTime - 5),
          [appTime, setSeekTime]
        )}
        className="hidden lg:mr-4 lg:block text-white"
      >
        -
      </button>
      <p className="text-white">{value === 0 ? "0:00" : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={useCallback(
          (event: FormEvent<HTMLInputElement>) =>
            setSeekTime(Number((event.target as HTMLInputElement).value)),
          [setSeekTime]
        )}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      <p className="text-white">{max === 0 ? "0:00" : getTime(max)}</p>
      <button
        type="button"
        onClick={useCallback(
          () => setSeekTime(appTime + 5),
          [appTime, setSeekTime]
        )}
        className="hidden lg:ml-4 lg:block text-white"
      >
        +
      </button>
    </div>
  );
};

export default Seekbar;
