import {
    create
} from '@storybook/theming/create';

export default create({
    base: 'light',

    colorPrimary: '#4C5B73',
    colorSecondary: '#D26436',

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: '#bebebe',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#4d4d4d',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: '#D26436',
    barBg: '#4C5B73',

    // Form colors
    inputBg: '#eee',
    inputBorder: '#bebebe',
    inputTextColor: '#',
    inputBorderRadius: 4,

    brandTitle: 'My custom storybook',
    brandUrl: 'https://stayjanda.com/',
    brandImage: 'https://front-ui-doc.s3.ap-northeast-2.amazonaws.com/logo.png',
});