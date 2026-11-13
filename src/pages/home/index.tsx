import './style.css'
import Container from '../../templates/container'
import Product from '../../components/product'
import { useQuery} from '@tanstack/react-query';
import type JogosResponse from './types';
import {api} from '../../services/api'
import {useState} from 'react'
import Modal from '../../components/modal'
import { useAuth } from '../../hooks/useAuth';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useMutation} from '@tanstack/react-query'


interface FormProduct{
   // id: number;
    nome: string;
    preco: string;
    distribuidora: string;
    urlImagem: string;
}

const REQUIRED_FIELD = "Campo obrigatório";


const schemaValidation = yup.object({
    nome: yup.string().required(REQUIRED_FIELD),
    preco: yup.string().required(REQUIRED_FIELD),
    distribuidora: yup.string().required(REQUIRED_FIELD),
    urlImagem: yup.string().required(REQUIRED_FIELD)
});

export default function Home(){

    const {usuario} = useAuth();
    const {register, handleSubmit, reset, formState:{errors}} = useForm({resolver:yupResolver (schemaValidation)});
    const [isVisibleModalForm, setIsVisibleModalForm] = useState(false);
    const mutation = useMutation({ mutationFn: postProducts, onSuccess: () => {setIsVisibleModalForm(false);query.refetch();reset();}});

    
    async function postProducts(values:FormProduct){
        return await api.post("/jogos", values); 
    }

    async function saveProduct(values:FormProduct){
        mutation.mutate(values);
    }

    async function getData(){
        return await api.get<JogosResponse[]>("/jogos");
    }

    const query = useQuery({queryKey: ['jogos'], queryFn: getData, retry:false})


    return(
        <div>
            <h1>Home</h1>
            <h2>Bem vindo {usuario.nome}</h2>
            
            <div className="home-container-list">
            {
                query.isFetching ?<p>Carregando...</p>: <>{query.data?.data.map((jogo) =><Product key={jogo.id} jogo={jogo}/>)}</>
            }
            </div>

            <button className="float-button" onClick={() => setIsVisibleModalForm(true)}>
                +
            </button>

            <Modal closeModal={() => setIsVisibleModalForm(false)} isModalOpen={isVisibleModalForm}>
                <form>
                    <input placeholder="Nome do jogo" type="text" {...register("nome")}/><br/>
                    <span>{errors.nome?.message}</span><br/><br/>
                    <input placeholder="Preço do jogo" type="text" {...register("preco")}/><br/>
                    <span>{errors.preco?.message}</span><br/><br/>
                    <input placeholder="Distribuidora" type="text" {...register("distribuidora")}/><br/>
                    <span>{errors.distribuidora?.message}</span><br/><br/>
                    <input placeholder="Url da imagem" type="text" {...register("urlImagem")}/><br/>
                    <span>{errors.urlImagem?.message}</span><br/><br/>

                    {mutation.isPending ? <p>Enviando...</p> : <button type="button" onClick={handleSubmit(saveProduct)}>Cadastrar</button>}
                </form>
            </Modal>
        </div>
    )
}