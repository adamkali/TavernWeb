import React, { useState } from 'react';
import TavernColor from '../design/TavernColor';
import * as Colors from '../design/Colors';
import ColorNames from '../design/ColorNames';

function factory(colorScheme: string): TavernColor {
    return (
        ColorNames.find((color) => color.name === colorScheme)
            ?.scheme || new TavernColor(Colors.Dark)
    );
}

export function useTavernColor(): TavernColor {
    const [colorScheme, setColorScheme] = React.useState(
        factory('light') as TavernColor
    );

    return colorScheme;
}
