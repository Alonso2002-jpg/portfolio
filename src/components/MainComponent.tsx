
import {BodyComponent} from "./BodyComponent.tsx";
import {InfoComponent} from "./InfoComponent.tsx";
import {NavbarComponent} from "./NavbarComponent.tsx";
import {LangProvider} from "../context/LangContext.tsx";

export function MainComponent() {

  return (
    <section className="main-section h-lvh ">
        <LangProvider>
            <NavbarComponent />
            <BodyComponent />
            <InfoComponent />
        </LangProvider>
    </section>
  )
}