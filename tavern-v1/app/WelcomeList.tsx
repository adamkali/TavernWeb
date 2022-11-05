'use client';

import {
    faPerson,
    faPersonChalkboard,
    faPersonDressBurst,
    faPersonRunning,
} from '@fortawesome/free-solid-svg-icons';
import { BsFillPersonFill } from '@react-icons/all-files/bs/BsFillPersonFill';
import { BsFillPersonPlusFill } from '@react-icons/all-files/bs/BsFillPersonPlusFill';
import { AiOutlineDoubleLeft } from '@react-icons/all-files/ai/AiOutlineDoubleLeft';
import { AiOutlineDoubleRight } from '@react-icons/all-files/ai/AiOutlineDoubleRight';
import Link from 'next/link';

import WelcomePList from './WelcomePList';
import Button from './components/Button';
import { useCallback, useState } from 'react';
import Card from './components/Card';

export default function WelcomeList(): JSX.Element {
    const [element, setElement] = useState(0);
    const [displayedElement, setDisplayedElement] = useState(
        WelcomePList[0].element
    );

    const doAnimation = useCallback(() => {
        // shrink the elements width in 1/2 second and shrink the opacity in 250 milliseconds
        // then bring the elements back to normal
    }, [displayedElement]);

    const changeElement = (direction: number): void => {
        setElement((prev) => {
            return prev + direction;
        });
        setDisplayedElement(
            WelcomePList.filter(
                (ele) => ele.index === element + direction
            )[0].element
        );
    };

    return (
        <div className="flex flex-1 flex-col justify-center items-center">
            <Card>
                <div className="flex flex-1 justify-center relative">
                    <div className="justify-center items-center text-4xl w-full">
                        {displayedElement}
                    </div>
                    <div className="grid grid-cols-2 justify-center align-bottom w-full">
                        <div className="flex flex-1 justify-center mb-12">
                            {element !== 0 ? (
                                <Button
                                    bgColor="accent"
                                    txColor="primary"
                                    icon={<AiOutlineDoubleLeft />}
                                    hover={true}
                                    onClick={() => changeElement(-1)}
                                />
                            ) : (
                                <div className="w-12" />
                            )}
                            {element !== WelcomePList.length ? (
                                <Button
                                    bgColor="accent"
                                    txColor="primary"
                                    icon={<AiOutlineDoubleRight />}
                                    hover={true}
                                    onClick={() => changeElement(1)}
                                />
                            ) : (
                                <div className="w-12" />
                            )}
                        </div>
                        <div className="flex flex1 flex-row justify-center align-bottom">
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
                                <Link href="/welcome/signup">
                                    Signup
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
