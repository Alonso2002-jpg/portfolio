import {useTypeStyle} from "../hooks/useTypeStyle.tsx";
import githubfooter from "../assets/githubfooter.svg";
import linkedinfooter from "../assets/linkedinfooter.svg";
import twitterfooter from "../assets/twitterfooter.svg";
import {useSetLang} from "../context/LangContext.tsx";
import {COPY} from "../constants.ts";

export function FooterComponent() {
    const {typeStyleText} = useTypeStyle(["Alonso Cruz"])
    const {lang} = useSetLang()
    return (
        <footer className="footer-container flex justify-between items-center align-middle text-center text-white p-10">
            <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/alonso-cruz-3b3b4b1b5/">
                    <img src={githubfooter} alt="linkedin"/>
                </a>
                <a href="https://www.linkedin.com/in/alonso-cruz-3b3b4b1b5/">
                    <img src={linkedinfooter} alt="linkedin"/>
                </a>
                <a href="https://www.linkedin.com/in/alonso-cruz-3b3b4b1b5/">
                    <img src={twitterfooter} alt="linkedin"/>
                </a>
            </div>
            <p>{lang === "es" ? COPY.es : COPY.en} <a href="">{typeStyleText} </a></p>
            <p className="text-6xl">🐺</p>
        </footer>
    )
}