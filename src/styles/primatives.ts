export const tokens = {
  colors: {
    light: {
      primary: '#0070f3',
      primaryHover: '#005bb5',
      background: '#ffffff',
      text: '#000000',
      textSecondary: '#666666',
      backgroundInput: '#f5f5f5',
      error: '#ff0000',
      grey500: '#9fa8b6',
    },
    dark: {
      primary: '#79ffe1',
      primaryHover: '#4cbcb0',
      background: '#1e1e2d',
      text: '#ffffff',
      textSecondary: '#b0b0b0',
      backgroundInput: '#333345',
      error: '#ff6b6b',
      grey500: '#9fa8b6',
    },
  },
  fonts: {
    light: {
      large: '36px',
      medium: '24px',
      small: '18px',
    },
    dark: {
      large: '36px',
      medium: '24px',
      small: '18px',
    },
  },
};




// Utility function to access theme colors
export const getThemeColor = (theme: any, color: string) => theme.colors[color];



export const imageViewerStyles = {
  container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '411px',
      height: '866px',
      border: '2px solid #ccc', 
      borderRadius: '8px', 
      overflow: 'hidden',
  },
  image: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'cover', // Or 'contain' based on your requirement
  },
};


export const colors = {
  grey900: '#262a32',
  grey800: '#2e343d',
  grey700: '#373d48',
  grey500: '#9fa8b6',
  grey300: '#e3e5ea',
  grey200: '#eeeff2',
  grey100: '#f9fafb',
  white: '#ffffff',
  black: '#1e1e1e',
  blue: '#0087f5',
  red: '#c73232',
  lime: '#adde34',
  forest: '#275347',
};

export const radius = {
  standard: '0.25rem', // 4px
  large: '0.75rem', // 12px
  extreme: '1.5rem', // 24px
};

export const spacing = {
  tight: '0.25rem', // 4px
  regular: '0.75rem', // 12px
  double: '1.5rem', // 24px
  sixTimes: '4.5rem', // 72px
};
