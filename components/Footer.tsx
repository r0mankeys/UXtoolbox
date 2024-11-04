import type { FC } from "hono/jsx";
import { socialLinks } from "../index.tsx";


const Footer: FC = () => {
    return <footer className="w-[100%] flex items-center justify-center select-none">
        <span className="inline-block items-center justify-center p-4 mb-8 text-base font-medium text-gray-500 rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">Made with 💙 by&nbsp;<a href={socialLinks.GitHub} target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Roman</a></span>
    </footer>
}

export default Footer;
