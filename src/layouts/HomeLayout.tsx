import React, { useState} from 'react';
// @ts-ignore
import st from "../assets/scss/layouts/HomeLayout.module.scss";
import Header from "../components/Header";



const HomeLayout: React.FC<React.PropsWithChildren> = ({ children })=> {
  return (
  <div className={st.mainWrapper}>
    <div className={st.firstBanner}>
      <div className={st.videoWrapper}>
        <iframe  src="https://www.youtube.com/embed/A-mCKNTU_mU?autoplay=1&mute=1&playsinline=1"
                 title="YouTube video player"
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 referrerPolicy="strict-origin-when-cross-origin"

        ></iframe>
      </div>
    </div>
    <div className={st.container}>
      <Header />
      { children }
    </div>
    <div className={st.secondBanner}>
      <div className={st.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/NPugwFxbKwI?autoplay=1&mute=1&playsinline=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>
      </div>
    </div>
  </div>
  );
};

export default HomeLayout;
