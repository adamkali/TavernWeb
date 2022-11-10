// Create an input component

export default function Input({ props }: { props: any }): JSX.Element {
    const bgColor = () => {
        switch (props.bgColor) {
            case 'normal':
                return 'bg-vaporwave-normal-1';
            case 'accent':
                return 'bg-vaporwave-accent-2';
            case 'dark':
                return 'bg-vaporwave-dark-2';
            default:
                return 'bg-vaporwave-normal-1';
        }
    };

    const txColor = () => {
        switch (props.txColor) {
            case 'primary':
                return 'text-vaporwave-primary';
            case 'accent':
                return 'text-vaporwave-secodary';
            case 'dark':
                return 'text-vaporwave-dark-1';
            default:
                return 'text-vaporwave-primary';
        }
    };

    return (
        <div
            className={`card card-body mb-4 ${bgColor + ' ' + txColor} animate-light-flicker`}
        >
            <div>{props.label}</div>
            <div className="text-vaporwave-secondary">
                <div className="w-1/5">{props.icon}</div>
                <div className="w-4/5">
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
