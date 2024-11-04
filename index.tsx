import { Hono, type Context } from 'hono'
import Layout from "./components/Layout.tsx"
import Navbar from "./components/Navbar.tsx"
import { Fragment, type FC, type ReactNode } from 'hono/jsx'
import PreviewCard from "./components/PreviewCard.tsx";
import MainGrid from "./components/MainGrid.tsx";
import Footer from "./components/Footer.tsx";

const projectTitle = "UXtoolbox"

interface UXFeatureProps {
    title: string,
    description: string,
}

const UX_Features: Array<UXFeatureProps> = [
    { title: "Loading Screen", description: "A loading screen is a feature that is used to indicate that the application is still processing and has not yet completed the task." },
    { title: "Loading Skeleton", description: "A loading skeleton is similar to a loading screen, except it gives the user an idea of the shape of the pending content" },
    { title: "Scroll Spy Navigation", description: "Scroll spy navigation is a feature that highlights the current section of a page as the user scrolls through it." },
    { title: "Pagination", description: "Pagination is a feature that breaks up content into smaller, more manageable chunks, allowing users to navigate through it more easily." },
    { title: "Error Handling", description: "Error handling is a feature that helps users understand what went wrong when something goes wrong." },
]

export const formatTitle = (titleString: string): string => titleString.replace(/\s+/g, '-').toLowerCase()

export const socialLinks = {
    GitHub: "https://github.com/r0mankeys/",
    Twitter: "https://x.com/R0keys"
}

const Routes = {
    Home: "/",
    NotFound: "*"
}

const app = new Hono()

const Home: FC = () => {
    return (
        <Layout pageTitle={projectTitle}>
            <Fragment>
                <Navbar title={projectTitle} />
                <main className="flex flex-col min-h-[calc(100vh - 64px)] max-w-[1024px] mx-auto p-8 mt-2 items-center">
                    <div className="text-center max-w-[60ch] select-none">
                    <h2 className="text-3xl font-bold">A collection of UX features I like&nbsp;<span className="line-through opacity-50">and ones that illude me</span></h2>
                    </div>
                    <MainGrid>
                        {UX_Features.map((feature, index) => (
                            <PreviewCard key={index} title={feature.title} description={feature.description} /> as ReactNode
                        ))}
                    </MainGrid>
                </main>
                <Footer />
            </Fragment>
        </Layout>
    )
}

const NotFound: FC = () => {
    return ( 
         <Layout pageTitle="404 | Not Found">
          <Fragment>
             <Navbar title={projectTitle} />
              <main className="flex flex-col min-h-[calc(100vh - 64px)] max-w-[1024px] mx-auto p-8 mt-2 items-center justify-center">
                 <div className="flex text-center max-w-[60ch] select-none items-center justify-center">
                     <h1 className="text-3xl font-semibold border-r-[1px] border-slate-800 dark:border-slate-200 border-solid mr-6 px-6 py-4">404</h1><h2>Page Not Found</h2>
                 </div>
             </main>
             <Footer />
          </Fragment>
        </Layout>
    )
}

app.get(Routes.Home, (c: Context) => {
    return c.html(<Home />);
})

app.get(Routes.NotFound, (c: Context) => {
    return c.html(<NotFound />);
});

export default app
