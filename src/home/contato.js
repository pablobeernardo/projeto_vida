import { Container, CardStyle, FooterStyle, TitleStyle } from "../style/style";
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Contato() {
    return (
        <Container id="contato">
            <TitleStyle>
                <h1>Contato</h1>
                <hr></hr>
            </TitleStyle>
            <FooterStyle>
                <div>
                    <h3>Endereço</h3>
                    <a
                        href="https://goo.gl/maps/NHAb6i5cTyYKZzMM6"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                    >
                        Rua Presidente Vargas 269
                        <br></br>
                        Centro
                        <br></br>
                        Três Rios - RJ
                    </a>
                </div>
                <div>
                    <h3>Telefone</h3>
                    <a href="tel:+552432225566">24 3222-5566</a>
                </div>
                <div>
                    <h3>Email</h3>
                    <a href="mailto:projeto@gmail.com">projeto@gmail.com</a>
                </div>
                <div>
                    <h3>Redes Sociais</h3>
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