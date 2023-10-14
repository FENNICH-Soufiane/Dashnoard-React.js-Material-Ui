// eslint-disable-next-line no-unused-vars
export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            
          }
        : {
            // palette values for dark mode
            
          }),
    },
  });
  