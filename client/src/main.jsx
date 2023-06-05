import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Redux/store'
import App from './App.jsx'
import './index.css'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/ErrorFallback'

import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <App />
        </ErrorBoundary>
    </Provider>,
)
