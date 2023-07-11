import { configureStore } from "@reduxjs/toolkit";
// import { Provider, useDispatch } from "react-redux";
// import { useMemo } from "react";
import cartReducer from "./cart";
// import userReducer from "./user";
export default configureStore({
  reducer: {
    cart: cartReducer,
    // user: userReducer,
  },
});
// export const useAppDispatch = () => useDispatch();

// export function StoreProvider({ children }) {
//   const store = useMemo(
//     () =>
//       configureStore({
//         reducer: {
//           cart: cartReducer,
//           // Add more reducers here if needed
//         },
//       }),
//     []
//   );

//   return <Provider store={store}>{children}</Provider>;
// }
