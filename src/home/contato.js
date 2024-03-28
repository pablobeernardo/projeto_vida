import { Container, CardStyle, FooterStyle, TitleStyle } from "../style/style";
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Contato() {
    return (
        <Container>
            <TitleStyle>
                <h1>Contato</h1>
                <hr></hr>
            </TitleStyle>
            <FooterStyle>
                <div>
                    <TitleStyle>
                        <h2>Endereço</h2>
                        <hr></hr>
                    </TitleStyle>
                    <p>Rua Presidente Vargas, 269 - Centro - Três Rios - RJ</p>
                    <a
                        href="https://goo.gl/maps/NHAb6i5cTyYKZzMM6"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        Ver
                    </a>
                </div>
                <div>
                    <TitleStyle>
                        <h2>Telefone</h2>
                        <hr></hr>
                    </TitleStyle>
                    <p>(24) 2252-2252</p>
                </div>
                <div>
                    <TitleStyle>
                        <h2>Email</h2>
                        <hr></hr>
                    </TitleStyle>
                    <a>projetovida@gmail.com</a>
                </div>
                <div>
                    <TitleStyle>
                        <h2>Redes Sociais</h2>
                        <hr></hr>
                    </TitleStyle>
                    <a href="https://www.instagram.com/pvtr_oficial/" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/pvtr.oficial" target="_blank" rel="noreferrer">
                        <FaFacebook />
                    </a>
                </div>
            </FooterStyle>

        </Container>
    )
}