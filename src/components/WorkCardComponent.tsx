import {WorkCardProps} from "../class/WorkCardProps.ts";
import github from "../assets/github.png";
import browser from "../assets/browser.png";

export function WorkCardComponent(props: WorkCardProps){

    function manageImageVisor(){
        if (!props.image.includes("notfound")){
            props.handleImageVisor.handleImageVisor(props.image)
        }
    }
    return (
        <section className="work-card flex flex-col bg-white drop-shadow-xl rounded-2xl p-5">
            <div className={"work-card-img bg-red-200 rounded-3xl" + (props.image.includes("notfound") ? "" : " cursor-pointer")} onClick={() => manageImageVisor()}>
                <img src={props.image} alt="Work Card"/>
            </div>
            <div className="work-card-info py-5 text-left">
                <h2 className="font-bold">{props.title}</h2>
                <div className="work-desc">
                    <p className=" text-md pt-4">{props.description}</p>
                </div>

            </div>
            <div className="mt-auto">
                <ul className="work-card-links flex gap-5 ">
                    {props.urls.map((url) => (
                        <li className="work-card-link" key={url.social}>
                            <a href={url.url} target="_blank" className="text-xl">
                                <img src={url.social == 'github' ? github : browser} alt={url.social} className="w-8 h-8"/>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}