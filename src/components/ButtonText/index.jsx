import { Container } from "./styles";

export function ButtonText({isDark, title, ...rest}){
    return (
        <Container 
        type="button" 
        $isDark={isDark}
        {...rest}
        >
            {title}
        </Container>
    )
}