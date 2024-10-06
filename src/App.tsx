import './App.css'
import {MainComponent} from "./components/MainComponent.tsx";
import {NavbarComponent} from "./components/NavbarComponent.tsx";
import {useLang} from "./hooks/useLang.tsx";

function App() {
    const { lang, changeLang } = useLang();
    return (
        <div className="App">
            <NavbarComponent lang={lang} changeLang={changeLang}/>
            <MainComponent lang={lang}/>
        </div>
)
}

export default App
