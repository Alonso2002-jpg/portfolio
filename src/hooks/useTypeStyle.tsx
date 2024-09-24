import {useState} from "react";

export function useTypeStyle(userNames: string[]) {
    const [counterName, setCounterName] = useState(0)
    const [typeStyleText, setTypeStyleText] = useState(userNames[counterName])
    const [reverseText, setReverseText] = useState(false)
    const getChar = () => {
        if (typeStyleText === userNames[counterName]) {
            setReverseText(true);
        } else if (typeStyleText === '') {
            setCounterName(counterName === userNames.length - 1 ? 0 : counterName + 1)
            setTypeStyleText(userNames[counterName - 1])
            setReverseText(false);
        }

        if (!reverseText) {
            setTypeStyleText(userNames[counterName].slice(0, typeStyleText.length + 1));
        } else {
            setTypeStyleText(typeStyleText.slice(0, typeStyleText.length - 1));
        }
    }
    setTimeout(() => {
        getChar()
    }, 300)

    return { typeStyleText }
}