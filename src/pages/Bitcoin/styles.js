import styled from 'styled-components';

import background from '../../assets/image/bg.jpeg';
import sac from '../../assets/image/sac.png';

export const Container = styled.div`
    display: flex;
    width: 540px;
    padding: 0 0 20px;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    margin: 10px auto;
    border-radius: 4px;

    .background {
        margin: 0;
        width: 100%;
        padding: 20%;
        background: url('${background}') no-repeat center center;
        background-size: cover;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    span {
        text-align: left;
        padding: 20px;
        color: #667;
    }

    div {
        width: 70%;
        display: flex;
        justify-content: space-between;
        margin: 10px auto;
        flex-direction: column;
        color: #fff;
        background: #26ff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

        label {
            margin: 10px 0;
        }
    }
`;

export const Sac = styled.div`
    width: 80px;
    background: #FFF url('${sac}') no-repeat center center;
    background-size: cover;
    padding: 40px;
    float: right;
    box-shadow: 10px 0px rgba(0, 0, 0, 0.3);
    border-top-left-radius: 12px;
    border-bottom-left-radius: 4px;
    margin-top: 50vh;

    @media(max-width: 700px){
        display: none;
    }
`;
