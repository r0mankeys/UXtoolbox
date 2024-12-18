import type { FC, ReactNode  } from 'hono/jsx'
import { html } from 'hono/html';
import type { HtmlEscapedString } from "hono/utils/html";

interface LayoutProps {
    pageTitle: string,
    children: Promise<HtmlEscapedString> | ReactNode
}

const Layout: FC<LayoutProps> = (props) => {
  return (html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${props.pageTitle}</title>
        <link rel="icon" href="/assets/favicon.svg" />
        <script src="https://cdn.twind.style"></script>
      </head>
      <body class="bg-gray-50 text-zinc-900 dark:bg-zinc-900 dark:text-slate-200">
         ${props.children}
      </body>
    </html>
    `
  )
}

export default Layout;
