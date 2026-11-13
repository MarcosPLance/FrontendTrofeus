import {useCart} from '../../hooks/useCart'

export default function Cart() {

    const {items, clearCart} = useCart();

    return (
        <div>
            <h1>Carrinho de compras</h1>
            <button onClick={clearCart}>Limpar Carrinho</button>
            {items.map((item) => (
                <div key={item.id}>
                    <h2>{item.nome}</h2>
                    <p>R$ {item.preco.toFixed(2)}</p>
                </div>
            ))}
        </div>
    )
}