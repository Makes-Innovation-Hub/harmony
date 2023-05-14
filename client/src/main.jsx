import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from "./App.jsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
 <ErrorBoundary fallback={<h1>Something went wrong</h1>}>
  <App />
</ErrorBoundary>

  </Provider>,
);
