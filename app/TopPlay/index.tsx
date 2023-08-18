"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import TopChartCard from "./TopChartCard";
import TopArtistsSwiper from "./TopArtistsSwiper";
import {
  useSelector,
  useDispatch,
  songSlice,
  selectActiveSong,
  selectIsPlaying,
  type Song,
  selectCurrentSongs,
  selectActiveSongIdx,
} from "@/lib/redux";

const TopPlay = () => {
  const dispatch = useDispatch();
  const { togglePlayPauseState, setPlayPauseState, locateSong } =
    songSlice.actions;
  const activeSong = useSelector(selectActiveSong);
  const isPlaying = useSelector(selectIsPlaying);
  const activeSongIdx = useSelector(selectActiveSongIdx);

  const divRef = useRef<HTMLDivElement>(null);
  const songs = useSelector(selectCurrentSongs);

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const topPlays = useMemo(() => songs?.slice(0, 5), [songs]);

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

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link href="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song: Song, idx: number) => (
            <TopChartCard
              key={song.key}
              song={song}
              idx={idx}
              isPlaying={isPlaying && activeSong?.key === song.key}
              isActive={activeSong?.key === song.key}
              onPlayPauseClick={() => handlePlayPauseClicked(idx)}
            />
          ))}
        </div>
      </div>

      <TopArtistsSwiper topPlays={topPlays} />
    </div>
  );
};

export default TopPlay;
