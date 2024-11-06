import type { FC, ReactNode  } from 'hono/jsx'
import { html } from 'hono/html';
import type { HtmlEscapedString } from "hono/utils/html";

interface LayoutProps {
    pageTitle: string,
    children: Promise<HtmlEscapedString> | ReactNode
}

const svg = `"data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" rx="8" fill="#1794F4"/>
<path d="M5.77437 10.668C5.52237 10.668 5.2867 10.6167 5.06737 10.514C4.8527 10.4113 4.67304 10.241 4.52837 10.003C4.3837 9.765 4.28804 9.44767 4.24137 9.051L3.90537 5.95L5.57137 5.845C5.51537 6.52167 5.4687 7.07467 5.43137 7.504C5.39404 7.93333 5.36604 8.27167 5.34737 8.519C5.3287 8.76167 5.3147 8.939 5.30537 9.051C5.29604 9.15833 5.28904 9.22833 5.28437 9.261C5.28437 9.29367 5.28437 9.31467 5.28437 9.324C5.28437 9.61333 5.35204 9.81867 5.48737 9.94C5.62737 10.0613 5.81404 10.122 6.04737 10.122C6.17804 10.122 6.30637 10.0963 6.43237 10.045C6.56304 9.99367 6.67037 9.898 6.75437 9.758C6.84304 9.618 6.8897 9.41967 6.89437 9.163L6.95737 5.915L7.65737 5.88L7.44737 9.17C7.4287 9.48267 7.3657 9.73933 7.25837 9.94C7.15104 10.136 7.0157 10.2877 6.85237 10.395C6.68904 10.4977 6.51404 10.5677 6.32737 10.605C6.1407 10.647 5.95637 10.668 5.77437 10.668ZM9.26939 10.605L8.46439 10.409L9.82239 8.239L8.60439 6.041L10.2214 5.845L10.8374 7.574L11.6354 5.845L12.4404 6.034L11.0824 8.197L12.4614 10.395L10.8444 10.598L10.0884 8.827L9.26939 10.605Z" fill="white"/>
</svg>"`

const Layout: FC<LayoutProps> = (props) => {
  return (html`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${props.pageTitle}</title>
        <link rel="icon" href=${svg}/>
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
