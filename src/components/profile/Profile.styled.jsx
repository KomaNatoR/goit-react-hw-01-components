import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 250px;
    padding-top: ${props=>props.theme.spacing(2)};
    
    border: 0px solid transparent;
    border-radius: 5px;
    box-shadow: 2px 2px 8px #363636;
    overflow: hidden;
`;

export const UserDataCont = styled.div`
    text-align: center;
    color: gray;
   
    img {
        width: 200px;
    }
    
    p:first-of-type {
        font-size: 24px;
        font-weight: 700;
        color: #2e2e2e;        
    }
`;

export const OutlineDataList = styled.ul`
    list-style: none;
    display: flex;

    width: 250px;
    padding: 0;
    margin: 0;
    border-radius: 5px;

    li {
        width: calc(250px / 3);
        height: calc(250px / 3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-top:  1px solid gray;
        color: gray;
        background-color: lightgrey;

        span:last-of-type {
            margin-top: 5px;

            font-size: 18px;
            font-weight: 500;
            color: #2e2e2e;
        }
    }
    li:nth-of-type(2) {

        border: 1px solid gray;
        border-bottom: 0;
    }
`;
