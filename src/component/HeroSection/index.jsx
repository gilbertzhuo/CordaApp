import React from 'react';
import { Container, ContainerInfo} from "./heroElements"
import data from "./data.json"
import TypeAnimation from 'react-type-animation';


function HeroSection() {
    return (
        <Container>
            <ContainerInfo>
                <TypeAnimation
                cursor={true}
                sequence={
                    [data.Section.title, 10000]}
                wrapper="h1"
                repeat={Infinity}
                />
                <p>{data.Section.description}</p>
            </ContainerInfo>
        
        </Container>
    )
}

export default HeroSection;