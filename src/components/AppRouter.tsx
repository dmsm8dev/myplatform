import React from 'react';
import {PublicRouts, ROUTES} from "../enums/routs";
import {Navigate, Route, Routes} from "react-router-dom";

const AppRouter = () => {
  const ROUTS_ARRAY = PublicRouts;
  console.log(ROUTS_ARRAY, PublicRouts)
  return (
    <Routes>
      {ROUTS_ARRAY.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={ROUTES.PUBLIC.NOT_FOUND} replace />} />
    </Routes>
  );
};


export default AppRouter;
