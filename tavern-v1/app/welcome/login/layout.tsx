import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex1 flex-col w-full h-full justify-start bg-vaporwave-normal-2 text-vaporwave-primary">
            <h2 className="text-4xl text-center"></h2>
            <div className="grid gap-4 grid-cols-2 grid-rows-1">
                <div className="text-vaporwave-normal secondary-shine text-3xl animate-light-flicker">
                    <FontAwesomeIcon icon={faDiceD20} />
                </div>
                <div className="flex flex1 flex-col justify-center items-center">
                    {children}
                </div>
            </div>
            <p>
                Don't have an account? Let's get you
                <a
                    href="/welcome/singup"
                    className="text-vaporwave-secondary secondary-shine"
                >
                    Signed Up
                </a>
            </p>
        </div>
    );
}
