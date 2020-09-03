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
    brandImage: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fae938c15-a8c4-4e33-aee2-1f6bfc5fbca4%2FArtboard_1_copy.png?table=block&id=d8aeed20-eb5e-45f8-999d-844331a60a84&width=3410&userId=64d49a84-fa5e-447a-801f-46d4ad19df4f&cache=v2',
});