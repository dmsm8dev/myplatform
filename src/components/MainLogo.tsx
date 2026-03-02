import React from 'react';
// @ts-ignore
import logo from '../assets/img/mainLogo.png'
// @ts-ignore
import st from '../assets/scss/components/MainLogo.module.scss'

const MainLogo = () => {
  return (
    <>
      <div className={st.mainLogo}>
        <img width="90" height="45" src={logo} alt="Logo" className="logo"/>
        <div className={st.logoTitle}>StreamCraft</div>
      </div>
    </>
  );
};

export default MainLogo;
