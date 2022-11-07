// create a form:
// it should have a username input
// it should have a password input
// it should have a button that sends a LoginRequest to the server
// there should be a LoginRequest That is changed based on a use memo

'use client';

// ----- React  Imports ----- //
import React, { useState, useMemo, useEffect } from 'react';

// ----- Icon Imports ----- //
import { BsPersonSquare } from '@react-icons/all-files/bs/BsPersonSquare';

// ----- Tavern Imports ----- //
import { TavernModels } from '../../../providers/receivers';
import Input from '../../components/Input';

// ----- Tavern Definis ----- //
type AuthRequest = TavernModels.TavernRequests.LoginRequest;

export default function LoginForm({
    children,
    props,
}: {
    children: JSX.Element;
    props: any;
}): JSX.Element {
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

    return (
        <div className="flex flex-1 flex-col justify-end">
            <div>
                <Input
                    props={{
                        label: 'Username',
                        icon: <div>Icon</div>,
                        type: 'email',
                        placeholder: 'HeroMan100',
                        value: username,
                        onChange: (e: any) =>
                            setUsername(e.target.value),
                    }}
                />
                <Input
                    props={{
                        label: 'Password',
                        icon: <div>Icon</div>,
                        type: 'password',
                        placeholder: '********',
                        value: password,
                        onChange: (e: any) =>
                            setPassword(e.target.value),
                    }}
                />
            </div>
        </div>
    );
}
