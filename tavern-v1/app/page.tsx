import Image from 'next/image';
import { useTavernColor } from '../helpers/hooks/useTavernColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRightToBracket,
    faUserPlus,
    faDiceD20,
} from '@fortawesome/free-solid-svg-icons';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Card from './components/Card';
import WelcomeList from './WelcomeList';

export default function Home() {
    const colorScheme = useTavernColor();

    const spacerDiv: JSX.Element = <div className="h-64" />;

    return (
        <div
            className={`flex flex1 justify-center items-center bg-vaporwave-normal-2 text-vaporwave-primary`}
        >
            <WelcomeList />
        </div>
    );
}
