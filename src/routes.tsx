import React from "react";
import { Route, Routes } from "react-router-dom";
import ConnectedRepositories from "./views/repositories/connectedRepositories";



const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <React.Suspense fallback={<>...</>}>
            <ConnectedRepositories />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
