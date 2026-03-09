import React from 'react';// @ts-ignore
import st from '../assets/scss/components/Header.module.scss'
import MainLogo from "./MainLogo";
import {ROUTES} from "../enums/routs";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const routs = [
    {
      path: ROUTES.PUBLIC.HOME,
      title: null,
      component: <MainLogo />
    },
    {
      path: ROUTES.PUBLIC.HOME,
      title: "Item 1",
      component: null
    },
    {
      path: ROUTES.PUBLIC.HOME,
      title: "Item 2",
      component: null
    },
    {
      path: ROUTES.PUBLIC.HOME,
      title: "Item 3",
      component: null
    },
    {
      path: ROUTES.PUBLIC.HOME,
      title: "Item 4",
      component: null
    },
    {
      path: ROUTES.PUBLIC.LOGIN,
      title: "Login",
      component: null
    },
  ];

  return (
    <div className={st.mainWrapper}>
      <nav className={st.navMenu}>
        <ul className={st.navList}>
          {routs.map((val, i) => {
            const isCurrent = location.pathname === val.path;

            return (
              <li className={st.navItem} key={i}>
                {isCurrent ? (
                  <span className={`${st.navLink} ${st.currentLink}` }>
                    {val.title == null ? val.component : val.title}
                  </span>
                ) : (
                  <Link to={val.path} className={st.navLink}>
                    {val.title == null ? val.component : val.title}
                  </Link>
                )}
              </li>
            );
          })}

          <li className={st.navItem} >
            <button className={st.burgerMenuButton}>
              <svg
                width="60px"
                height="60px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"

              >

                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                <g id="SVGRepo_iconCarrier">
                  <path d="M4 18L20 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 12L20 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 6L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                </g>

              </svg>
            </button>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Header;
