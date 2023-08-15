/* Instruments */
import { shazamCoreApi } from '../../app/services/shazamCore'
import { songSlice } from './slices/songSlice/songSlice'

export const reducer = {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: songSlice.reducer,
}