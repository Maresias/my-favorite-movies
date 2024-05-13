import styled from "styled-components";

export const Container = styled.div`

`

export const Content = styled.div`
    display: grid;
    max-width: 1200px;
    height: 100vh;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
    "Brand Brand"
    ;
`
export const Brand = styled.div`
    grid-area: Brand;
    width: 100%;
`
export const InputArea  = styled.div`
`
export const Textarea  = styled.div`

`

export const Markers = styled.div`
`
export const ButtonArea = styled.div`
`