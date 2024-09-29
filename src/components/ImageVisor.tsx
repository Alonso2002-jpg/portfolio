
export function ImageVisor({image, alt, show, onClose}: {image: string, alt: string, show: boolean, onClose: () => void}){
    const imgVisorClass = "image-visor w-full h-full fixed z-10 " + (show ? "block" : "hidden")
    return (
        <div className={imgVisorClass} onClick={onClose}> {/* Cierra el visor de imágenes al hacer clic fuera de la imagen */}
            <img src={image} alt={alt} onClick={e => e.stopPropagation()} /> {/* Evita que el visor de imágenes se cierre al hacer clic en la imagen */}
        </div>
    )
}