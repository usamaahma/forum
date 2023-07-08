import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "cart";

// Define initial state values
const initialState = {
  cart: [],
  totalCartItems: 0,
  totalPrice: 0,
};

// Retrieve cart data from localStorage on the client-side
if (typeof window !== "undefined") {
  const stateCartItems = JSON.parse(localStorage.getItem(CART_KEY))?.cart;
  const stateTotalPrice = JSON.parse(
    localStorage.getItem(CART_KEY)
  )?.totalPrice;
  const stateTotalItems = JSON.parse(
    localStorage.getItem(CART_KEY)
  )?.totalCartItems;

  if (stateCartItems) initialState.cart = stateCartItems;
  if (stateTotalPrice) initialState.totalPrice = stateTotalPrice;
  if (stateTotalItems) initialState.totalCartItems = stateTotalItems;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.totalCartItems++;
      state.totalPrice += action.payload.price;
      localStorage.setItem(CART_KEY, JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);

      console.log(item, "reduxcart");
      console.log(action.payload, "reduxcart22");
      item.quantity++;
      state.totalCartItems++;
      state.totalPrice += item.price;
      localStorage.setItem(CART_KEY, JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        state.totalCartItems--;
        state.totalPrice -= item.price;
      }
      localStorage.setItem(CART_KEY, JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      const removedItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (!removedItem) {
        console.warn(`Item with id ${action.payload.id} not found in cart`);
        return state;
      }

      const updatedTotalCartItems = state.totalCartItems - removedItem.quantity;
      const updatedTotalPrice =
        state.totalPrice - removedItem.price * removedItem.quantity;

      const updatedState = {
        ...state,
        cart: updatedCart,
        totalCartItems: updatedTotalCartItems,
        totalPrice: updatedTotalPrice,
      };

      localStorage.setItem(CART_KEY, JSON.stringify(updatedState));

      return updatedState;
    },
    clearCart(state) {
      state.cart = [];
      state.totalCartItems = 0;
      state.totalPrice = 0;
      localStorage.setItem(CART_KEY, JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;
