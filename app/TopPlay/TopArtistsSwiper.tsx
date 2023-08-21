import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { type RelatedSong } from "@/lib/redux";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";

const TopArtistsSwiper = ({ topPlays }: { topPlays: RelatedSong[] }) => {
  return (
    <div className="w-full flex flex-col mt-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white font-bold text-2xl">Top Artists</h2>
        <Link href="/top-artists">
          <p className="text-gray-300 text-base cursor-pointer">See more</p>
        </Link>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        className="mt-4"
      >
        {topPlays?.slice(0, 5).map((artist) => (
          <SwiperSlide
            key={artist?.key}
            style={{ width: "25%", height: "auto" }}
            className="shadow-lg rounded-full animate-slideright"
          >
            <Link href={`/artists/${artist?.artists[0].adamid}`}>
              <Image
                src={artist?.images?.background}
                alt="Name"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopArtistsSwiper;
