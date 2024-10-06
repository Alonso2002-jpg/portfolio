
export function ImageVisor({image, alt, show, onClose}: {image: string, alt: string, show: boolean, onClose: () => void}){
    const imgVisorClass = "image-visor w-full h-full fixed z-10 " + (show ? "block" : "hidden")
    return (
        <div className={imgVisorClass} onClick={onClose}>
            <img src={image} alt={alt} onClick={e => e.stopPropagation()} />
        </div>
    )
}