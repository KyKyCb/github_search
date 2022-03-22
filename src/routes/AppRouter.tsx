import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./Routes";
import { MAIN_ROUTE } from "../constants/routerConstants";

const AppRouter: FC = () => {
    return (
        <Routes>
            {publicRoutes.map(({ path, Element }) => (
                <Route key={path} path={path} element={<Element />} />
            ))}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
