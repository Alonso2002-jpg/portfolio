import {AboutMeSectionComponent} from "./AboutMeSectionComponent.tsx";
import {ABOUT_ME, BACKEND_LANGUAGES, DATABASES, FRONTEND_LANGUAGES} from "../constants.ts";
import {Langs} from "../hooks/useLang.tsx";
import {useDeviceType} from "../hooks/useDeviceType.tsx";

export function AboutMeComponent({lang}: {lang: Langs}) {
    const {isMobile} = useDeviceType();

    const programLangs = [
        {
            image: "https://img.icons8.com/?size=80&id=uJM6fQYqDaZK&format=png&color=000000",
            percentage: 85
        },
        {
            image: "https://img.icons8.com/?size=80&id=13441&format=png&color=000000",
            percentage: 80
        },
        {
            image: "https://img.icons8.com/?size=80&id=13679&format=png&color=000000",
            percentage: 70
        },
        {
            image: "https://img.icons8.com/?size=80&id=55251&format=png&color=000000",
            percentage: 50
        },
        {
            image: "https://img.icons8.com/?size=80&id=121463&format=png&color=000000",
            percentage: 50
        }
    ]
    const frontLangs = [
        {
            image: "https://img.icons8.com/?size=100&id=71257&format=png&color=000000",
            percentage: 85
        },
        {
            image: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000",
            percentage: 60
        },
        {
            image: "https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000",
            percentage: 40
        }
    ]
    const databases = [
        {
            image: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
            percentage: 80
        },
    ]


    return (
        <>
            <h1 className={"text-white text-center " + (isMobile ? 'text-4xl py-20':'text-6xl py-28')}>{lang === "es" ? ABOUT_ME.es:ABOUT_ME.en}</h1>

            <section className={"about-me-container flex flex-col items-center gap-28 justify-between rounded-3xl mb-36" + (isMobile ? 'py-10' : 'py-32')}>
                <AboutMeSectionComponent titleToSec={lang === "es" ? BACKEND_LANGUAGES.es : BACKEND_LANGUAGES.en}
                                         proglangs={programLangs}></AboutMeSectionComponent>
                <AboutMeSectionComponent titleToSec={lang === "es" ? FRONTEND_LANGUAGES.es : FRONTEND_LANGUAGES.en}
                                         proglangs={frontLangs}></AboutMeSectionComponent>
                <AboutMeSectionComponent titleToSec={lang === "es" ? DATABASES.es : DATABASES.en}
                                         proglangs={databases}></AboutMeSectionComponent>
            </section>

        </>
    )
}