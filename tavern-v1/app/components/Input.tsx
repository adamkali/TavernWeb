'use client';

export default function Input({ props }: { props: any }): JSX.Element {
    const bgColor = (p: string) => {
        switch (p) {
            case 'normal':
                return 'input-container input--normal animate-light-flicker';
            case 'accent':
                return 'input-container input--accent animate-light-flicker';
            case 'dark':
                return 'input-container input--dark animate-light-flicker';
            default:
                return 'input-container input--normal animate-light-flicker';
        }
    };

    const txColor = (p: string) => {
        switch (p) {
            case 'primary':
                return 'text-vaporwave-primary';
            case 'accent':
                return 'text-vaporwave-secodary';
            case 'dark':
                return 'text-vaporwave-tertiary';
            default:
                return 'text-vaporwave-primary';
        }
    };

    console.log(txColor(props.txColor), bgColor(props.bgColor));

    return (
        <div
            className={`group relative w-full flex my-16 group-hover:scale-y-125`}
        >
            <div
                className={`
                    ${bgColor(props.bgColor)}
                    absolute w-full h-20 
                    inset-0 input--accent
                    `}
            >
                <div
                    className="w-1/5 text-2xl 
                                justify-start 
                                align-middle mt-6 pl-8
                                group-hover:scale-150"
                >
                    {props.icon}
                </div>
            </div>
            <div className="absolute w-full inset-0 z-10 ">
                <div className=" font-bold flex mx-16 justify-start">
                    {props.label}
                </div>
                <div
                    className={`flex flex-1 flex-row 
                        w-full text-2xl align-bottom 
                        mb-8 ${txColor(props.txColor)}
                        group-hover:scale-150`}
                >
                    <div className="w-2/5"></div>
                    <input
                        className="w-3/5 input-holder h-full"
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
