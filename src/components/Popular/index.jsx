import pictures from './popular.json'
import Card from '../Card'

export default function Popular() {
    return (
        <div className="">
            <h2 className="text-4xl text-violet-400 my-8">Populares</h2>
            <ul className="flex flex-col gap-4">
                {pictures.map(picture => {
                    return (
                        <li key={picture.id}>
                            <img src={picture.imagem} alt={picture.titulo} className="rounded-2xl w-4/5"/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}