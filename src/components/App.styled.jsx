import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: ${props=>props.theme.spacing(2)};
`;

// color: ${props=>`${props.theme.colors.black}`};
// ${props=>`${props.theme.spacing(2)}`}px