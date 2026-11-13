import { useContext } from "react";
import { MyContext } from "./contexts/mycontexts";
import { ThemeContext } from "./contexts/themeContext";
import useZustand from "./hooks/useZustands";


export default function Box () {


    const {contador} = useZustand();

    const data = useContext(MyContext)

    const themeData = useContext(ThemeContext)


    return(
        <div>
            {contador}
            <p>Tema Atual:{themeData.theme}</p>
            <button onClick={themeData.handleTheme}>Alterar Tema</button>
        </div>
    )
}
