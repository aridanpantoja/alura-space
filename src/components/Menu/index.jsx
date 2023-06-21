

export default function Menu() {
    return (
        <nav className="col-span-1">
            <ul className="flex justify-center flex-col md:flex-row md:flex-wrap xl:flex-col gap-4 xl:gap-8 xl:mx-0">
                <li className="flex items-center gap-2 xl:gap-4">
                    <img src="/icons/home-ativo.png" alt="Ícone Início"/>
                    <a href="/" className="text-lg md:text-2xl text-indigo-500 font-bold">Início</a>
                </li>
                <li className="flex items-center gap-2 xl:gap-4">
                    <img src="/icons/mais-vistas-inativo.png" alt="Ícone Mais vistas"/>
                    <a href="/" className="text-lg md:text-2xl">Mais vistas</a>
                </li>
                <li className="flex items-center gap-2 xl:gap-4">
                    <img src="/icons/mais-curtidas-inativo.png" alt="Ícone Mais curtidas"/>
                    <a href="/" className="text-lg md:text-2xl">Mais curtidas</a>
                </li>
                <li className="flex items-center gap-2 xl:gap-4">
                    <img src="/icons/novas-inativo.png" alt="Ícone Novas"/>
                    <a href="/" className="text-lg md:text-2xl">Novas</a>
                </li>
                <li className="flex items-center gap-2 xl:gap-4">
                    <img src="/icons/surpreenda-me-inativo.png" alt="Ícone Surpreenda-me"/>
                    <a href="/" className="text-lg md:text-2xl">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}