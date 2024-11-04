import type { FC  } from 'hono/jsx'
import { formatTitle } from "../index.tsx"

interface LayoutProps {
    title: string,
    description: string,
}


const PreviewCard: FC<LayoutProps> = (props) => {
    return <a className="hover:scale-[1.02] ease-in duration-200 shadow" href={`ux/${formatTitle(props.title)}`}>
        <li className="flex flex-col bg-slate-100 dark:bg-[hsl(240, 6%, 15%)] text-gray-900 dark:text-slate-200 list-none rounded-md h-60">
            <div className="font-bold p-4">{props.title}</div>
            <hr className="h-[0.5px] bg-gray-400 border-0 dark:bg-gray-200" />
            <div className="p-4">{props.description}</div>
        </li>
    </a>
}

export default PreviewCard;
