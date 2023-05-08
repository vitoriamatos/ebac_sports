import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}
const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favoritoNovo = action.payload

      if (state.itens.find((favorito) => favorito.id === favoritoNovo.id)) {
        state.itens = state.itens.filter(
          (favorito) => favorito.id !== favoritoNovo.id
        )
      } else {
        state.itens.push(favoritoNovo)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
