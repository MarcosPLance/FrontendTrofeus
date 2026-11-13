import {createContext, useState} from 'react'

interface CartProps {
    items: {id: number, nome: string, preco: number}[];
    addItemToCart:(item:ItemProps) => void;
    clearCart: () => void;

}

interface ProviderProps {
    children: React.ReactNode;
}

interface ItemProps {
    id: number;
    nome: string;
    preco: number;
}

export const CartContext = createContext<CartProps>(null as any);


export default function CartProvider({children}:ProviderProps){

    const [itemsCart, setItemsCarts] = useState<ItemProps[]>([]);

    function clearCart(){
        setItemsCarts([]);
    }


    function addItemToCart(item: ItemProps){
        setItemsCarts([...itemsCart, item]);
    }


    return(
        <CartContext.Provider value={{items: itemsCart, addItemToCart:addItemToCart, clearCart:clearCart}}>
            {children}
        </CartContext.Provider>
    )
}