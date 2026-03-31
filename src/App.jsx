import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'
import Applayout from './components/Layout/Applayout'
import Erropage from './components/UI/Erropage'
import Countrydetail from './components/Layout/Countrydetail'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    errorElement:<Erropage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'country/:id', element: <Countrydetail /> },
      { path: 'country', element: <Country /> }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App