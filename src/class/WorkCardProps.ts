import {InfoComponentProps} from "../components/InfoComponent.tsx";

export class UrlStructure{
    url:string = "http://example.com"
    social:string = "github"
}
export class WorkCardProps {
    image:string = ""
    title:string = "Work Card"
    description:string = "This is a work card."
    urls:UrlStructure[] = []

    handleImageVisor:InfoComponentProps = new InfoComponentProps();
}