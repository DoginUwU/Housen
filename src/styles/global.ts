import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Gordita Regular', sans-serif;
        background: linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%);
        backdrop-filter: blur(24px);
        width: 100%;
        min-height: 100vh;
    }

    #root {
        min-height: 100vh;
        position: relative;
        padding-bottom: 5rem;
    }

    @media (max-width: 1000px) {
        html {
            font-size: 93.75%;
        }
    }
    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    @font-face {
    font-family: 'Gordita Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Gordita Regular'), url('fonts/Gordita Regular.woff') format('woff');
    } 

    @font-face {
    font-family: 'Gordita Thin';
    font-style: normal;
    font-weight: normal;
    src: local('Gordita Thin'), url('fonts/Gordita Thin.woff') format('woff');
    }
    
    @font-face {
    font-family: 'Gordita Light';
    font-style: normal;
    font-weight: normal;
    src: local('Gordita Light'), url('fonts/Gordita Light.woff') format('woff');
    }

    @font-face {
    font-family: 'Gordita Medium';
    font-style: normal;
    font-weight: normal;
    src: local('Gordita Medium'), url('fonts/Gordita Medium.woff') format('woff');
    }

    @font-face {
    font-family: 'Gordita Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Gordita Bold'), url('fonts/Gordita Bold.woff') format('woff');
    }

    @font-face {
    font-family: 'Gordita Black';
    font-style: normal;
    font-weight: normal;
    src: local('Gordita Black'), url('fonts/Gordita Black.woff') format('woff');
    }
`;

export { GlobalStyle };
