/* Instruments */
import { shazamCoreApi } from '../../app/services/shazamCore'
import { songSlice } from './slices/songSlice/songSlice'
import { relatedSongSlice } from './slices/relatedSongSlice/relatedSongSlice'

export const reducer = {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: songSlice.reducer,
    relatedPlayer: relatedSongSlice.reducer,
}