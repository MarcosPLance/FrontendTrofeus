import Modal from '../../components/modal';
import './style.css'
import Cart from '../../components/cart';
import { useState } from 'react';
import {useCart} from '../../hooks/useCart'
import { useAuth } from '../../hooks/useAuth';
import {useNavigate} from 'react-router'

   
interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({children}:ContainerProps){
 
    const [visibleModal, setVisibleModal] = useState(false);
    
    const {items} = useCart();

    const {clearUser} = useAuth();
    const navigate = useNavigate();

    function logout(){
        clearUser();
        navigate("/",{replace:true});
    }

    return (
        <div className="container-content">
            <header className="container-header">
                <h1>Nossas Platinas</h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Quem somos</li>
                        <li>Contato</li>
                        <li onClick={() => setVisibleModal(true)}>Carrinho {items.length}</li>
                        <li onClick={logout}>Sair</li>
                    </ul>
                </nav>          
            </header>

            <div className="content-children">
                {children}
            </div>


            <footer className="container-footer">
                <p>Todos os direitos reservados</p>
            </footer>

            <Modal isModalOpen={visibleModal} closeModal={() => setVisibleModal(false)}>
                <Cart />
            </Modal>    


        </div>
    );
}