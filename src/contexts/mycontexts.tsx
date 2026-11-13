import {createContext} from 'react';

interface ContextProps {
    nome: string;
    idade: string;
}

export const MyContext = createContext<ContextProps>({nome:"", idade:""});


export default function MyProvider({children}:any){
    return(
        <MyContext.Provider value={{nome:"Marcos",idade:"33"}}>
            {children}
        </MyContext.Provider>
    )
}