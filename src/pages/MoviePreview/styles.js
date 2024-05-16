import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;

    main{
        border: 1px solid red;
        width: 100%;
        height: 100vh;
    }
`




export const Content = styled.div`
        border: 1px solid rebeccapurple;
        width: 400px;
        max-height: 400px;
        margin: 0 auto;
        overflow-y: scroll;

`