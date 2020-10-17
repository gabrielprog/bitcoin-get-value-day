import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        background: #121212;
    }
    #root {
        min-height: 100vh;
    }
`;

export default GlobalStyles;
