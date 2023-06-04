import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SongPage from './pages/SongPage'
import ArtistPage from './pages/ArtistPage/ArtistPage'
import NotFoundPage from './pages/NotFoundPage'
import TranslatingPage from './pages/TranslatingPage'
import { useState } from 'react'
import Header from "./components/Header";
import artistDummyData from './pages/ArtistPage/dummyData_ArtistPage'
import "./App.css";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/song',
        element: <SongPage />,
    },
    {
        path: '/Artist',
        element: <ArtistPage artistData={artistDummyData}/>,
    },
    {
        path: '/translating',
        element: <TranslatingPage />,
    },
    {
        path: '/not-found',
        element: <NotFoundPage />,
    },
])

function App() {
    const [showError, setShowError] = useState(false)
    if (showError) {
        setShowError(true)
        throw new Error('Oops! Something went wrong')
    }
    return (
        <div>
            <RouterProvider router={Router} />
        </div>
    )
}
export default App
