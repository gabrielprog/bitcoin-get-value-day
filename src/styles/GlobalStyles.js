import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
    body {
        background: #121212;
        font-family: 'Roboto', sans-serif;
    }
    #root {
        min-height: 100vh;
    }

    button {
        cursor: pointer;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
`;

export default GlobalStyles;
