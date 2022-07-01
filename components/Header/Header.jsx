import { ToggleThemeButton } from "./ToggleThemeButton"

export const Header = () => {
    return <>
        <header className="w-full   h-20 fixed backdrop-blur-md z-10 ">
            <div className="h-full mx-auto container px-5 w-full  flex justify-between items-center ">
                <h1 className="font-bold text-1xl md:text-2xl">Fernando Mercado</h1>

                <ul className="hidden  md:flex gap-5">
                    <li><a href="#" className="font-bold">Sobre Mi</a></li>
                    <li><a href="#" className="font-bold">Proyectos</a></li>
                </ul>
                <div className="relative">
                    <ToggleThemeButton />

                </div>
            </div>
        </header>
    </>
}
