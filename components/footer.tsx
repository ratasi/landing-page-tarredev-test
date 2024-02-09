import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
    return (
        <footer className="max-w-3xl mx-auto">
            <div className="md:flex md:justify-between">
                <div>
                    <h4 className="text-3xl font-bold my-6 md:my-0">TarreDev</h4>
                </div>
                <div className="px-2 flex justify-between md:gap-8 items-center">
                    <Link href="#about-me">Sobre mi</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#services">Servicios</Link>
                    <Link href="#portfolio">Portfolio </Link>
                    <Link href="#contact">Contacto</Link>
                </div>
            </div>
            <Separator className="my-4" />
            <div className="text-center">&copy; 2024 | Landing Page by TarreDev</div>
        </footer>
    );
}

export default Footer;