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
        </ul>
      </nav>
    </div>
  );
};

export default Header;
