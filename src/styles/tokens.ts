import { DefaultTheme } from 'styled-components';
import { colors, radius, spacing } from './primatives';
import { text, fonts } from './text';

export const lightTheme: DefaultTheme = {
  radius,
  spacing,
  fonts,
  colors: {
    text: colors.grey800,
    background: colors.white,
    gradientDark: colors.grey100,
    gradientLight: colors.white,
    divider: colors.grey300,
    borderA: colors.grey300,
    backgroundA: colors.grey100,
    backgroundAHover: colors.grey200,
    label: colors.grey500,
    selected: colors.lime,
    error: colors.red,
  },
  typography: {
    button: text.regular(colors.grey700),
    header: text.boldHero(colors.grey700),
    base: text.regular(colors.grey500),
    label: text.regular(colors.grey500),
    input: text.regular(colors.grey700),
    quote: text.italicQuote(colors.grey500),
    error: text.miniItalic(colors.red),
  },
};

export const darkTheme: DefaultTheme = {
  radius,
  spacing,
  fonts,
  colors: {
    text: colors.white,
    background: colors.grey900,
    gradientDark: colors.grey800,
    gradientLight: colors.grey900,
    divider: colors.grey700,
    borderA: colors.grey700,
    backgroundAHover: colors.grey700,
    backgroundA: colors.grey800,
    label: colors.grey500,
    selected: colors.lime,
    error: colors.red,
  },
  typography: {
    button: text.regular(colors.grey500),
    header: text.boldHero(colors.grey700),
    base: text.regular(colors.grey200),
    label: text.regular(colors.grey500),
    input: text.regular(colors.white),
    quote: text.italicQuote(colors.grey500),
    error: text.miniItalic(colors.red),
  },
};
