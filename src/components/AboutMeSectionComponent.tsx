import {ProgLangComponent} from "./ProgLangComponent.tsx";

export function AboutMeSectionComponent({titleToSec, proglangs}: {
    titleToSec: string,
    proglangs: { image: string, percentage: number }[]
}) {
    return (
        <div className="flex items-center align-middle justify-between about-me-sec-container text-center">
            <h1 className="title font-bold text-5xl">{titleToSec}</h1>
            <div className="line border border-white h-28">
            </div>
            <div className="langs text-center text-2xl flex gap-5">
                {
                    proglangs && proglangs.map((proglang) => (
                        <ProgLangComponent image={proglang.image} percentage={proglang.percentage}/>
                    ))
                }
            </div>
        </div>
    )
}