import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage/LoginPage.tsx'
import { RegisterPage } from './pages/RegistrationPage/RegistrationPage.tsx'
import { MainPage } from './pages/MainPage/MainPage.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { CardsPage } from './pages/CardsPage/CardsPage.tsx'
import { ProfilePage } from './pages/ProfilePage/ProfilePage.tsx'
import { FavouriteCards } from './pages/FavouritesPage/FavouritesPage.tsx'


const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/card/:id",
    element: <CardsPage />
  },
  {
    path: "/profile",
    element: <ProfilePage 
    name='Фаррух Валиев' location='Узбекстан, Ташкент' rating={5} secureDeals={0} reviews={{ positive: 0, negative: 0 }}/>,
  },
  {
    path: "/registration",
    element: <RegisterPage />,
  },
  {
    path: "/favourites",
    element: <FavouriteCards />
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routerConfig} />
    </Provider>  
  </React.StrictMode>,
)
