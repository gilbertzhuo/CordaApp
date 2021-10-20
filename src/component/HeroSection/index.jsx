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
                <div style={{position: "absolute", bottom: "0px", height:"10vh", left :"5vh"}}>
                    <TypeAnimation
                    cursor={true}
                    sequence={
                        [
                        'CREATED BY Gilbert Zhuo, Raymond Limin, Deepak Vishwakarma', 10000]}
                    wrapper="p"
                    repeat={Infinity}
                    />
                </div>
            </ContainerInfo>
        
        </Container>
    )
}

export default HeroSection;