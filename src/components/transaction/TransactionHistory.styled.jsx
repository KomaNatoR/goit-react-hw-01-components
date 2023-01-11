import styled from '@emotion/styled';

export const Table = styled.table`
    min-width: 500px;
    margin-top: 10px;
    margin-left: 10px;
    border: 0px solid transparent;
    border-radius: 5px;
    box-shadow: 1px 1px 4px #363636;

    thead {
        height: 44px;
        background-color: lightgray;
    }
    td {
        text-align: center;
    }
    tr td:first-of-type {
        text-align: left;
        text-indent: 36%;
    }
`;