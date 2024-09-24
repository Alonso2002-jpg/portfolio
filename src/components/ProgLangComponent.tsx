export function ProgLangComponent({image,percentage}: {image: string, percentage: number}){
    return (
        <section className="m-auto">
            <div className="text-center">
                <img src={image} alt="python"/>
            </div>
            <div className="text-center text-2xl">
                {percentage}%
            </div>
        </section>
    )
}