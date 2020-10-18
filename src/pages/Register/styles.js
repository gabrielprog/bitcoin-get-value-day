import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 440px;
    padding: 20px;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    margin: 10px auto;
    border-radius: 4px;

    h2 {
        color: #26ffdb;
        font-size: 20px;
    }

    span {
        text-align: left;
        margin: 5px 0;
        color: #667;
    }
`;

export const Form = styled.div`
    margin: 15px 0;
    flex-direction: column;

    span::after {
        content: ' *';
        color: #26ff;
    }

    input {
        display: flex;
        height: 45px;
        width: 100%;
        flex: 1;
        border: 1px solid #667;
        border-radius: 4px;
        padding: 0 10px;
        font-size: 100%;
        margin: 10px 0;
    }
    
`;

export const Button = styled.button`
    width: 100%;
    color: #fff;
    background-color: #26ffdb;
    border: none;
    height: 45px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 18px;

    &:hover {
        background-color: #26ff;
    }
`;
