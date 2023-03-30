import React from "react"
import styled from "styled-components"

const MessagePg = () => {
return(
    <Section>
    <h3>This is Message page</h3>
    </Section>
)
}

export default MessagePg
const Section = styled.section `
margin-left: 18vw;
padding: 2rem;
height: 100%;
.grid{
    display: grid;
    grid-template-columns: 70% 28%;
    gap: 2rem;
    margin-top: 2rem;
    .grid_1 {
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .grid_2 {
        z-index: 2;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}

`;