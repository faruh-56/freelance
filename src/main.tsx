import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { Provider } from 'react-redux'
import { LoginPage } from './pages/LoginPage/LoginPage.tsx'
import { RegisterPage } from './pages/RegistrationPage/RegistrationPage.tsx'
import { MainPage } from './pages/MainPage/MainPage.tsx'

// import { store } from './store/store.ts'

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
