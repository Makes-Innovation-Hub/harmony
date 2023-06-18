import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/store";
import App from "./App.jsx";
import "./index.css";
import { TopSongsContextProvider } from "../context/topSongsContext";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TopSongsContextProvider>
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </Provider>
  </TopSongsContextProvider>
);
