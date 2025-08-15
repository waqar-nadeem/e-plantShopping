// Import the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import the cartReducer from your CartSlice file
import cartReducer from './CartSlice';

// Create a Redux store using configureStore
const store = configureStore({
  // Define the root reducer object
  reducer: {
    // 'cart' is the name of the slice in the store, and it's managed by cartReducer
    cart: cartReducer,
  },
});

// Export the store for use in the app (e.g., in <Provider store={store}>)
export default store;
