import AdminPage from "../pages/admin/AdminPage"
import HomePage from "../pages/home/HomePage"
import RegistrationPage from "../pages/auth/registr/RegistrationPage"
import LoginPage from "../pages/auth/login/LoginPage"
import NewsPage from "../pages/news/NewsPage"
import DiscussionsPage from "../pages/discussions/DiscussionsPage"
import StandsPage from "../pages/stands/StandsPage"
import CharactersPage from "../pages/characters/CharactersPage"
import SingleNewsPage from "../pages/news/SingleNewsPage"

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
    element: <LoginPage />
}
export const REGISTRATION_ROUTE = {
    path: '/registration',
    element: <RegistrationPage />
}
export const NEWS_ROUTE = {
    path: '/news',
    params: ':id',
    element: <NewsPage />,
    single: <SingleNewsPage />
}
export const DISCUSSIONS_ROUTE = {
    path: '/discussions',
    params: ':id',
    element: <DiscussionsPage />,
    single: <SingleNewsPage />
}
export const STANDS_ROUTE = {
    path: '/stands',
    params: ':name',
    element: <StandsPage />,
    single: <SingleNewsPage />
}
export const CHARACTERS_ROUTE = {
    path: '/characters',
    params: ':name',
    element: <CharactersPage />,
    single: <SingleNewsPage />
}
