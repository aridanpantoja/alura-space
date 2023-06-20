import Banner from "../Banner"
import Menu from "../Menu"
import Galery from "../Galery"
import Popular from "../Popular"

export default function Main() {
    return (
        <main className="grid grid-cols-5 gap-x-7 mx-6">
            <Menu />
            <Banner />
            <Galery />
            <Popular />
        </main>
    )
}