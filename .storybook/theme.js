import { create } from '@storybook/theming';

// TODO: use tokens when set up
const colors = {
  white: '#ffffff',
  appBg: '#f5f5f5',
  appBorder: '#eaeaea',
  border: '#cccccc',
  text: '#333333',
  primary: '#C20000',
  secondary: '#C20000',
};

export default create({
  brandTitle: 'Project Name',
  brandUrl: 'https://github.com/project-name/project-name',

  // Core theme
  base: 'light',

  colorPrimary: colors.primary,
  colorSecondary: colors.secondary,

  // UI
  appBg: colors.appBg,
  appContentBg: colors.white,
  appBorderColor: colors.appBorder,
  appBorderRadius: 0,

  // Typography
  fontBase: 'sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: colors.text,
  textInverseColor: colors.white,

  // Toolbar default and active colors
  barTextColor: colors.text,
  barSelectedColor: colors.secondary,
  barBg: colors.white,

  // Form colors
  inputBg: colors.white,
  inputBorder: colors.border,
  inputTextColor: colors.text,
  inputBorderRadius: 4,
});
