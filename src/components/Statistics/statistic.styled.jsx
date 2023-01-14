import styled from '@emotion/styled';

export const Section = styled.section`
    display: flex;
    flex-direction: column;

    width: 400px;
    height: 200px;
    margin:0 0 0 8px;

    text-align: center;

    border: 0px solid transparent;
    border-radius: 5px;
    box-shadow: 1px 1px 4px #363636;
    overflow: hidden;

    h2 {
        text-transform: uppercase;
    }
`;

export const List = styled.ul`
    list-style: none;
    display: flex;

    margin: auto 0 0 0;
    padding: 0;

    background-color: lightgray;

    li {
        width: calc(250px / 3);
        height: calc(250px / 3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-top: 1px solid gray;
        border-bottom:1px solid gray;

        &:first-of-type {
            border: 1px solid gray;
            border-left: none;
        }
        &:last-child {
            border: 1px solid gray;
            border-right: none;
        }
        
        span:first-of-type {
            font-size: 22px;
            font-weight: 500;
        }
        span:last-of-type {
            margin-top: 5px;
        }
    }
    li:nth-of-type(3) {
        border-left: 1px solid gray;
        border-right:1px solid gray;
    }
`;