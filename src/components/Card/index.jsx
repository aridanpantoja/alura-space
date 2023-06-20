import { Heart, Maximize2 } from 'lucide-react'

export default function Card({item}) {
    return (
        <li key={item.id} className="bg-blue-800 rounded-2xl">
            <img
            className="w-full rounded-t-2xl"
            src={item.imagem}
            alt={item.titulo}
            />
            <div className="grid grid-cols-4 grid-rows-2 p-4">
                <p className="font-bold text-xl col-span-3">{item.titulo}</p>
                <p className="col-span-3 text-xl">{item.creditos}</p>
                <div className="flex items-center justify-end gap-1">
                    <Heart />
                    <Maximize2 />
                </div>
            </div>
        </li>
    )
}