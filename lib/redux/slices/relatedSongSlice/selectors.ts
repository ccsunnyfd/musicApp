/* Instruments */
import type { ReduxState } from '@/lib/redux'
import { createSelector } from '@reduxjs/toolkit'

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectRelatedPlayer = (state: ReduxState) => state.relatedPlayer
export const selectRelatedIsPlaying = (state: ReduxState) => state.relatedPlayer.isPlaying
export const selectRelatedCurrentSongs = (state: ReduxState) => state.relatedPlayer.currentSongs
export const selectRelatedActiveSongIdx = (state: ReduxState) => state.relatedPlayer.activeSongIdx
export const selectRelatedHasActiveSong = createSelector([selectRelatedCurrentSongs, selectRelatedActiveSongIdx], (songs, index) => index >= 0 && index < songs.length)
export const selectRelatedActiveSong = createSelector([selectRelatedCurrentSongs, selectRelatedHasActiveSong, selectRelatedActiveSongIdx], (songs, hasActiveSong, index) => hasActiveSong ? songs[index] : undefined)

