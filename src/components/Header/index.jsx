export default function Header() {
    return (
        <header className="col-span-full flex justify-between items-center px-6 py-12">
            <img src="/images/logo.png" alt="Logo do Alura Space" />
            <div className="flex justify-between items-center w-2/6 relative z-0 rounded-xl border-solid border-2 px-4 py-4 border-indigo-400">
                <input type="text" placeholder="O que você procura?" className="block w-full text-xl bg-transparent border-transparent outline-none"/>
                <img src="/icons/search.png" alt="Ícone da lupa de pesquisa" className="cursor-pointer"/>
            </div>
        </header>
    )
}