import { Routes, Route } from 'react-router-dom'
import HomePage from "../pages/home/HomePage";
import SingleNewsPage from '../pages/news/SingleNewsPage';
import { HOME_ROUTE, NEWS_ROUTE, ADMIN_ROUTE, STANDS_ROUTE, CHARACTERS_ROUTE, DISCUSSIONS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/routes";

function AppRouter() {
    return (
        <Routes>
            <Route path={HOME_ROUTE.path} element={<HomePage />} />
            <Route path={NEWS_ROUTE.path}>
                <Route index element={NEWS_ROUTE.element} />
                <Route path={NEWS_ROUTE.params} element={<SingleNewsPage />} />
            </Route>
            <Route path={DISCUSSIONS_ROUTE.path} >
                <Route path='' element={DISCUSSIONS_ROUTE.element} />
                <Route path={DISCUSSIONS_ROUTE.params} element={<SingleNewsPage />} />
            </Route>
            <Route path={LOGIN_ROUTE.path} element={LOGIN_ROUTE.element} />
            <Route path={REGISTRATION_ROUTE.path} element={REGISTRATION_ROUTE.element} />

            <Route path="*" element={<HomePage />} />
        </Routes>
    );
}

export default AppRouter;