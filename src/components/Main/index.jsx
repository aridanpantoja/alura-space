import Banner from "../Banner"
import Menu from "../Menu"
import Galery from "../Galery"
import Popular from "../Popular"

export default function Main() {
    return (
        <main className="flex flex-col xl:grid xl:grid-cols-5 xl:gap-x-7 mx-6 xl:mx-6">
            <Menu />
            <Banner />
            <Galery />
            <Popular />
        </main>
    )
}