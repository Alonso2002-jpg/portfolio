
import {BodyComponent} from "./BodyComponent.tsx";
import {InfoComponent} from "./InfoComponent.tsx";
import {NavbarComponent} from "./NavbarComponent.tsx";
import {LangProvider} from "../context/LangContext.tsx";
import {AboutMeComponent} from "./AboutMeComponent.tsx";
import {FooterComponent} from "./FooterComponent.tsx";
import {ImageVisor} from "./ImageVisor.tsx";
import {useState} from "react";

export function MainComponent() {
    const [image, setImage] = useState<string>('')
    const [show, setShow] = useState<boolean>(false)

    const handleImageVisor = (image: string) => {
        console.log(image)
        setImage(image)
        setShow(true) // Abre el visor de imágenes cuando se hace clic en una imagen
    }

    const closeImageVisor = () => {
        setShow(false) // Cierra el visor de imágenes
    }

    return (
        <section className="main-section h-lvh ">
            <LangProvider>
                <ImageVisor image={image} alt={image} show={show} onClose={closeImageVisor} />
                <NavbarComponent />
                <BodyComponent />
                <InfoComponent handleImageVisor={handleImageVisor}/>
                <AboutMeComponent />
                <FooterComponent />
            </LangProvider>
        </section>
    )
}