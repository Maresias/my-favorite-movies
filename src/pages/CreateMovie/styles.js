import styled from "styled-components";

export const Container = styled.div`

`

export const Content = styled.div`
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
`