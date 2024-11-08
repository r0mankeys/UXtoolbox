import { Hono, type Context } from 'hono'
import { serveStatic } from "hono/deno"
import Layout from "./components/Layout.tsx"
import Navbar from "./components/Navbar.tsx"
import { Fragment, type FC, type ReactNode } from 'hono/jsx'
import PreviewCard from "./components/PreviewCard.tsx";
import MainGrid from "./components/MainGrid.tsx";
import Footer from "./components/Footer.tsx";
import MainPageBody from "./components/MainPageBody.tsx";
import FeatureInfoBox from "./components/FeatureInfoBox.tsx";
import TBC from "./components/TBC.tsx";

const projectTitle = "UXtoolbox"
interface UXFeatureProps {
    title: string,
    description: string,
    functionalities: Array<string>,
    bestPractices: Array<string>
}

const UX_Features: Array<UXFeatureProps> = [
    { title: "Loading Screen", description: "A loading screen is a feature that is used to indicate that the application is still processing and has not yet completed the task.", functionalities: ["Showing Progess", "Reasuring Users", "User Retention"], bestPractices: ["Use a loading indicator", "Provide feedback to the user", "Keep the user engaged"] },
    { title: "Loading Skeleton", description: "A loading skeleton is similar to a loading screen, except it gives the user an idea of the shape of the pending content", functionalities: ["Customizable skeleton shapes", "Skeleton loading animations", "Skeleton loading message"], bestPractices: ["Use a loading skeleton for slow loading content", "Provide feedback to the user", "Keep the user engaged"] },
    { title: "Scroll Spy Navigation", description: "Scroll spy navigation is a feature that highlights the current section of a page as the user scrolls through it.", functionalities: ["Customizable navigation links", "Smooth scrolling", "Highlight current section"], bestPractices: ["Use a scroll spy navigation for long pages", "Provide feedback to the user", "Keep the user engaged"] },
    { title: "Pagination", description: "Pagination is a feature that breaks up content into smaller, more manageable chunks, allowing users to navigate through it more easily.", functionalities: ["Allows users to digest content in chunks"], bestPractices: ["Use pagination for long lists of content", "Provide feedback to the user", "Keep the user engaged"] },
    { title: "Error Handling", description: "Error handling is a feature that helps users understand what went wrong when something goes wrong.", functionalities: ["Customizable error messages", "Error codes", "Error logs"], bestPractices: ["Use error handling for unexpected errors", "Provide feedback to the user", "Keep the user engaged"] },
]

export const formatTitle = (titleString: string): string => titleString.replace(/\s+/g, '-').toLowerCase()

const createUXRoute = (route: string): string => `/ux/${formatTitle(route)}`

export const socialLinks = {
    GitHub: "https://github.com/r0mankeys/",
    Twitter: "https://x.com/R0keys"
}

const Routes = {
    Home: "/",
    NotFound: "*",
    LoadingScreen: createUXRoute("Loading Screen"),
    LoadingSkeleton: createUXRoute("Loading Skeleton"),
    ScrollSpyNavigation: createUXRoute("Scroll Spy Navigation"),
    Pagination: createUXRoute("Pagination"),
    ErrorHandling: createUXRoute("Error Handling"),
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

const LoadingScreen: FC = () => {
    return (
        <Layout pageTitle="Loading Screen">
            <Fragment>
                <Navbar title={projectTitle} />
                <MainPageBody
                title="Loading Screen"
                >
                    <Fragment>
                        <FeatureInfoBox title="Functionalities" list={UX_Features[0].functionalities} />
                        <FeatureInfoBox title="Best Practices" list={UX_Features[0].bestPractices} />
                        <TBC />
                    </Fragment>
                </MainPageBody>
                <Footer />
            </Fragment>
        </Layout>
    )
}

const LoadingSkeleton: FC = () => {
    return (
        <Layout pageTitle="Loading Skeleton">
            <Fragment>
                <Navbar title={projectTitle} />
                <MainPageBody
                title="Loading Skeleton"
                >
                    <Fragment>
                        <FeatureInfoBox title="Functionalities" list={UX_Features[1].functionalities} />
                        <FeatureInfoBox title="Best Practices" list={UX_Features[1].bestPractices} />
                        <TBC />
                    </Fragment>
                </MainPageBody>
                <Footer />
            </Fragment>
        </Layout>
    )
}

const ScrollSpyNavigation: FC = () => {
    return (
        <Layout pageTitle="Scroll Spy Navigation">
            <Fragment>
                <Navbar title={projectTitle} />
                <MainPageBody
                title="Scroll Spy Navigation"
            >
                <Fragment>
                    <FeatureInfoBox title="Functionalities" list={UX_Features[2].functionalities} />
                    <FeatureInfoBox title="Best Practices" list={UX_Features[2].bestPractices} />
                    <TBC />
                </Fragment>
                </MainPageBody>
                <Footer />
            </Fragment>
        </Layout>
    )
}

const Pagination: FC = () => {
    return (
        <Layout pageTitle="Pagination">
            <Fragment>
                <Navbar title={projectTitle} />
                <MainPageBody
                title="Pagination"
                >
                    <Fragment>
                        <FeatureInfoBox title="Functionalities" list={UX_Features[3].functionalities} />
                        <FeatureInfoBox title="Best Practices" list={UX_Features[3].bestPractices} />
                        <TBC />
                    </Fragment>
                </MainPageBody>
                <Footer />
            </Fragment>
        </Layout>
    )
}   

const ErrorHandling: FC = () => {
    return (
        <Layout pageTitle="Error Handling">
            <Fragment>
                <Navbar title={projectTitle} />
                <MainPageBody
                title="Error Handling"
                >
                    <Fragment>
                        <FeatureInfoBox title="Functionalities" list={UX_Features[4].functionalities} />
                        <FeatureInfoBox title="Best Practices" list={UX_Features[4].bestPractices} />
                        <TBC />
                    </Fragment>  
                </MainPageBody>
                <Footer />
            </Fragment>
        </Layout>
    )
}

app.use("/assets/*", serveStatic({ root: "./" }))

// app.get("/assets/favicon.svg", serveStatic({ path: "/assets/favicon.svg" })); // Successful test hallelujah

app.get(Routes.Home, (c: Context) => {
    return c.html(<Home />);
});

app.get(Routes.LoadingScreen, (c: Context) => {
    return c.html(<LoadingScreen />);
});

app.get(Routes.LoadingSkeleton, (c: Context) => {
    return c.html(<LoadingSkeleton />);
});

app.get(Routes.ScrollSpyNavigation, (c: Context) => {
    return c.html(<ScrollSpyNavigation />);
});

app.get(Routes.Pagination, (c: Context) => {
    return c.html(<Pagination />);
});

app.get(Routes.ErrorHandling, (c: Context) => {
    return c.html(<ErrorHandling />);
});

app.get(Routes.NotFound, (c: Context) => {
    return c.html(<NotFound />);
});

export default app
