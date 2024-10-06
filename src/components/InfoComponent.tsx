import {images, MY_WORK_DESCRIPTION, MY_WORK_TITLE} from "../constants.ts";
import {WorkCardComponent} from "./WorkCardComponent.tsx";
import workCardsData from "../works.json"
import {Langs} from "../hooks/useLang.tsx";
import {useDeviceType} from "../hooks/useDeviceType.tsx";

export class InfoComponentProps {
    handleImageVisor: (image: string) => void = () => {}
}

export function InfoComponent({handleImageVisor,lang}: {handleImageVisor: InfoComponentProps, lang: Langs}) {
    const {isMobile} = useDeviceType()
    return (
        <div className={"info-container flex flex-col rounded-3xl " + (isMobile ? 'py-16' : 'py-32')}>
            <div className="text-center">
                <h1 className="font-bold">{lang === Langs.ES ? MY_WORK_TITLE.es : MY_WORK_TITLE.en}</h1>
                <p className="text-xl">{lang === Langs.ES ? MY_WORK_DESCRIPTION.es : MY_WORK_DESCRIPTION.en}</p>
            </div>
            <div className={"work-card-container grid gap-20 " + (isMobile ? 'grid-cols-1 px-5' : 'grid-cols-3 px-16 ')}>
                {
                    workCardsData.map((workCard) => {
                        const imgName = images.filter(x => x.name == workCard.image)[0] || images[0]
                        return (
                            <WorkCardComponent key={workCard.id} handleImageVisor={handleImageVisor}
                                               title={workCard.title} image={imgName.asset}
                                               description={lang === Langs.ES ? workCard.description_es : workCard.description_en}
                                               urls={workCard.urls}/>
                        )
                    })
                }
            </div>
        </div>
    )
}