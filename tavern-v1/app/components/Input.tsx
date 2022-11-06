// Create an input component

export default function Input({
    children, 
    props
}: {
    children: JSX.Element,
    props: any
}): JSX.Element {
    return (
        <div>
        <div>
            {props.label}
        </div>
        <div className="flex flex-1 flex-row justify-evenly items-center bg-vaporwave-accent text-vaporwave-secondary">
            <div className="w-1/5">
                {props.icon}
            </div>
            <div className="w-4/5" >
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </div>
        </div>
    );
} 