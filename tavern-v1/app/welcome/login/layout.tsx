 import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex1 flex-col w-full h-full justify-start bg-vaporwave-normal-2 text-vaporwave-primary">
            <h2 className="text-4xl text-center"></h2>
            <Card>
                {children}
            </Card>
        </div>
    );
}
