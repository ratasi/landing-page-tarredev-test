import { itemsNavbar } from "@/data";
import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";

const Navbar = () => {
    return (
        <nav className="fixed z-20 flex flex-col items-center w-full 
        mt-auto justify-center h-max bottom-20">
            <div className="flex items-center gap-2 justify-center 
            px-4 py-1 dark:bg-white/10 bg-slate-800/10 background-blur-sm rounded-full">
                {itemsNavbar.map((item) => (
                    <div key={item.id} className="cursor-pointer hover:dark-bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition duration-150">
                        <Link href={item.link}>{item.icon} </Link>
                    </div>
                ))}
                <ToggleTheme />
            </div>
        </nav>
    );
}

export default Navbar;