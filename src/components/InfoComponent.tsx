import {MY_WORK_DESCRIPTION, MY_WORK_TITLE} from "../constants.ts";
import {WorkCardComponent} from "./WorkCardComponent.tsx";
import bgTest from "../assets/bg-image1.jpg";
import shortnest from "../assets/shortnest.png"
import airecadisa from "../assets/airecadisa.png"
import workCardsData from "../works.json"
import {Langs, useSetLang} from "../context/LangContext.tsx";

export function InfoComponent(){
    const {lang} = useSetLang()
    const images = [
        {
            "name":"bgTest",
            "asset":bgTest
        },
        {
            "name":"airecadisa",
            "asset":airecadisa
        },
        {
            "name":"shortnest",
            "asset":shortnest
        },
    ]

    return (
        <div className="info-container flex flex-col bg-red-500 rounded-3xl py-32">
            <div className="text-center">
                <h1 className="font-bold">{lang=== Langs.ES ? MY_WORK_TITLE.es : MY_WORK_TITLE.en}</h1>
                <p className="text-xl">{lang=== Langs.ES ? MY_WORK_DESCRIPTION.es : MY_WORK_DESCRIPTION.en}</p>
            </div>
            <div className="work-card-container grid grid-cols-3 gap-20 px-32">
                {
                    workCardsData.map((workCard) => {
                        console.log(workCard.image)
                        console.log(images)
                        const imgName = images.filter(x => x.name == workCard.image)[0] || images[0]
                        console.log(imgName)
                        return (
                            <WorkCardComponent title={workCard.title} image={imgName.asset} description={lang === Langs.ES ? workCard.description_es : workCard.description_en} urls={workCard.urls}/>
                        )
                })
                }
            </div>
        </div>
    )
}