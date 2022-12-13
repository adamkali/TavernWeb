import '../styles/globals.css';
import Image from 'next/image';
import Button from './components/Button';

import { BsFillPersonFill } from '@react-icons/all-files/bs/BsFillPersonFill';
import { BsFillPersonPlusFill } from '@react-icons/all-files/bs/BsFillPersonPlusFill';

import Link from 'next/link';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>Tavern</title>
                <meta
                    name="description"
                    content="Find Your Adventuring party"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </head>
            <body className="bg-vaporwave-normal-2 text-vaporwave-primary">
                <div className="flex justify-evenly items-top">
                    <div className="w-1/5"> </div>
                    {/* the title goes in the middle */}
                    <div className="w-3/5 my-2 h-1/10 ">
                        <Image
                            src="/tavern-transparent.png"
                            alt="tavern-logo"
                            width={600}
                            height={500}
                        />
                    </div>

                    {/* these buttons go to the right */}
                    <div className="mb-5 flex flex-row justify-center">
                        <Button
                            bgColor="accent"
                            txColor="primary"
                            icon={<BsFillPersonFill />}
                            hover={true}
                        >
                            <Link href="/welcome/login">Login</Link>
                        </Button>
                        <Button
                            bgColor="accent"
                            txColor="primary"
                            icon={<BsFillPersonPlusFill />}
                            hover={true}
                        >
                            <Link href="/welcome/signup">Signup</Link>
                        </Button>
                    </div>
                </div>
                {children}
            </body>
        </html>
    );
}
