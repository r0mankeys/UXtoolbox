import { Hono, type Context } from 'hono'
import Layout from "./components/Layout.tsx"
import Navbar from "./components/Navbar.tsx"
import { Fragment, type FC } from 'hono/jsx'

const UX_Features: Array<string> = ["Loading Screen", "Loading Skeleton", "Scroll Spy Navigation", "Pagination", "Error Handling",]

const app = new Hono()

const Home: FC = () => {
    return (
        <Layout>
            <Fragment>
                <Navbar title="UXtoolbox" />
                <main className="flex flex-col min-h-[calc(100vh - 64px)] max-w-[1024px] mx-auto p-8 mt-2 items-center">
                    <div className="text-center max-w-[60ch] select-none">
                    <h2 className="text-3xl font-bold">A collection of UX features I like&nbsp;<span className="line-through opacity-50">and ones that illude me</span></h2>
                    </div>
                </main>
            </Fragment>
        </Layout>
    )
}

app.get('/', (c: Context) => {
    return c.html(<Home />);
})

export default app
