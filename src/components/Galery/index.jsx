"use client"
import Tags from "../Tags"
import Card from "../Card"
import pictures from './pictures.json'
import { useState } from "react"

export default function Galery() {

    const [photos, setPhotos] = useState(pictures)
    const tags = [...new Set(pictures.map(valor => valor.tag))]

    const filterPhotos = (tag) => {
        const newPhotos = pictures.filter(photo => {
            return photo.tag === tag
        })

        setPhotos(newPhotos)
    }

    return (
        <div className="flex flex-col col-span-3 col-start-2 mt-8 gap-8">
            <h2 className="text-2xl md:text-4xl text-violet-400 font-semibold">Navegue pela galeria</h2>
            <Tags tags={tags} filterPhotos={filterPhotos} setPhotos={setPhotos}/>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
                {photos.map(photo => {
                    return (
                        <Card item={photo}/>
                    )
                })}
            </ul>
        </div>
    )
}