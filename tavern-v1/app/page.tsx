import Image from 'next/image';
import { useTavernColor } from '../helpers/hooks/useTavernColor';
<<<<<<< HEAD
import styles from './page.module.css';
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRightToBracket,
    faUserPlus,
    faDiceD20,
} from '@fortawesome/free-solid-svg-icons';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Card from './components/Card';
import WelcomeList from './WelcomeList';
>>>>>>> Vaporwave

export default function Home() {
    const colorScheme = useTavernColor();

<<<<<<< HEAD
    return (
        <div
            className={`flex flex1 flex-col w-full h-full bg-vaporwave-normal body-font font-source text-vaporwave-primary`}
        >
            <div className="flex flex1 flex-row justify-evenly items-top">
                <div className="w-1/5"> </div>
                {/* the title goes in the middle */}
                <div className="w-3/5 my-14">
                    <Image
                        src="/tavern-transparent.png"
                        width={700}
                        height={500}
                    />
                </div>

                {/* these buttons go to the right */}
                <div className="flex flex1 flex-row">
                    {/* the login button */}
                    <div className="flex flex1 flex-col justify-center items-center pr-8">
                        <a
                            href="/welcome/login"
                            className={`flex flex1 flex-col justify-center items-center bg-vaporwave-dark text-light-dark font-bold py-2 px-4 rounded-full`}
                        >
                            <i className="fa-solid fa-right-to-bracket"></i>
                            Login
                        </a>
                    </div>
                    <div className="flex flex1 flex-col justify-center items-center pr-8">
                        <a
                            href="/welcome/signup"
                            className={`flex flex1 flex-col justify-center items-center bg-vaporwave-dark text-light-dark font-bold py-2 px-4 rounded-full`}
                        >
                            <i className="fa-solid fa-user-plus"></i>
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
            {/* center the child paragraphsin the middle */}
            <div className="flex flex1 flex-col w-full justify-center items-center">
                {/* the child paragraphs */}
                <div className="flex flex1 flex-col justify-center items-center">
                    <div
                        className={`bg-vaporwave-dark py-5 my-2 rounded-md w-4/5 h-1/5 px-12 `}
                    >
                        <p className="text-2xl text-center justify-center items-center">
                            Welcome to the Tavern! Sit down, relax, and
                            find your adventuring party! Tavern, is a{' '}
                            <b
                                className={`text-${colorScheme.secondary}`}
                            >
                                Table Top Role Playing Game
                            </b>{' '}
                            group finder.
                        </p>
                    </div>
                    <div
                        className={`bg-vaporwave-dark py-5 my-2 rounded-md w-4/5 h-1/5 px-12 `}
                    >
                        <p className="text-2xl text-center justify-center items-center">
                            We welcome anyone who is interested in
                            learning how to play, or the experienced
                            player who is looking for a new group to
                            join. Whatever the case, Tavern is the place
                            for you!
                        </p>
                    </div>
                    <div
                        className={`bg-vaporwave-dark py-5 my-2 rounded-md w-4/5 h-1/5 px-12 `}
                    >
                        <p className="text-2xl text-center justify-center items-center">
                            Remember we wish to foster a community of
                            players, so please be respectful of others.
                            No matter your race, gender, background, or
                            religion we want to make sure everyone feels
                            welcome. So please, remember the Tavern's
                            golden rule:{' '}
                            <b
                                className={`text-${colorScheme.secondary}`}
                            >
                                Be most excellent to each other!
                            </b>
                            .
                        </p>
                    </div>
                    <div
                        className={`bg-vaporwave-dark py-5 my-2 rounded-md w-4/5 h-1/5 px-12 `}
                    >
                        <p className="text-2xl text-center justify-center items-center">
                            We are currently in{' '}
                            <b
                                className={`text-${colorScheme.secondary}`}
                            >
                                Alpha
                            </b>
                            , so please be patient with us as we work
                            out the kinks. If you have any questions,
                            comments, or concerns, please feel free to
                            contact us at{' '}
                            <b
                                className={`text-${colorScheme.secondary}`}
                            >
                                help@mail.tavern-profile.xyz
                            </b>
                        </p>
                    </div>
                    <div
                        className={`bg-vaporwave-dark py-5 my-2 rounded-md w-4/5 h-1/5 px-12 `}
                    >
                        <p className="text-2xl text-center justify-center items-center">
                            Now go out there and find your party!
                        </p>
                        {/* add buttons to the left and right */}
                        <div className="flex flex1 flex-row justify-center items-center">
                            <a
                                href="/welcome/login"
                                className={`flex flex1 flex-row rounded-md my-5 mx-5 justify-center items-center bg-vaporwave-normal text-vaporwave-tertiary font-bold py-2 px-4 rounded-sm`}
                            >
                                <i className="fa-solid fa-right-to-bracket"></i>
                                Login
                            </a>
                            <a
                                href="/welcome/signup"
                                className={`flex flex1 flex-row rounded-md my-5 mx-5 justify-center items-center bg-vaporwave-normal text-vaporwave-tertiary font-bold py-2 px-4 rounded-sm`}
                            >
                                <i className="fa-solid fa-user-plus"></i>
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
=======
    const spacerDiv: JSX.Element = <div className="h-64" />;

    return (
        <div
            className={`flex flex1 justify-center items-center bg-vaporwave-normal-2 text-vaporwave-primary`}
        >
            <WelcomeList />
>>>>>>> Vaporwave
        </div>
    );
}
