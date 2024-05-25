import { Container, RomperVideo, SectionStyle, TitleStyle } from "../style/style";

export default function RomperSection() {
    return (
        <Container>
            <TitleStyle>
                <h1>Todo dia é dia de Romper</h1>
                <hr></hr>
            </TitleStyle>
            <SectionStyle>
                <RomperVideo>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EvJSiAfwpdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </RomperVideo>
            </SectionStyle>
        </Container>
    )
};