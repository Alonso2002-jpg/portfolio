import {useTypeStyle} from "../hooks/useTypeStyle.tsx";
import {USERNAMES} from "../constants.ts";
import {Langs, useSetLang} from "../context/LangContext.tsx";


export function NavbarComponent() {
    const {typeStyleText} = useTypeStyle(USERNAMES)
    const {lang, changeLang} = useSetLang()
    return (
        <nav className="flex justify-between bg-black/[.09] p-5">
            <p className="navbar-brand font-bold text-white text-4xl main-title tracking-widest">🐺{typeStyleText}</p>
            <div className="flex justify-center items-center gap-5 text-white">
                <button className={lang === Langs.ES ? 'underline':''} onClick={() => changeLang(Langs.ES)}><img src={"https://img.icons8.com/?size=30&id=17967&format=png&color=000000"} alt="Spain" /></button>
                <b>|</b>
                <button className={lang === Langs.EN ? 'underline':''} onClick={() => changeLang(Langs.EN)}><img src={"https://img.icons8.com/?size=30&id=15534&format=png&color=000000"} alt="Great Britain" /></button>
            </div>
        </nav>
    )
}