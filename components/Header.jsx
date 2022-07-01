import { ToggleThemeButton } from "./Header/ToggleThemeButton"

export const Header = () => {
    return <>
        <header className="w-full mx-auto container h-20">
            <div className="h-full flex justify-between items-center ">
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
