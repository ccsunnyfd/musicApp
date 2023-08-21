/* Instruments */
import type { ReduxState } from '@/lib/redux'
import { createSelector } from '@reduxjs/toolkit'

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPlayer = (state: ReduxState) => state.player
export const selectIsPlaying = (state: ReduxState) => state.player.isPlaying
export const selectCurrentSongs = (state: ReduxState) => state.player.currentSongs
export const selectActiveSongIdx = (state: ReduxState) => state.player.activeSongIdx
export const selectHasActiveSong = createSelector([selectCurrentSongs, selectActiveSongIdx], (songs, index) => index >= 0 && index < songs.length)
export const selectActiveSong = createSelector([selectCurrentSongs, selectHasActiveSong, selectActiveSongIdx], (songs, hasActiveSong, index) => hasActiveSong ? songs[index] : undefined)

