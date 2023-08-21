import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface RelatedSong {
  artists: RelatedSongArtist[];
  highlightsurls: Highlightsurls;
  hub: Hub;
  images: Images;
  key: string;
  layout: string;
  share: Share;
  subtitle: string;
  title: string;
  type: TrackType;
  url: string;
}

export interface RelatedSongArtist {
  adamid: string;
  alias: string;
  id: string;
}

interface Highlightsurls {
  artisthighlightsurl: string;
  trackhighlighturl?: string;
}

interface Hub {
  actions: Action[];
  displayname: Displayname;
  explicit: boolean;
  image: string;
  options: Option[];
  type: HubType;
}

interface Action {
  id?: string;
  name: Name;
  type: ActionType;
  uri?: string;
}

enum Name {
  Apple = "apple",
  HubApplemusicDeeplink = "hub:applemusic:deeplink",
}

enum ActionType {
  Applemusicopen = "applemusicopen",
  Applemusicplay = "applemusicplay",
  URI = "uri",
}

enum Displayname {
  AppleMusic = "APPLE MUSIC",
}

interface Option {
  actions: Action[];
  beacondata: Beacondata;
  caption: Caption;
  colouroverflowimage: boolean;
  image: string;
  listcaption: Listcaption;
  overflowimage: string;
  providername: Providername;
  type: BeacondataType;
}

interface Beacondata {
  providername: Providername;
  type: BeacondataType;
}

enum Providername {
  Applemusic = "applemusic",
}

enum BeacondataType {
  Open = "open",
}

enum Caption {
  Open = "OPEN",
}

enum Listcaption {
  OpenInAppleMusic = "Open in Apple Music",
}

enum HubType {
  Applemusic = "APPLEMUSIC",
}

interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

interface Share {
  avatar: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}

enum TrackType {
  Music = "MUSIC",
}

/* Types */
export interface RelatedSongSliceState {
  currentSongs: RelatedSong[]
  activeSongIdx: number
  isPlaying: boolean
  genreListId: string,
}

const initialState: RelatedSongSliceState = {
  currentSongs: [],
  activeSongIdx: -1,
  isPlaying: false,
  genreListId: '',
};

export const relatedSongSlice = createSlice({
  name: 'related',
  initialState,
  reducers: {
    setSongs: (state, action: PayloadAction<RelatedSong[]>) => {
      state.currentSongs = action.payload
    },

    locateSong: (state, action: PayloadAction<number>) => {
      state.activeSongIdx = action.payload;
    },

    togglePlayPauseState: (state) => {
      state.isPlaying = !state.isPlaying;
    },

    setPlayPauseState: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },

    setGenreListId: (state, action: PayloadAction<string>) => {
      state.genreListId = action.payload;
    },
  },
});