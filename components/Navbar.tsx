import type { FC  } from 'hono/jsx'

interface LayoutProps {
    title: string,
}

const Navbar: FC<LayoutProps> = (props) => {
    return (
        <header className="z-[999]">
            <nav className="shadow min-h-16 px-8 py-4 select-none bg-stone-50 dark:bg-[#121212]">
                <h1 className="text-2xl font-extrabold"><a href="/">{props.title}&nbsp;&nbsp;⚒️</a></h1>
            </nav>
        </header>
    )
}

export default Navbar;
