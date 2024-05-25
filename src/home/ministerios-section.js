import { Container, TitleStyle, SectionStyle, CardStyle, CustomLink } from '../style/style';
import kids from "../assets/kids.jpg";
import jovem from "../assets/jovem.jpg";
import louvor from "../assets/louvor.jpg";
import rede100 from "../assets/rede100.jpg";

export default function MinisteriosSection() {
    return (
        <Container>
            <TitleStyle>
                <h1>Ministérios</h1>
                <hr></hr>
            </TitleStyle>
            <SectionStyle>
                <CardStyle>
                    <CustomLink to="/conexaoteen" aria-current="page">
                        <h2>Conexão Teen</h2>
                        <img src={jovem} alt="Conexão Teen" />
                        <p>Uma igreja de adolescentes</p>
                    </CustomLink>
                </CardStyle>
                <CardStyle>
                    <CustomLink to="/kids" aria-current="page">
                        <h2>Projeto Vida Kids</h2>
                        <img src={kids} alt="Projeto Kids" />
                        <p>Uma igreja das nossas crianças</p>
                    </CustomLink>
                </CardStyle>
                <CardStyle>
                    <CustomLink to="/louvor" aria-current="page">
                        <h2>Ministério de Louvor</h2>
                        <img src={louvor} alt="Projeto Kids" />
                        <p>Nossa Equipe de Adoração</p>
                    </CustomLink>
                </CardStyle>
                <CardStyle>
                    <CustomLink to="/rede" aria-current="page">
                        <h2>Rede por 100</h2>
                        <img src={rede100} alt="Projeto Kids" />
                        <p>Faça parte de uma célula</p>
                    </CustomLink>
                </CardStyle>
            </SectionStyle>
        </Container>
    )
};