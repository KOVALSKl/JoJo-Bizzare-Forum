import { Routes, Route } from 'react-router-dom'
import { UserContext, NewsContext } from "../utils/contexts";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage"
import UserStore from "../store/userStore";
import NewsStore from "../store/newsStore";
import { HOME_ROUTE, NEWS_ROUTE, ADMIN_ROUTE, STANDS_ROUTE, CHARACTERS_ROUTE, DISCUSSIONS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/routes";

function AppRouter() {
    return (
        <UserContext.Provider value={{
            user: new UserStore()
        }}>
            <Routes>
                <Route path={HOME_ROUTE.path} element={<HomePage />} />
                <Route path={NEWS_ROUTE.path} element={
                    <NewsContext.Provider value={{
                        news: new NewsStore()
                    }}>
                        <NewsPage />
                    </NewsContext.Provider>
                } >
                    <Route path={NEWS_ROUTE.params} />
                </Route>
                <Route path={DISCUSSIONS_ROUTE.path} >
                    <Route path={DISCUSSIONS_ROUTE.params} element={
                        <NewsContext.Provider value={{
                            news: new NewsStore()
                        }}>
                            <NewsPage />
                        </NewsContext.Provider>
                    } />
                </Route>

                <Route path="*" element={<HomePage />} />
            </Routes>
        </UserContext.Provider>
    );
}

export default AppRouter;