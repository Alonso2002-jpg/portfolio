import {useTypeStyle} from "../hooks/useTypeStyle.tsx";
import {USERNAMES} from "../constants.ts";
import {useDeviceType} from "../hooks/useDeviceType.tsx";
import {Langs} from "../hooks/useLang.tsx";

export function NavbarComponent({lang, changeLang}: {lang: Langs, changeLang: (lang: Langs) => void}) {
    const {typeStyleText} = useTypeStyle(USERNAMES)
    const {isMobile} = useDeviceType()
    return (
        <nav className="flex justify-between items-center p-5 w-full">
            <p className={"font-bold text-white text-4xl tracking-widest main-title"}>{isMobile ? "Alonso Cruz" : "🐺" +typeStyleText}</p>
            <div className={"flex items-center text-white" + (!isMobile ? ' gap-5 ':'')}>
                <button className={`flex items-center ${lang === Langs.ES ? 'underline' : ''}`} onClick={() => changeLang(Langs.ES)}>
                    <img src={"https://img.icons8.com/?size=" + (isMobile ? '20':'30') +"&id=17967&format=png&color=000000"} alt="Spain"/>
                </button>
                <b>|</b>
                <button className={`flex items-center ${lang === Langs.EN ? 'underline' : ''}`} onClick={() => changeLang(Langs.EN)}>
                    <img src={"https://img.icons8.com/?size=" + (isMobile ? '20':'30') +"&id=15534&format=png&color=000000"} alt="Great Britain"/>
                </button>
            </div>
        </nav>
    )
}