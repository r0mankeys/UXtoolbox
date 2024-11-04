import type { FC, ReactNode  } from 'hono/jsx'

interface LayoutProps {
    children: ReactNode | ReactNode[]
}

const MainGrid: FC<LayoutProps> = (props) => {
    return <ul className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-8">
        {props.children}
    </ul>
}

export default MainGrid;
