// import React, {createContext, useContext, useEffect, useState} from "react";
//
// export enum Langs {
//     ES = 'es',
//     EN = 'en'
// }
//
// type LangContextType = {
//     lang: Langs;
//     changeLang: (lang: Langs) => void;
// };
//
// const LangContext = createContext<LangContextType | undefined>(undefined);
//
//
// export const LangProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
//     const [lang, setLang] = useState<Langs>(() => {
//         const savedLang = localStorage.getItem('lang');
//         return (savedLang as Langs) || Langs.ES;
//     });
//
//     useEffect(() => {
//         localStorage.setItem('lang', lang);
//     }, [lang]);
//
//     const changeLang = (newLang: Langs) => {
//         setLang(newLang);
//     };
//
//     return (
//         <LangContext.Provider value={{ lang, changeLang }}>
//             {children}
//         </LangContext.Provider>
//     );
// };
//
// export const useSetLang = () => {
//     const context = useContext(LangContext);
//     if (context === undefined) {
//         throw new Error('useSetLang must be used within a LangProvider');
//     }
//     return context;
// };