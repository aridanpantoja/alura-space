import { Github, Instagram, Linkedin } from "lucide-react";


export default function Footer() {
    return (
        <footer className="col-span-full flex flex-col gap-4 text-center bg-blue-800 px-6 py-12 mt-8">
            <div className="flex gap-8 justify-center">
                <a href="https://www.linkedin.com/in/aridan-pantoja/" target="_blank">
                    <Linkedin />
                </a>
                <a href="https://github.com/aridanpantoja" target="_blank">
                    <Github />
                </a>
                <a href="https://www.instagram.com/aridannnn/" target="_blank">
                    <Instagram />
                </a>
            </div>
            <p className="text-xl">Desenvolvido por Aridan</p>
        </footer>
    )   
}