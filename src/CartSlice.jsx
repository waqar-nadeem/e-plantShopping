import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize cart items as an empty array to track products
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost, quantity = 1 } = action.payload; // Destructure with default quantity of 1
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        // If item exists, update its quantity with the payload quantity or increment by 1
        existingItem.quantity += quantity;
      } else {
        // If item does not exist, add it with the provided details and quantity
        state.items.push({ name, image, cost, quantity });
      }
    },
    removeItem: (state, action) => {
      // Remove the item with the matching name from the cart
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Destructure name and new quantity
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        // Update quantity, ensuring it’s at least 1 to avoid invalid states
        itemToUpdate.quantity = Math.max(1, quantity);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;