export default function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-6 md:py-12">
            <img src="/images/logo.png" alt="Logo do Alura Space" className="w-40 md:w-auto"/>
            <div className="flex justify-between items-center w-2/6 relative z-0 rounded-xl border-solid border-2 p-2 md:p-4 border-indigo-400">
                <input type="text" placeholder="O que você procura?" className="block w-full text-sm md:text-xl bg-transparent border-transparent outline-none"/>
                <img src="/icons/search.png" alt="Ícone da lupa de pesquisa" className="cursor-pointer"/>
            </div>
        </header>
    )
}