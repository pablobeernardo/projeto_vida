import { Container , Section} from "../style/style";
import Carrousel from "./components/carrousel";
import SectionAbout from "./components/section-about";


export default function IgrejaHeader() {
    return(
        <Container>
            <Section class="container">
                    <Carrousel />
                    <SectionAbout/>
            </Section>
        </Container>
    )
}