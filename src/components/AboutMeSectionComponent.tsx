import {ProgLangComponent} from "./ProgLangComponent.tsx";
import {useDeviceType} from "../hooks/useDeviceType.tsx";

export function AboutMeSectionComponent({titleToSec, proglangs}: {
    titleToSec: string,
    proglangs: { image: string, percentage: number }[]
}) {
    const {isMobile} = useDeviceType();
    return (
        <div className={"flex items-center align-middle justify-between about-me-sec-container text-center " + (isMobile ? 'flex-col': '')}>
            <h1 className={"title font-bold " + (isMobile ? 'text-xl' : 'text-5xl')}>{titleToSec}</h1>
            {
                isMobile && <hr className="line w-11/12"/> || !isMobile && <div className="line border border-white h-28">
                </div>

            }
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