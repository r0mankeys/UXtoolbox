import type { FC } from 'hono/jsx'

interface FeatureInfoBoxProps {
    title: string,
    list: Array<string>
}

const FeatureInfoBox: FC<FeatureInfoBoxProps> = (props) => {
    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-2xl italic mt-4">{props.title}</h2>
            <ul className="list-disc list-inside ml-4 mt-4 w-fit">
                {props.list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default FeatureInfoBox;
