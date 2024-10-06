import {BodyComponent} from "./BodyComponent.tsx";
import {InfoComponent, InfoComponentProps} from "./InfoComponent.tsx";
import {AboutMeComponent} from "./AboutMeComponent.tsx";
import {FooterComponent} from "./FooterComponent.tsx";
import {ImageVisor} from "./ImageVisor.tsx";
import {useState} from "react";
import {Langs} from "../hooks/useLang.tsx";

export function MainComponent({lang}: {lang: Langs}) {
    const [image, setImage] = useState<string>('')
    const [show, setShow] = useState<boolean>(false)

    const handleImageVisor = (image: string) => {
        setImage(image)
        setShow(true) // Abre el visor de imágenes cuando se hace clic en una imagen
    }
    const infoProp = new InfoComponentProps()
    infoProp.handleImageVisor = handleImageVisor
    const closeImageVisor = () => {
        setShow(false) // Cierra el visor de imágenes
    }

    return (
        <section>
            <ImageVisor image={image} alt={image} show={show} onClose={closeImageVisor}/>
            <BodyComponent lang={lang}/>
            <InfoComponent handleImageVisor={infoProp} lang={lang}/>
            <AboutMeComponent lang={lang}/>
            <FooterComponent lang={lang}/>
        </section>
    )
}