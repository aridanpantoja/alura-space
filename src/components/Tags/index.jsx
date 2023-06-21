import pictures from '../Galery/pictures.json'

export default function Tags({tags, filterPhotos, setPhotos}) {
    return (
        <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-xl">Busque por tags:</p>
            <ul className="flex flex-wrap gap-2">
                <li key={5} className="xl:text-lg p-2 bg-slate-700 hover:bg-indigo-500 transition-all rounded cursor-pointer" onClick={() => setPhotos(pictures)}>Todas</li>
                {tags.map((tag, index) => {
                    return (
                        <li key={index} className="xl:text-lg p-2 bg-slate-700 hover:bg-indigo-500 transition-all rounded cursor-pointer" onClick={() => filterPhotos(tag)}>{tag}</li>
                    )
                })}
            </ul>
        </div>
    )
}