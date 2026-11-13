import {create} from "zustand"

export const useZustand = create((set) => ({
  contador: 100,

  incrementar: () => set((state) => ({contador: state.contador + 1})),

})  )

