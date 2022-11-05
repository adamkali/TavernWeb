import { FaDiceD20 } from '@react-icons/all-files/fa/FaDiceD20';

export default function Card({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="card relative text-center">
            <div className="card-background absolute animate-light-flicker text-vaporwave-dark ">
                <span className="flex justify-center items-top text-32xl">
                    <FaDiceD20 />
                </span>
            </div>
            <div className="flex flex-1 flex-col text-center w-full absolute">
                {children}
            </div>
        </div>
    );
}
