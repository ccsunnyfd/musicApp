import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json(
        {
            "properties": {},
            "tracks": [
                {
                    "artists": [
                        {
                            "adamid": "580391756",
                            "alias": "the-chainsmokers",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/580391756/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1168667476&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1168667476?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1170699703",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0b/43/fa/0b43fa3d-9c08-f4dd-de98-756a72d7db01/mzaf_15476902011721181656.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/closer-feat-halsey/1170699510?i=1170699703&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/closer-feat-halsey/1170699510?i=1170699703&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/a1/df/f6/a1dff612-65e9-36ce-1167-c2ec7bee2899/7c048695-1009-4525-8f5a-c1319b768fc9_ami-identity-27852ea90adda198875408ceb0169bd5-2023-07-24T19-18-54.847Z_cropped.png/800x800cc.jpg",
                        "coverart": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/400x400cc.jpg",
                        "coverarthq": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/400x400cc.jpg",
                        "joecolor": "b:ded9b1p:060a0fs:15191at:31342fq:3d3f38"
                    },
                    "key": "324443962",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/a1/df/f6/a1dff612-65e9-36ce-1167-c2ec7bee2899/7c048695-1009-4525-8f5a-c1319b768fc9_ami-identity-27852ea90adda198875408ceb0169bd5-2023-07-24T19-18-54.847Z_cropped.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/324443962/closer-feat-halsey",
                        "html": "https://www.shazam.com/snippets/email-share/324443962?lang=en-US&country=GB",
                        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/324443962",
                        "subject": "Closer (feat. Halsey) - The Chainsmokers",
                        "text": "Closer (feat. Halsey) by The Chainsmokers",
                        "twitter": "I used @Shazam to discover Closer (feat. Halsey) by The Chainsmokers."
                    },
                    "subtitle": "The Chainsmokers",
                    "title": "Closer (feat. Halsey)",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/324443962/closer-feat-halsey"
                },
                {
                    "artists": [
                        {
                            "adamid": "64387566",
                            "alias": "katy-perry",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/64387566/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1445014544&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1445014544?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1442330207",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/ce/c3/da/cec3da3d-b534-cd2c-a3f6-17c1e5d8838c/mzaf_1127506036010278599.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/roar/1442330205?i=1442330207&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/roar/1442330205?i=1442330207&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/4b/23/19/4b2319f0-d705-9c27-f6bc-ab127cb4b9cd/mza_656989125661554021.png/800x800cc.jpg",
                        "coverart": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3f/f9/9f3ff904-2c70-4b70-0501-f57fd330e031/13UAAIM70462.rgb.jpg/400x400cc.jpg",
                        "coverarthq": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3f/f9/9f3ff904-2c70-4b70-0501-f57fd330e031/13UAAIM70462.rgb.jpg/400x400cc.jpg",
                        "joecolor": "b:e4e4dap:412520s:3e2724t:614b45q:5f4d48"
                    },
                    "key": "99848195",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/4b/23/19/4b2319f0-d705-9c27-f6bc-ab127cb4b9cd/mza_656989125661554021.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/99848195/roar",
                        "html": "https://www.shazam.com/snippets/email-share/99848195?lang=en-US&country=GB",
                        "image": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3f/f9/9f3ff904-2c70-4b70-0501-f57fd330e031/13UAAIM70462.rgb.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/99848195",
                        "subject": "Roar - Katy Perry",
                        "text": "Roar by Katy Perry",
                        "twitter": "I used @Shazam to discover Roar by Katy Perry."
                    },
                    "subtitle": "Katy Perry",
                    "title": "Roar",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/99848195/roar"
                },
                {
                    "artists": [
                        {
                            "adamid": "125742557",
                            "alias": "dj-snake",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/125742557/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1440867817",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/72/2a/30/722a30f5-88b3-98ce-a875-ecd9c0b74380/mzaf_12066608607528177542.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/let-me-love-you-feat-justin-bieber/1440867448?i=1440867817&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/let-me-love-you-feat-justin-bieber/1440867448?i=1440867817&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/09/68/06/096806fd-02e9-45e0-5c78-8acc93f9b0ef/mza_12541734581481939892.png/800x800cc.jpg",
                        "coverart": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/38/6d/64/386d64d2-c311-4ea5-0841-99658f6f7253/16UMGIM39232.rgb.jpg/400x400cc.jpg",
                        "coverarthq": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/38/6d/64/386d64d2-c311-4ea5-0841-99658f6f7253/16UMGIM39232.rgb.jpg/400x400cc.jpg",
                        "joecolor": "b:f0f0f2p:000000s:2b251bt:303030q:524e46"
                    },
                    "key": "324194713",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/09/68/06/096806fd-02e9-45e0-5c78-8acc93f9b0ef/mza_12541734581481939892.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/324194713/let-me-love-you-feat-justin-bieber",
                        "html": "https://www.shazam.com/snippets/email-share/324194713?lang=en-US&country=GB",
                        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/38/6d/64/386d64d2-c311-4ea5-0841-99658f6f7253/16UMGIM39232.rgb.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/324194713",
                        "subject": "Let Me Love You (feat. Justin Bieber) - DJ Snake",
                        "text": "Let Me Love You (feat. Justin Bieber) by DJ Snake",
                        "twitter": "I used @Shazam to discover Let Me Love You (feat. Justin Bieber) by DJ Snake."
                    },
                    "subtitle": "DJ Snake",
                    "title": "Let Me Love You (feat. Justin Bieber)",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/324194713/let-me-love-you-feat-justin-bieber"
                },
                {
                    "artists": [
                        {
                            "adamid": "1798556",
                            "alias": "maroon-5",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/1798556/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1444872719&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1444872719?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1396382886",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/84/a9/72/84a972aa-18e0-f3e0-5097-4450165f928d/mzaf_3059007847835781670.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/dont-wanna-know-feat-kendrick-lamar/1396382456?i=1396382886&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/dont-wanna-know-feat-kendrick-lamar/1396382456?i=1396382886&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/c3/3f/9a/c33f9a77-7395-bdfe-8068-a4b66d26531e/3ea423ea-6cf0-498a-a692-cc58da556f11_ami-identity-06acd526b8e5ef0283735a165e8eed70-2023-05-19T16-33-45.049Z_cropped.png/800x800cc.jpg",
                        "coverart": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/6b/d2/a5/6bd2a5bd-8f24-db29-fe40-318d495674a3/17UM1IM32472.rgb.jpg/400x400cc.jpg",
                        "coverarthq": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/6b/d2/a5/6bd2a5bd-8f24-db29-fe40-318d495674a3/17UM1IM32472.rgb.jpg/400x400cc.jpg",
                        "joecolor": "b:ffffffp:070516s:182123t:383744q:464e4f"
                    },
                    "key": "332257654",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/c3/3f/9a/c33f9a77-7395-bdfe-8068-a4b66d26531e/3ea423ea-6cf0-498a-a692-cc58da556f11_ami-identity-06acd526b8e5ef0283735a165e8eed70-2023-05-19T16-33-45.049Z_cropped.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/332257654/dont-wanna-know-feat-kendrick-lamar",
                        "html": "https://www.shazam.com/snippets/email-share/332257654?lang=en-US&country=GB",
                        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/6b/d2/a5/6bd2a5bd-8f24-db29-fe40-318d495674a3/17UM1IM32472.rgb.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/332257654",
                        "subject": "Don't Wanna Know (feat. Kendrick Lamar) - Maroon 5",
                        "text": "Don't Wanna Know (feat. Kendrick Lamar) by Maroon 5",
                        "twitter": "I used @Shazam to discover Don't Wanna Know (feat. Kendrick Lamar) by Maroon 5."
                    },
                    "subtitle": "Maroon 5",
                    "title": "Don't Wanna Know (feat. Kendrick Lamar)",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/332257654/dont-wanna-know-feat-kendrick-lamar"
                },
                {
                    "artists": [
                        {
                            "adamid": "1031397873",
                            "alias": "dua-lipa",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/1031397873/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1258705880&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1258705880?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1434849676",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/c4/49/90/c44990d3-f29d-2c1b-675d-5734c9bbc398/mzaf_4812413267170137084.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/new-rules/1434849473?i=1434849676&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/new-rules/1434849473?i=1434849676&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/aa/2a/be/aa2abed7-b4ab-d732-6d02-69dcd478e645/pr_source.png/800x800cc.jpg",
                        "coverart": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/ff/f3/06/fff3062e-3d63-d7f8-30dd-2ee49010b731/190295559472.jpg/400x400cc.jpg",
                        "coverarthq": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/ff/f3/06/fff3062e-3d63-d7f8-30dd-2ee49010b731/190295559472.jpg/400x400cc.jpg",
                        "joecolor": "b:f7f7f7p:010003s:372b36t:323233q:5e535c"
                    },
                    "key": "357149366",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/aa/2a/be/aa2abed7-b4ab-d732-6d02-69dcd478e645/pr_source.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/357149366/new-rules",
                        "html": "https://www.shazam.com/snippets/email-share/357149366?lang=en-US&country=GB",
                        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/ff/f3/06/fff3062e-3d63-d7f8-30dd-2ee49010b731/190295559472.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/357149366",
                        "subject": "New Rules - Dua Lipa",
                        "text": "New Rules by Dua Lipa",
                        "twitter": "I used @Shazam to discover New Rules by Dua Lipa."
                    },
                    "subtitle": "Dua Lipa",
                    "title": "New Rules",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/357149366/new-rules"
                },
                {
                    "artists": [
                        {
                            "adamid": "580391756",
                            "alias": "the-chainsmokers",
                            "id": "42"
                        },
                        {
                            "adamid": "471744",
                            "alias": "coldplay",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/580391756/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1288888224&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1288888224?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1207440211",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/bd/ab/ac/bdabacec-ee80-8980-db86-5c0e291c7dcb/mzaf_1360561139029991067.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/something-just-like-this/1207440007?i=1207440211&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/something-just-like-this/1207440007?i=1207440211&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/a1/df/f6/a1dff612-65e9-36ce-1167-c2ec7bee2899/7c048695-1009-4525-8f5a-c1319b768fc9_ami-identity-27852ea90adda198875408ceb0169bd5-2023-07-24T19-18-54.847Z_cropped.png/800x800cc.jpg",
                        "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9b/8e/41/9b8e41bd-7642-9466-7f73-c323667c7ea5/886446391144.jpg/400x400cc.jpg",
                        "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9b/8e/41/9b8e41bd-7642-9466-7f73-c323667c7ea5/886446391144.jpg/400x400cc.jpg",
                        "joecolor": "b:4d3a34p:edb668s:dfaa76t:cd9d5dq:c19469"
                    },
                    "key": "342040601",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is5-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/a1/df/f6/a1dff612-65e9-36ce-1167-c2ec7bee2899/7c048695-1009-4525-8f5a-c1319b768fc9_ami-identity-27852ea90adda198875408ceb0169bd5-2023-07-24T19-18-54.847Z_cropped.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/342040601/something-just-like-this",
                        "html": "https://www.shazam.com/snippets/email-share/342040601?lang=en-US&country=GB",
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/9b/8e/41/9b8e41bd-7642-9466-7f73-c323667c7ea5/886446391144.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/342040601",
                        "subject": "Something Just Like This - The Chainsmokers & Coldplay",
                        "text": "Something Just Like This by The Chainsmokers & Coldplay",
                        "twitter": "I used @Shazam to discover Something Just Like This by The Chainsmokers & Coldplay."
                    },
                    "subtitle": "The Chainsmokers & Coldplay",
                    "title": "Something Just Like This",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/342040601/something-just-like-this"
                },
                {
                    "artists": [
                        {
                            "adamid": "278873078",
                            "alias": "bruno-mars",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/278873078/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=392393284&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/392393284?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "578054244",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/a5/27/a8/a527a84c-9962-6673-c848-8aeeb05b4a7c/mzaf_316642142801495743.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/just-the-way-you-are/578054234?i=578054244&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/just-the-way-you-are/578054234?i=578054244&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/6d/ad/28/6dad2828-52c4-01dc-8e33-3ad3c05b73fd/pr_source.png/800x800cc.jpg",
                        "coverart": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/25/6d/95/256d95ea-c58c-074d-b6f1-18f5cb4e6b96/075679956293.jpg/400x400cc.jpg",
                        "coverarthq": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/25/6d/95/256d95ea-c58c-074d-b6f1-18f5cb4e6b96/075679956293.jpg/400x400cc.jpg",
                        "joecolor": "b:f7bb25p:0a0506s:1d0f02t:3a290cq:483109"
                    },
                    "key": "52754376",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/6d/ad/28/6dad2828-52c4-01dc-8e33-3ad3c05b73fd/pr_source.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/52754376/just-the-way-you-are",
                        "html": "https://www.shazam.com/snippets/email-share/52754376?lang=en-US&country=GB",
                        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/25/6d/95/256d95ea-c58c-074d-b6f1-18f5cb4e6b96/075679956293.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/52754376",
                        "subject": "Just the Way You Are - Bruno Mars",
                        "text": "Just the Way You Are by Bruno Mars",
                        "twitter": "I used @Shazam to discover Just the Way You Are by Bruno Mars."
                    },
                    "subtitle": "Bruno Mars",
                    "title": "Just the Way You Are",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/52754376/just-the-way-you-are"
                },
                {
                    "artists": [
                        {
                            "adamid": "1798556",
                            "alias": "maroon-5",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/1798556/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1444864514&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1444864514?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1422652341",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/b7/59/d6/b759d6c0-d817-c95c-cf5b-ccdae41ff0f7/mzaf_14100567041763127460.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": true,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/sugar/1422651829?i=1422652341&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/sugar/1422651829?i=1422652341&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/c3/3f/9a/c33f9a77-7395-bdfe-8068-a4b66d26531e/3ea423ea-6cf0-498a-a692-cc58da556f11_ami-identity-06acd526b8e5ef0283735a165e8eed70-2023-05-19T16-33-45.049Z_cropped.png/800x800cc.jpg",
                        "coverart": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ac/20/32/ac203235-b03b-0e60-e03d-1ea1ee53aceb/14UMGIM31675.rgb.jpg/400x400cc.jpg",
                        "coverarthq": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ac/20/32/ac203235-b03b-0e60-e03d-1ea1ee53aceb/14UMGIM31675.rgb.jpg/400x400cc.jpg",
                        "joecolor": "b:6dace4p:0f0a0es:232233t:222b39q:313e56"
                    },
                    "key": "273536255",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is2-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/c3/3f/9a/c33f9a77-7395-bdfe-8068-a4b66d26531e/3ea423ea-6cf0-498a-a692-cc58da556f11_ami-identity-06acd526b8e5ef0283735a165e8eed70-2023-05-19T16-33-45.049Z_cropped.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/273536255/sugar",
                        "html": "https://www.shazam.com/snippets/email-share/273536255?lang=en-US&country=GB",
                        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ac/20/32/ac203235-b03b-0e60-e03d-1ea1ee53aceb/14UMGIM31675.rgb.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/273536255",
                        "subject": "Sugar - Maroon 5",
                        "text": "Sugar by Maroon 5",
                        "twitter": "I used @Shazam to discover Sugar by Maroon 5."
                    },
                    "subtitle": "Maroon 5",
                    "title": "Sugar",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/273536255/sugar"
                },
                {
                    "artists": [
                        {
                            "adamid": "183313439",
                            "alias": "ed-sheeran",
                            "id": "42"
                        },
                        {
                            "adamid": "320569549",
                            "alias": "justin-bieber",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/183313439/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1463546390&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1463546390?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1464545852",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/76/1b/b4/761bb4a6-1a3b-fbdf-fcd2-8b9639245368/mzaf_11332369942220287655.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/i-dont-care/1464545600?i=1464545852&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/i-dont-care/1464545600?i=1464545852&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/24/2a/47/242a479e-5eac-fa17-5db1-5937b226ac04/mza_16354820982611288829.png/800x800cc.jpg",
                        "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/cb/13/65/cb136538-bf34-0224-deed-1993681961b4/190295412791.jpg/400x400cc.jpg",
                        "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/cb/13/65/cb136538-bf34-0224-deed-1993681961b4/190295412791.jpg/400x400cc.jpg",
                        "joecolor": "b:fafafap:000000s:232323t:323232q:4e4e4e"
                    },
                    "key": "466605318",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/24/2a/47/242a479e-5eac-fa17-5db1-5937b226ac04/mza_16354820982611288829.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/466605318/i-dont-care",
                        "html": "https://www.shazam.com/snippets/email-share/466605318?lang=en-US&country=GB",
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/cb/13/65/cb136538-bf34-0224-deed-1993681961b4/190295412791.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/466605318",
                        "subject": "I Don't Care - Ed Sheeran & Justin Bieber",
                        "text": "I Don't Care by Ed Sheeran & Justin Bieber",
                        "twitter": "I used @Shazam to discover I Don't Care by Ed Sheeran & Justin Bieber."
                    },
                    "subtitle": "Ed Sheeran & Justin Bieber",
                    "title": "I Don't Care",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/466605318/i-dont-care"
                },
                {
                    "artists": [
                        {
                            "adamid": "463049461",
                            "alias": "clean-bandit",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/463049461/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1231975520&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1231975520?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1436738923",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c3/ea/36/c3ea366f-00f4-bbf9-c1a6-f11339e887cc/mzaf_7762474531384023481.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/symphony-feat-zara-larsson/1436738680?i=1436738923&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/symphony-feat-zara-larsson/1436738680?i=1436738923&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/69/04/cf/6904cf36-b391-6f67-1867-405001e65193/pr_source.png/800x800cc.jpg",
                        "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3b/26/be/3b26bed0-2f02-0a84-b899-04d82fa27cbc/190295552596.jpg/400x400cc.jpg",
                        "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3b/26/be/3b26bed0-2f02-0a84-b899-04d82fa27cbc/190295552596.jpg/400x400cc.jpg",
                        "joecolor": "b:2e160ap:a4dae9s:7cc4e0t:8cb2bdq:6ca1b5"
                    },
                    "key": "342980369",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/69/04/cf/6904cf36-b391-6f67-1867-405001e65193/pr_source.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/342980369/symphony-feat-zara-larsson",
                        "html": "https://www.shazam.com/snippets/email-share/342980369?lang=en-US&country=GB",
                        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3b/26/be/3b26bed0-2f02-0a84-b899-04d82fa27cbc/190295552596.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/342980369",
                        "subject": "Symphony (feat. Zara Larsson) - Clean Bandit",
                        "text": "Symphony (feat. Zara Larsson) by Clean Bandit",
                        "twitter": "I used @Shazam to discover Symphony (feat. Zara Larsson) by Clean Bandit."
                    },
                    "subtitle": "Clean Bandit",
                    "title": "Symphony (feat. Zara Larsson)",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/342980369/symphony-feat-zara-larsson"
                },
                {
                    "artists": [
                        {
                            "adamid": "338264227",
                            "alias": "ellie-goulding",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/338264227/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1445020923&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1445020923?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1440817913",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d8/62/fb/d862fb62-9ae4-d1e3-571b-21f9c2e9f7df/mzaf_14626971657962138931.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/burn/1440817635?i=1440817913&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/burn/1440817635?i=1440817913&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/1d/d5/18/1dd51831-9e62-17a8-5d83-e1cedb3b087a/33005279-483f-4fd7-b4ee-7999a081481d_ami-identity-481ed17acbda010ef60497462be34298-2023-02-01T18-09-02.248Z_cropped.png/800x800cc.jpg",
                        "coverart": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/76/0b/25/760b2571-3220-80ac-2374-0794494f88b0/13UAAIM44623.rgb.jpg/400x400cc.jpg",
                        "coverarthq": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/76/0b/25/760b2571-3220-80ac-2374-0794494f88b0/13UAAIM44623.rgb.jpg/400x400cc.jpg",
                        "joecolor": "b:001534p:ebd9f0s:eb60a0t:bcb2caq:bc518a"
                    },
                    "key": "91365869",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/1d/d5/18/1dd51831-9e62-17a8-5d83-e1cedb3b087a/33005279-483f-4fd7-b4ee-7999a081481d_ami-identity-481ed17acbda010ef60497462be34298-2023-02-01T18-09-02.248Z_cropped.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/91365869/burn",
                        "html": "https://www.shazam.com/snippets/email-share/91365869?lang=en-US&country=GB",
                        "image": "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/76/0b/25/760b2571-3220-80ac-2374-0794494f88b0/13UAAIM44623.rgb.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/91365869",
                        "subject": "Burn - Ellie Goulding",
                        "text": "Burn by Ellie Goulding",
                        "twitter": "I used @Shazam to discover Burn by Ellie Goulding."
                    },
                    "subtitle": "Ellie Goulding",
                    "title": "Burn",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/91365869/burn"
                },
                {
                    "artists": [
                        {
                            "adamid": "64387566",
                            "alias": "katy-perry",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/64387566/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "716153701",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/e5/aa/77/e5aa7781-0478-d566-6a2c-00a56a3050ea/mzaf_12281135259195694937.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/firework/716153185?i=716153701&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/firework/716153185?i=716153701&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/4b/23/19/4b2319f0-d705-9c27-f6bc-ab127cb4b9cd/mza_656989125661554021.png/800x800cc.jpg",
                        "coverart": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/04/9d/ba/049dbaef-e018-f641-2c82-4599ec755b19/13UABIM57788.rgb.jpg/400x400cc.jpg",
                        "coverarthq": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/04/9d/ba/049dbaef-e018-f641-2c82-4599ec755b19/13UABIM57788.rgb.jpg/400x400cc.jpg",
                        "joecolor": "b:d6c5cdp:0f0d0ds:120d0et:373133q:393234"
                    },
                    "key": "53224764",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/4b/23/19/4b2319f0-d705-9c27-f6bc-ab127cb4b9cd/mza_656989125661554021.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/53224764/firework",
                        "html": "https://www.shazam.com/snippets/email-share/53224764?lang=en-US&country=GB",
                        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/04/9d/ba/049dbaef-e018-f641-2c82-4599ec755b19/13UABIM57788.rgb.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/53224764",
                        "subject": "Firework - Katy Perry",
                        "text": "Firework by Katy Perry",
                        "twitter": "I used @Shazam to discover Firework by Katy Perry."
                    },
                    "subtitle": "Katy Perry",
                    "title": "Firework",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/53224764/firework"
                },
                {
                    "artists": [
                        {
                            "adamid": "280215834",
                            "alias": "selena-gomez",
                            "id": "42"
                        },
                        {
                            "adamid": "980795202",
                            "alias": "marshmello",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/280215834/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1444617425&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1444617425?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1445055017",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/d5/66/1d/d5661da0-113e-6b34-490e-69a8376ed413/mzaf_15219932757577605093.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/wolves/1445055015?i=1445055017&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/wolves/1445055015?i=1445055017&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/c6/ad/89/c6ad8961-acb3-0aca-0b2b-c2ce53186be8/mza_10453437906312002458.png/800x800cc.jpg",
                        "coverart": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/3a/e5/12/3ae51282-a318-71d1-085f-f4d621de44e6/17UM1IM41679.rgb.jpg/400x400cc.jpg",
                        "coverarthq": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/3a/e5/12/3ae51282-a318-71d1-085f-f4d621de44e6/17UM1IM41679.rgb.jpg/400x400cc.jpg",
                        "joecolor": "b:032048p:fefefes:b9c7e3t:cbd1d9q:95a6c4"
                    },
                    "key": "380160889",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/c6/ad/89/c6ad8961-acb3-0aca-0b2b-c2ce53186be8/mza_10453437906312002458.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/380160889/wolves",
                        "html": "https://www.shazam.com/snippets/email-share/380160889?lang=en-US&country=GB",
                        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/3a/e5/12/3ae51282-a318-71d1-085f-f4d621de44e6/17UM1IM41679.rgb.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/380160889",
                        "subject": "Wolves - Selena Gomez & Marshmello",
                        "text": "Wolves by Selena Gomez & Marshmello",
                        "twitter": "I used @Shazam to discover Wolves by Selena Gomez & Marshmello."
                    },
                    "subtitle": "Selena Gomez & Marshmello",
                    "title": "Wolves",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/380160889/wolves"
                },
                {
                    "artists": [
                        {
                            "adamid": "63346553",
                            "alias": "rihanna",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/63346553/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1445834283&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1445834283?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1440804863",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/c1/47/8c/c1478c9c-7a90-2890-3f5c-f853d46df79f/mzaf_6374559355686172288.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/only-girl-in-the-world/1440804666?i=1440804863&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/only-girl-in-the-world/1440804666?i=1440804863&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/14/9d/76/149d76d9-cca6-b8e1-146f-e95a9802db13/mza_2396005047706780053.png/800x800cc.jpg",
                        "coverart": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/54/d3/3a/54d33ac8-5990-b669-fe5c-e1316a9ce83b/10UMGIM29115.rgb.jpg/400x400cc.jpg",
                        "coverarthq": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/54/d3/3a/54d33ac8-5990-b669-fe5c-e1316a9ce83b/10UMGIM29115.rgb.jpg/400x400cc.jpg",
                        "joecolor": "b:af2075p:ffffffs:ffd4aft:eed2e3q:eeb0a3"
                    },
                    "key": "99507762",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/14/9d/76/149d76d9-cca6-b8e1-146f-e95a9802db13/mza_2396005047706780053.png/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/99507762/only-girl-in-the-world",
                        "html": "https://www.shazam.com/snippets/email-share/99507762?lang=en-US&country=GB",
                        "image": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/54/d3/3a/54d33ac8-5990-b669-fe5c-e1316a9ce83b/10UMGIM29115.rgb.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/99507762",
                        "subject": "Only Girl (In the World) - Rihanna",
                        "text": "Only Girl (In the World) by Rihanna",
                        "twitter": "I used @Shazam to discover Only Girl (In the World) by Rihanna."
                    },
                    "subtitle": "Rihanna",
                    "title": "Only Girl (In the World)",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/99507762/only-girl-in-the-world"
                },
                {
                    "artists": [
                        {
                            "adamid": "398128",
                            "alias": "justin-timberlake",
                            "id": "42"
                        }
                    ],
                    "highlightsurls": {
                        "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/398128/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1114634523&channel=",
                        "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1114634523?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel="
                    },
                    "hub": {
                        "actions": [
                            {
                                "id": "1110121977",
                                "name": "apple",
                                "type": "applemusicplay"
                            },
                            {
                                "name": "apple",
                                "type": "uri",
                                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/1b/8f/e5/1b8fe56f-a699-debb-5497-f78f7943fc71/mzaf_12085688689194930137.plus.aac.ep.m4a"
                            }
                        ],
                        "displayname": "APPLE MUSIC",
                        "explicit": false,
                        "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
                        "options": [
                            {
                                "actions": [
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "applemusicopen",
                                        "uri": "https://music.apple.com/gb/album/cant-stop-the-feeling-original-song-from-dreamworks/1110121889?i=1110121977&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    },
                                    {
                                        "name": "hub:applemusic:deeplink",
                                        "type": "uri",
                                        "uri": "https://music.apple.com/gb/album/cant-stop-the-feeling-original-song-from-dreamworks/1110121889?i=1110121977&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
                                    }
                                ],
                                "beacondata": {
                                    "providername": "applemusic",
                                    "type": "open"
                                },
                                "caption": "OPEN",
                                "colouroverflowimage": false,
                                "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
                                "listcaption": "Open in Apple Music",
                                "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
                                "providername": "applemusic",
                                "type": "open"
                            }
                        ],
                        "type": "APPLEMUSIC"
                    },
                    "images": {
                        "background": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/c3/5c/d0/c35cd003-3afe-ec09-be1a-9bbbf62e3e98/mzl.wplqyahe.jpg/800x800cc.jpg",
                        "coverart": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/52/d0/02/52d002d7-1f7f-8d91-4791-ed04c460ec93/886445894653.jpg/400x400cc.jpg",
                        "coverarthq": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/52/d0/02/52d002d7-1f7f-8d91-4791-ed04c460ec93/886445894653.jpg/400x400cc.jpg",
                        "joecolor": "b:ffffffp:0a0b0ds:222529t:3b3c3dq:4e5054"
                    },
                    "key": "318061300",
                    "layout": "5",
                    "properties": {},
                    "share": {
                        "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/c3/5c/d0/c35cd003-3afe-ec09-be1a-9bbbf62e3e98/mzl.wplqyahe.jpg/800x800cc.jpg",
                        "href": "https://www.shazam.com/track/318061300/cant-stop-the-feeling-original-song-from-dreamworks",
                        "html": "https://www.shazam.com/snippets/email-share/318061300?lang=en-US&country=GB",
                        "image": "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/52/d0/02/52d002d7-1f7f-8d91-4791-ed04c460ec93/886445894653.jpg/400x400cc.jpg",
                        "snapchat": "https://www.shazam.com/partner/sc/track/318061300",
                        "subject": "CAN'T STOP THE FEELING! (Original Song From DreamWorks Animation's \"Trolls\") - Justin Timberlake",
                        "text": "CAN'T STOP THE FEELING! (Original Song From DreamWorks Animation's \"Trolls\") by Justin Timberlake",
                        "twitter": "I used @Shazam to discover CAN'T STOP THE FEELING! (Original Song From DreamWorks Animation's \"Trolls\") by Justin Timberlake."
                    },
                    "subtitle": "Justin Timberlake",
                    "title": "CAN'T STOP THE FEELING! (Original Song From DreamWorks Animation's \"Trolls\")",
                    "type": "MUSIC",
                    "url": "https://www.shazam.com/track/318061300/cant-stop-the-feeling-original-song-from-dreamworks"
                }
            ]
        }
    )
}