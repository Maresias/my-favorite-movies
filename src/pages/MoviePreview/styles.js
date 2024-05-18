import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;

    main{
        width: 100%;
        height: 100vh;
    }
`


export const Content = styled.div`
        width: 970px;
        max-height: 600px;
        margin: 3rem auto 0;
        overflow-y: scroll;
`