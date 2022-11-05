import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

export default function Button({ ...props }): JSX.Element {
    const hoverFactory = (ret: string, hover?: boolean): string => {
        return hover ? ret : '';
    };

    const textColorFactory = (color?: string): string => {
        switch (color) {
            case 'primary':
                return 'text-vaporwave-primary group-hover:primary-shine-lg';
            case 'secondary':
                return 'text-vaporwave-secondary inset-0 group-hover:secondary-shine-lg absolute group-hover:scale-125 z-10 ';
            case 'tertiary':
                return 'text-vaporwave-tertiary inset-0 group-hover:tertiary-shine-lg absolute group-hover:scale-125 z-10';
            default:
                return 'text-vaporwave-primary inset-0  group-hover:primary-shine-lg absolute group-hover:scale-125 z-10';
        }
    };

    const textColor = `${textColorFactory(
        props.txColor
    )} button0-text flex ${hoverFactory(
        'group-hover:scale-125',
        props.hover
    )} z-10 transform transition duration-500 ease-in-out`;

    const backgroundColorFactory = (color?: string): string => {
        switch (color) {
            case 'normal':
                return 'button0 button0--normal';
            case 'accent':
                return 'button0 button0--accent';
            case 'dark':
                return 'button0 button0--dark';
            default:
                return 'button0 button0--normal';
        }
    };

    const backgroundColor = `${backgroundColorFactory(
        props.bgColor
    )} inset-0 absolute animate-light-flicker ${hoverFactory(
        'group-hover:scale-y-250',
        props.hover
    )} transform transition duration-500 ease-in-out`;

    //"flex flex-row justify-center relative items-center m-4 w-10"

    return (
        <div
            className="group relative items-center h-12 m-4"
            onClick={props.onClick || void 0}
        >
            <div className={backgroundColor}></div>
            <div className={textColor}>
                <div className="flex flex-row justify-evenly items-center">
                    {props.icon ? <>{props.icon}&nbsp;</> : <></>}
                    {props.children}
                </div>
            </div>
        </div>
    );
}
