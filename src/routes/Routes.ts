import { MAIN_ROUTE, USER_ROUTE } from "../constants/routerConstants";

import Main from "../components/Main/Main";
import User from "../components/User/User";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Element: Main,
    },
    {
        path: USER_ROUTE,
        Element: User,
    },
];