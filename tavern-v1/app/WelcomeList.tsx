'use client';

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
                <div className="flex flex-1 flex-col justify-between relative">
                    <div className="top-0 justify-center items-center text-4xl w-full px-32 min-h-96 max-h-96">
                        {displayedElement}
                    </div>
                    <div className="bottom-0 grid grid-rows-2 justify-center w-full">
                        <div className="flex flex-1 flex-row justify-evenly mb-12">
                            {element !== 0 ? (
                                <Button
                                    bgColor="accent"
                                    txColor="primary"
                                    icon={<AiOutlineDoubleLeft />}
                                    hover={true}
                                    onClick={() => changeElement(-1)}
                                />
                            ) : (
                                <Button 
                                    bgColor="hidden"
                                    txColor="hidden"
                                    hover={false}
                                />
                            )}
                            {element !== WelcomePList.length -1 ? (
                                <Button
                                    bgColor="accent"
                                    txColor="primary"
                                    icon={<AiOutlineDoubleRight />}
                                    hover={true}
                                    onClick={() => changeElement(1)}
                                />
                            ) : (
                                <Button 
                                    bgColor="hidden"
                                    txColor="hidden"
                                    hover={false}
                                />                            )}
                        </div>
                        <div className="flex flex-1 flex-row justify-evenly mb-12">
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
