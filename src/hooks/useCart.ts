import {create} from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"


interface ItemProps {
    id: number;
    nome: string;
    preco: number;
}

interface CartProps {
    items: {id: number, nome: string, preco: number}[];
    addItemToCart: (item: ItemProps) => void;
    clearCart: () => void;
}


export const useCart = create<CartProps>()(
    persist(
        (set)=>({
            items:[],
            usuario:"Marcos",
            addItemToCart: (item: ItemProps) => set((data) => ({ items: [...data.items, item] })),
            clearCart: () => {set(()=>({items:[]}))}
        }),
        {
            name: "@cart",
            storage: createJSONStorage(() => localStorage)
        }
    )
)