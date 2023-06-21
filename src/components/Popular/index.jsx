import pictures from './popular.json'
import Card from '../Card'

export default function Popular() {
    return (
        <div className="">
            <h2 className="text-4xl text-violet-400 my-8">Populares</h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 xl:flex flex-col gap-4">
                {pictures.map(picture => {
                    return (
                        <li key={picture.id} className="relative">
                            <img src={picture.imagem} alt={picture.titulo} className="rounded-2xl w-full xl:w-4/5"/>
                            <div className="absolute -top-1 -left-1 bg-indigo-500 w-8 h-8 rounded-full flex items-center justify-center">{picture.id}º</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}