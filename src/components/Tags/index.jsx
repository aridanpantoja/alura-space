import pictures from '../Galery/pictures.json'

export default function Tags({tags, filterPhotos, setPhotos}) {
    return (
        <div className="flex justify-between items-center">
            <p className="text-2xl">Busque por tags:</p>
            <ul className="flex gap-6">
                {tags.map((tag, index) => {
                    return (
                        <li key={index} className="text-2xl p-3 bg-slate-700 rounded cursor-pointer" onClick={() => filterPhotos(tag)}>{tag}</li>
                    )
                })}
                <li key={5} className="text-2xl p-3 bg-slate-700 rounded cursor-pointer" onClick={() => setPhotos(pictures)}>Todas</li>
            </ul>
        </div>
    )
}