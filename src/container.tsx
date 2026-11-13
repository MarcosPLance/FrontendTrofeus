import { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";


export default function Container(){
    const {handleTheme, theme} = useContext(ThemeContext)

    return(
        <div>
            <p>Tema Atual:{theme}</p>
            <button onClick={handleTheme}>Alterar Tema</button>
        </div>
    )
}