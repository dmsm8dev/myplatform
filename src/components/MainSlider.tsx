import React from 'react';
import st from '../assets/scss/components/MainSlider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// @ts-ignore

import MainSliderItem from "./MainSliderItem";
import blogers from '../assets/blogers.json'
import {Autoplay} from "swiper/modules";

const MainSlider = () => {
  const sliderList = blogers;

  return (
    <div className={st.sliderWrapper}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3} // базовое для десктопа
        breakpoints={{
          0: { slidesPerView: 2 },      // мобильные
          768: { slidesPerView: 3 },    // планшеты/малый десктоп
          1200: { slidesPerView: 4 },   // большой экран
        }}
        autoplay={{
          delay: 3000,      // 3 сек между слайдами
          disableOnInteraction: false,
        }}
        onSwiper={(swiper: any) => {
          // Останавливаем autoplay при наведении
          const wrapper = swiper.el;
          wrapper.addEventListener('mouseenter', () => swiper.autoplay.stop());
          wrapper.addEventListener('mouseleave', () => swiper.autoplay.start());
        }}
      >
        {sliderList.map((val) => (
          <SwiperSlide key={val.id}>
            <MainSliderItem {...val} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
