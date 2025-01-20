import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Provider } from 'react-redux'
import { Loginpage } from './pages/LoginPage/Loginpage.tsx'
import { Mainpage } from './pages/MainPage/Mainpage.tsx'
import { RegisterPage } from './pages/RegistrationPage/RegistrationPage.tsx'
// import { store } from './store/store.ts'

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/main",
    element: <Mainpage />,
  },
  // {
  //   path: "/profile",
  //   element: <ProfilePage />,
  // },
  {
    path: "/registration",
    element: <RegisterPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <RouterProvider router={routerConfig} />

  </React.StrictMode>,
)
