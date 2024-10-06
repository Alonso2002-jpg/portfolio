import {WELCOME_INFO, WELCOME_MESSAGE} from "../constants.ts";
import {useDeviceType} from "../hooks/useDeviceType.tsx";
import {Langs} from "../hooks/useLang.tsx";

export function BodyComponent({lang}: {lang: Langs}) {
    const {isMobile} = useDeviceType()
    return (
        <section className={"flex items-center justify-center body-component " + (isMobile ? 'flex-col':'')}>
            {
                !isMobile &&
                <><div className="flex flex-col justify-center items-center gap-10 text-white">
                    <h1 className="font-light text-center mt-10">{lang === Langs.ES ? WELCOME_MESSAGE.es : WELCOME_MESSAGE.en}</h1>
                    <p className=" font-bold main-title ">
                        {lang === Langs.ES ? WELCOME_INFO.es : WELCOME_INFO.en}
                    </p>
                </div>
                <div>
                <p className="image-text">
                🖥️
                </p>
                </div>
                </>
            }

            {
                isMobile &&
                <div className="flex flex-col justify-center items-center gap-10 text-white">
                    <h1 className="font-light text-center mt-10">{lang === Langs.ES ? WELCOME_MESSAGE.es : WELCOME_MESSAGE.en}</h1>
                    <div className="flex justify-center align-middle items-center w-full">
                        <p className="image-text">
                            📱
                        </p>
                    </div>
                    <p className=" font-bold text-white main-title">
                        {lang === Langs.ES ? WELCOME_INFO.es : WELCOME_INFO.en}
                    </p>
                </div>
            }
        </section>
    )
}