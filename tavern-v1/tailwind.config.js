/** @type {import('tailwindcss').Config} */

import * as Colors from './helpers/design/Colors';

module.exports = {
  content: [
    "./app/**/*/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-primary": Colors.Light.foreground.primary,
        "light-secondary": Colors.Light.foreground.secondary,
        "light-tertiary": Colors.Light.foreground.tertiary,
        "light-normal": Colors.Light.background.normal,
        "light-dark": Colors.Light.background.dark,
        "light-accent": Colors.Light.background.accent,
        "dark-primary": Colors.Dark.foreground.primary,
        "dark-secondary": Colors.Dark.foreground.secondary,
        "dark-tertiary": Colors.Dark.foreground.tertiary,
        "dark-normal": Colors.Dark.background.normal,
        "dark-dark": Colors.Dark.background.dark,
        "dark-accent": Colors.Dark.background.accent,
        "vaporwave-primary": Colors.Vaporwave.foreground.primary,
        "vaporwave-secondary": Colors.Vaporwave.foreground.secondary,
        "vaporwave-tertiary": Colors.Vaporwave.foreground.tertiary,
        "vaporwave-normal": Colors.Vaporwave.background.normal,
        "vaporwave-dark": Colors.Vaporwave.background.dark,
        "vaporwave-accent": Colors.Vaporwave.background.accent,
        "royal-primary": Colors.Royal.foreground.primary,
        "royal-secondary": Colors.Royal.foreground.secondary,
        "royal-tertiary": Colors.Royal.foreground.tertiary,
        "royal-normal": Colors.Royal.background.normal,
        "royal-dark": Colors.Royal.background.dark,
        "royal-accent": Colors.Royal.background.accent,
        "fruit-primary": Colors.Fruit.foreground.primary,
        "fruit-secondary": Colors.Fruit.foreground.secondary,
        "fruit-tertiary": Colors.Fruit.foreground.tertiary,
        "fruit-normal": Colors.Fruit.background.normal,
        "fruit-dark": Colors.Fruit.background.dark,
        "fruit-accent": Colors.Fruit.background.accent,
      },
    },
  },
  plugins: [],
}