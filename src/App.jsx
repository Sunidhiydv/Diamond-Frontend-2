import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <Home/>
    },
  ])


  return (
    <>
      <RouterProvider router = {appRouter}/>

    </>
  )
}

export default App
