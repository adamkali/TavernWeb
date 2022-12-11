'use client';

// ----- React  Imports ----- //
import React, { useState, useMemo, useEffect } from 'react';

// ----- Icon Imports ----- //
import { BsFillPersonFill } from '@react-icons/all-files/bs/BsFillPersonFill';
import { BsFillUnlockFill } from '@react-icons/all-files/bs/BsFillUnlockFill';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';

// ----- Tavern Imports ----- //
import TavernProfile, {
    TavernModels,
} from '../../../providers/receivers';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Authenticate from '../../../providers/receivers/Authenticate';
import Link from 'next/link';

// ----- Tavern Definis ----- //
type AuthRequest = TavernModels.TavernRequests.LoginRequest;

export default function LoginForm(): JSX.Element {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState({} as AuthRequest);

    useMemo(() => {
        setToken((prev) => {
            return {
                username,
                password,
            } as AuthRequest;
        });
    }, [username, password]);

    const onSubmit = () => {
        TavernProfile.login({ body: token }).then(
            (resp) => {
                resp.check()
                    ? resp.run((r) => {
                          Authenticate.setToken(r);
                          alert('Logged in!');
                      })
                    : console.log(resp.error());
            },
            (err) => {
                console.log(err);
            }
        );
    };

    return (
        <div className="flex flex-row w-full my-16 px-8">
            <div className="h-full w-full"></div>
            <div className="grid grid-rows-3 w-full">
                <div className="flex flex-1 flex-col justify-end px-8">
                    <Input
                        props={{
                            label: 'Username',
                            icon: <BsFillPersonFill />,
                            type: 'email',
                            placeholder: 'HeroMan100',
                            value: username,
                            txColor: 'secondary',
                            bgColor: 'accent',
                            onChange: (e: any) =>
                                setUsername(e.target.value),
                        }}
                    />
                    <Input
                        props={{
                            label: 'Password',
                            type: 'password',
                            icon: <BsFillUnlockFill />,
                            placeholder: '********',
                            value: password,
                            txColor: 'secondary',
                            bgColor: 'accent',
                            onChange: (e: any) =>
                                setPassword(e.target.value),
                        }}
                    />
                </div>
                <div className=" px-8 justify-end mt-16">
                    <Button
                        bgColor="accent"
                        txColor="primary"
                        icon={<FaCheck />}
                        hover={true}
                        onClick={onSubmit}
                    >
                        Login
                    </Button>
                </div>
                <p>
                    Don't have an account? Then click{' '}
                    <Link
                        href="/welcome/signup"
                        className="text-vaporwave-secondary secondary-shine"
                    >
                        here!
                    </Link>
                </p>
            </div>
        </div>
    );
}
