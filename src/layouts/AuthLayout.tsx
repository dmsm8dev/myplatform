import React from 'react';
// @ts-ignore
import st from "./AuthLayout.module.scss"

// @ts-ignore
const AuthLayout = ({ children }) => {
  return (
    <div className={st.authLayout}>
      <div className={st.authWrapper}>
        { children }
      </div>

    </div>
  );
};

export default AuthLayout;
