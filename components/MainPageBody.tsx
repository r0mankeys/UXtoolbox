import type { FC, ReactNode } from 'hono/jsx'
import type { HtmlEscapedString } from "hono/utils/html";

interface MainPageBodyProps {
    title: string,
    children: Promise<HtmlEscapedString> | ReactNode
}

const MainPageBody: FC<MainPageBodyProps> = (props) => {
    return (
        <main className="flex flex-col min-h-[calc(100vh - 64px)] max-w-[40rem] mx-auto p-8 mt-4">
            <h1 className="font-extrabold text-3xl mb-8">{props.title}</h1>
            {props.children}
        </main>
    )
}

export default MainPageBody
