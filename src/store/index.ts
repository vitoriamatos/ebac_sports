import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/Carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
