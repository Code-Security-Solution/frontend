import { DefaultTheme, RuleSet, css } from 'styled-components';

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

type FontType = 'title1' | 'title2' | 'subtitle' | 'mediumBody' | 'regularBody' | 'description';

const fonts: Record<FontType, RuleSet> = {
  title1: css`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4rem;
  `,
  title2: css`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.2rem;
  `,
  subtitle: css`
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.8rem;
  `,
  mediumBody: css`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2rem;
  `,
  regularBody: css`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2rem;
  `,
  description: css`
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.6rem;
  `,
};

export type ColorsType = typeof colors;
export type FontsType = typeof fonts;

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
