import AdminPage from "../pages/AdminPage"
import HomePage from "../pages/HomePage"
import AuthPage from "../pages/AuthPage"
import NewsPage from "../pages/NewsPage"
import DiscussionsPage from "../pages/DiscussionsPage"
import StandsPage from "../pages/StandsPage"
import CharactersPage from "../pages/CharactersPage"

export const HOME_ROUTE = {
    path: '/home',
    element: <HomePage />
}
export const ADMIN_ROUTE = {
    path: '/admin',
    element: <AdminPage />
}
export const LOGIN_ROUTE = {
    path: '/login',
    element: <AuthPage />
}
export const REGISTRATION_ROUTE = {
    path: '/registration',
    element: <AuthPage />
}
export const NEWS_ROUTE = {
    path: '/news',
    params: ':id',
    element: <NewsPage />
}
export const DISCUSSIONS_ROUTE = {
    path: '/discussions',
    params: ':id',
    element: <DiscussionsPage />
}
export const STANDS_ROUTE = {
    path: '/stands',
    params: ':name',
    element: <StandsPage />
}
export const CHARACTERS_ROUTE = {
    path: '/characters',
    params: ':name',
    element: <CharactersPage />
}
