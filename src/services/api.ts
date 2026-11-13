import axios from "axios"
import {useAuth} from "../hooks/useAuth"


export const api = axios.create({baseURL: "https://api.example.com"});

    const{ token} = useAuth.getState();

 //   if(!token){
   //     alert("Voce não tem Autorização para acessar essa pagina, faça login para continuar ")
     //   window.location.replace ("/")
   // }


api.defaults.headers.common['Authorization'] = `Bearer ${token}`;