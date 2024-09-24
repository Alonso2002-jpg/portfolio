import {WELCOME_INFO, WELCOME_MESSAGE} from "../constants.ts";
import {Langs, useSetLang} from "../context/LangContext.tsx";

export function BodyComponent() {
    const {lang} = useSetLang()
    return (
        <section className="flex items-center justify-center body-component">
            <div className="flex flex-col justify-center items-center gap-10">
                <h1 className="font-lighttext-center mt-10">{lang === Langs.ES ? WELCOME_MESSAGE.es : WELCOME_MESSAGE.en}</h1>
                <p className="navbar-brand font-bold text-white main-title ">
                    {lang === Langs.ES ? WELCOME_INFO.es : WELCOME_INFO.en}
                </p>
            </div>
            <div>
                <p className="image-text">
                    🖥️
                </p>
            </div>
        </section>
    )
}