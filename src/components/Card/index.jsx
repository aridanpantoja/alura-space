"use client"
import { Maximize2, X } from 'lucide-react'
import { useState } from 'react'

export default function Card({ item }) {
    
    const [modal, setModal] = useState(false)

    function toggleModal() {
        setModal(!modal)
    }   
    
    return (
        <li key={item.id}>
            <div className="bg-blue-800 hover:bg-blue-900 transform hover:scale-105 rounded-2xl transition-all ">
                <img
                className="w-full rounded-t-2xl cursor-pointer"
                src={item.imagem}
                alt={item.titulo}
                onClick={() => toggleModal()}
                />
                <div className="grid grid-cols-4 grid-rows-2 p-4">
                    <p className="font-bold text-xl col-span-3">{item.titulo}</p>
                    <p className="col-span-3 text-xl">{item.creditos}</p>
                    <div className="flex items-center justify-end">
                        <Maximize2 className="cursor-pointer transform hover:scale-125 transition-all" onClick={() => toggleModal()}/>
                    </div>
                </div>
            </div>

            {modal && (
                <div className="flex items-center justify-center p-6 fixed top-0 right-0 h-screen w-screen z-10 bg-black/90">
                    <div className="relative">
                            <img src={item.imagem} alt={item.titulo} />
                            <X size={48} className="absolute top-0 right-0 m-2 cursor-pointer transform hover:scale-125 transition-all" onClick={() => toggleModal()}/>
                    </div>
                </div>
            )}
        </li>
    )
}