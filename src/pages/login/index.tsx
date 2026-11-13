import './style.css'
import {useContext, useState} from "react"
import { useNavigate } from 'react-router'
import axios from 'axios'
import {useAuth} from '../../hooks/useAuth'


export interface ResponseAuth{
    token: string;
    usuario: {
        id: number;
        nome: string;
        email: string;
    }
}

//const data = useContext(MyContext)

//const themeData = useContext(ThemeContext)


export default function login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setAuthData} = useAuth()
    const navigate = useNavigate()


    async function login(){
        navigate("/home")
        const response = await axios.post<ResponseAuth>("https://api.example.com/login", 
            {
            username,
            password
            }
        )  
        if(response.status !== 200){
            alert("Usuário ou senha inválidos")
            return;
        }

        setAuthData(response.data)
            navigate("/home")
    }

    function onsubmit(){
        login()
    }


    return(
        <div className="container-login">
            <form className="container-form-login">
                <h1>Login</h1>
                <p>Informe os dados</p>
                <input type="text" placeholder="Usuário" 
                    value={username} onChange={(e) => setUsername(e.target.value)} />
                
                <input type="password" placeholder="Senha" 
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                
                <button type="submit" onClick={onsubmit}>Entrar</button>

            </form>
        </div>
        )
}