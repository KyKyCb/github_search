import React, { FC, useEffect, useState } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import store from "./redux/store";
import { Provider, useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";
import { selectUserError } from "./redux/selectors/selectUserState";
import Layout from "./components/Layout/Layout";

const App: FC = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Layout>
                    <AppRouter />
                </Layout>
            </HashRouter>
        </Provider>
    );
};

export default App;
