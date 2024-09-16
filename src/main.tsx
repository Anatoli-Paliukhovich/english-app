import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./scss/index.scss";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter basename="/english-app/">
      <App />
    </BrowserRouter>
  </Provider>
);
