import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createPromise } from "redux-promise-middleware";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const middleware = applyMiddleware(thunk, logger());
root.render(
  <StrictMode>
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  </StrictMode>
);
