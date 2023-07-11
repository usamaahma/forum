// import { StoreProvider } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
// import StoreProvider from "../redux/store";
import store from "../redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
