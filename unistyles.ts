import { StyleSheet } from 'react-native-unistyles';
import type { UnistylesConfig } from 'react-native-unistyles/lib/typescript/src/specs/StyleSheet';

const BASE_FONT_SIZE = 16;

type ColorKeys =
    | 'primary'
    | 'secondary'
    | 'background'
    | 'foreground'
    | 'button'
    | 'success'
    | 'warning'
    | 'error';

type ComponentThemeColors = {
    [key in ColorKeys]: string
};

type ThemeColors = ComponentThemeColors & {
    text: {
        [key in ColorKeys]: string;
    }
}

// Log some example font sizes
console.log('Font scale base', BASE_FONT_SIZE);

export const fontFamily = {
    BodyRegular: 'Nunito_400Regular',
    BodyBold: 'Nunito_700Bold',
    BodySemiBold: 'Nunito_600SemiBold',
    HeadingBold: 'Roboto_700Bold',
    HeadingBlack: 'Roboto_900Black',
};

const shared = {
    absoluteFill: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    fontFamily,
    borderRadius: (v: number) => v * 4,
    gap: (v: number) => v * 4,
    fontSize: (v: number) => BASE_FONT_SIZE * v,
};

const colors = {
    purple: {
        '50': '#f3f2ff',
        '100': '#e9e8ff',
        '200': '#d5d4ff',
        '300': '#b7b1ff',
        '400': '#9285ff',
        '500': '#8068ff',
        '600': '#5c30f7',
        '700': '#4e1ee3',
        '800': '#4118bf',
        '900': '#36169c',
        '950': '#1f0b6a',
    },
    green: {
        '50': '#e0ffeb',
        '100': '#c7ffdf',
        '200': '#a3ffc9',
        '300': '#6bffab',
        '400': '#15f476',
        '500': '#08bf57',
        '600': '#019842',
        '700': '#047135',
        '800': '#07542a',
        '900': '#074122',
        '950': '#00140a',
    },
    red: {
        '50': '#fff0f0',
        '100': '#ffe0e0',
        '200': '#ffc8c7',
        '300': '#ffa09e',
        '400': '#ff6e6b',
        '500': '#f84c49',
        '600': '#e6302d',
        '700': '#d01916',
        '800': '#ac1815',
        '900': '#931d1b',
        '950': '#540a08',
    },
    blue: {
        '50': '#edf8ff',
        '100': '#d7eeff',
        '200': '#b9e2ff',
        '300': '#88d2ff',
        '400': '#50b8ff',
        '500': '#2896ff',
        '600': '#0e76ff',
        '700': '#0a60eb',
        '800': '#0f4dbe',
        '900': '#134495',
        '950': '#112b5a',
    },
    orange: {
        '50': '#fff7eb',
        '100': '#ffe7c6',
        '200': '#ffcd88',
        '300': '#ffac49',
        '400': '#ff9020',
        '500': '#f96907',
        '600': '#dd4602',
        '700': '#b72c06',
        '800': '#94210c',
        '900': '#7a1d0d',
        '950': '#460b02',
    },
    yellow: {
        '50': '#fff8eb',
        '100': '#ffecc7',
        '200': '#ffd06b',
        '300': '#ffc247',
        '400': '#ffab1a',
        '500': '#f48d06',
        '600': '#d96a02',
        '700': '#b24b06',
        '800': '#8e390b',
        '900': '#73300c',
        '950': '#401902',
    },
    gray: {
        50: '#F7FAFC',
        100: '#EDF2F7',
        200: '#E2E8F0',
        300: '#CBD5E0',
        400: '#A0AEC0',
        500: '#718096',
        600: '#4A5568',
        700: '#2D3748',
        800: '#1A202C',
        900: '#171923',
    },
    neutral: {
        '50': '#ffffff',
        '100': '#f6f7f9',
        '200': '#dfe1e7',
        '300': '#bbc1ce',
        '400': '#929cb0',
        '500': '#68758d',
        '600': '#545e73',
        '700': '#454c5f',
        '800': '#3a4150',
        '900': '#353a45',
        '950': '#23262f',
    },
} as const;

const lightTheme = {
    colors: {
        background: colors.neutral['100'],
        button: colors.neutral['600'],
        foreground: colors.neutral['500'],
        primary: colors.blue['400'],
        secondary: colors.gray['400'],
        success: colors.green['400'],
        warning: colors.yellow['400'],
        error: colors.red['400'],
        text: {
            background: colors.neutral['900'],
            button: colors.neutral['50'],
            foreground: colors.neutral['50'],
            primary: colors.neutral['50'],
            secondary: colors.neutral['50'],
            success: colors.neutral['50'],
            warning: colors.neutral['50'],
            error: colors.neutral['50']
        }
    } satisfies ThemeColors,
    ...shared,
};

const darkTheme = {
    colors: {
        background: colors.neutral['900'],
        button: colors.neutral['500'],
        foreground: colors.neutral['600'],
        primary: colors.blue['500'],
        secondary: colors.gray['500'],
        success: colors.green['500'],
        warning: colors.yellow['500'],
        error: colors.red['500'],
        text: {
            background: colors.neutral['50'],
            button: colors.neutral['900'],
            foreground: colors.neutral['900'],
            primary: colors.neutral['900'],
            secondary: colors.neutral['900'],
            success: colors.neutral['900'],
            warning: colors.neutral['900'],
            error: colors.neutral['900']
        }

    } satisfies ThemeColors,
    ...shared,
};


const appThemes = {
    light: lightTheme,
    dark: darkTheme
};

const breakpoints = {
    xs: 0,
    sm: 300,
    md: 500,
    lg: 800,
    xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
    export interface UnistylesThemes extends AppThemes { }
    export interface UnistylesBreakpoints extends AppBreakpoints { }
}

const config: UnistylesConfig = {
    themes: appThemes,
    settings: {
        adaptiveThemes: true,
    },
    breakpoints,
};

StyleSheet.configure(config);