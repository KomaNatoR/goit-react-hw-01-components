import styled from '@emotion/styled';


export const Item = styled.li`
    display: flex;
    padding: 5px;
    min-width: 150px;

    border: 0px solid #000000;
    border-radius: 5px;
    box-shadow: 1px 1px 4px #363636;
    overflow: hidden;

    span {
        width:11px;
        height: 11px;
        border: 0px solid #000000;
        border-radius: 50%;
        background-color: ${props=>props.isOnline?"green":"red"};
    }
    img {
        margin-right: 10px;
    }
    p {
        font-size: 18px;
        font-weight: 500;
        color: #2e2e2e;
    }
`;
// console.log(<Item />);
// backgroun-color: ${}