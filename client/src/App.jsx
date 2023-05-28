import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SongPage from './pages/SongPage'
import ArtistPage from './pages/ArtistPage'
import NotFoundPage from './pages/NotFoundPage'
import TranslatingPage from './pages/TranslatingPage'
import SearchResults from './pages/SearchResults'
import { useState } from 'react'
import Header from "./components/Header";
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
        element: <ArtistPage />,
    },
    {
        path: '/translating',
        element: <TranslatingPage />,
    },
    {
        path: '/not-found',
        element: <NotFoundPage />,
    },
    {
        path: '/results',
        element: <SearchResults />
    }
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
