import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./assets/store.jsx";
import AppBar from "./assets/appbar.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppBar />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
