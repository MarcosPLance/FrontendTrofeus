import "./style.css"
import {useNavigate} from "react-router"
import {useContext} from "react"
import {useCart} from '../../hooks/useCart'

interface JogosProps {
    jogo:{
        "id": number;
        "nome": string;
        "fabricante": string;
        "preco": number;
    }
}

export default function Product({ jogo }: JogosProps) {
    const{ id, nome, fabricante, preco } = jogo;
    const navigate = useNavigate();

    const { addItemToCart } = useCart();
    
    function onNavigate(){
        navigate(`/jogo/${id}`);
    }
    
    return (
        <div className="container-product" >
            <div onClick={onNavigate}>
                <h2>{nome}</h2>

                <div className="content-img">
                    <img src="../imagens/uncharted2.jpg" alt={nome} />
                </div>

                <p className="fabricante">{fabricante}</p>
                <p>R$ {preco.toFixed(2)}</p>
            </div>

            <button onClick={() => addItemToCart({ id:id, nome:nome, preco:preco })}>
                Adicionar ao Carrinho
            </button>
        </div>
    );
}