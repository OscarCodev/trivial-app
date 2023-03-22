import styled from 'styled-components';

export const Row = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 900px;
    margin: auto;
    align-items: center;
`

export const QuestionTxt = styled.p`
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 2px gray;
    text-align: center;
`

export const Box = styled.div`
    font-size: 3rem;
    padding-left: 30px;

    p{
        display: flex;
        align-items: center;
        button{
            margin-right: 14px;
            font-weight: bold;
            font-size: 2rem;
        }
    }
`

export const Popup = styled.div`
    height: 100vh; width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    position:fixed;
    display: ${({visible}) => visible ? 'flex': 'none'};
    align-items: center;
    justify-content: center;
    top: 0; left: 0;
    div{
        max-width: 600px;
        padding: 30px;
        background-color: white;
        display: flex;
        flex-direction: column;
        button{
            padding: 20px;
            color: white;
            background-color: lightgreen;
            border: none;
            border-radius: 50px;
        }
    }
`