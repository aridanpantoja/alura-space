export default function Banner() {
    return (
        <div className="col-span-4 relative w-full">
            <h1 className="block text-4xl z-10 absolute top-28 left-11 text-white w-2/6 font-bold">A galeria mais completa de fotos do espaço!</h1>
            <img src="/images/banner.png" alt="Imagem da terra vista do espaço" className="z-0 h-72 w-full absolute top-0"/>
        </div>
    )
}