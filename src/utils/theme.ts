export const loadTheme = (theme: string) => {
  if (theme === 'dark') {
    import('../styles/tokens-dark.scss');
  } else {
    import('../styles/tokens-light.scss');
  }
};
