import {createContext, useState} from 'react';

interface Props {
    handleTheme: MouseEventHandler<HTMLButtonElement> | undefined;
    theme: "light" | "dark";
    setState: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

interface ProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<Props>(null as unknown as Props);


export default function ThemeProvider({children}:ProviderProps){
    const [themeState, setThemeState] = useState<"light" | "dark">("light");

    return(
        <ThemeContext.Provider value={{theme: themeState, setState: setThemeState}}>
            {children}
        </ThemeContext.Provider>
    )
}