import { CSSProperties, DefaultTheme } from 'styled-components';

const colors = {
  // main colors
  black: '#000000',
  white: '#FFFFFF',
  primary: '#2196F3',
  error: '#ff0000',

  // grayscale
  gray100: '#f3f4f6',
  gray200: '#d6d6d6',
  gray300: '#b8b8b8',
  gray400: '#9a9a9a',
  gray500: '#7c7c7c',
  gray600: '#5d5d5d',
  gray700: '#3f3f3f',
  gray800: '#212121',

  // severity
  severity_critial: '#a10000',
  severity_error: '#e44500',
  severity_warning: '#ecd800',
  severity_info: '#00e39f',
};

interface Font {
  size: CSSProperties['fontSize'];
  weight: CSSProperties['fontWeight'];
  lineHeight: CSSProperties['lineHeight'];
}

const fonts: Record<string, Font> = {
  title1: {
    size: '3.2rem',
    weight: 700,
    lineHeight: '4rem',
  },
  title2: {
    size: '2.4rem',
    weight: 700,
    lineHeight: '3.2rem',
  },
  subtitle: {
    size: '2rem',
    weight: 600,
    lineHeight: '2.8rem',
  },
  mediumBody: {
    size: '1.6rem',
    weight: 500,
    lineHeight: '2rem',
  },
  regularBody: {
    size: '1.6rem',
    weight: 400,
    lineHeight: '2rem',
  },
  description: {
    size: '1.4rem',
    weight: 400,
    lineHeight: '1.6rem',
  },
};

export type ColorsType = typeof colors;
export type FontsType = typeof fonts;

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
