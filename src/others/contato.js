import React from 'react';
import { Container, FooterStyle, TitleStyle, FormContato } from '../style/style';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Navbar from '../home/components/navbar';


export default function Contato() {
    return (
        <Container>
            <Navbar />
            <TitleStyle>
                <h1>Contato</h1>
                <hr></hr>
            </TitleStyle>
            <FooterStyle>
                <div>
                    <FormContato>
                        <h3>Deixe sua mensagem</h3>
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="Email" />
                        <input type='tel' placeholder='Telefone' pattern='[0-9]{2} [0-9]{5}-[0-9]{4}' title='Digite o telefone no formato 00 00000-0000' required></input>
                        <textarea rows="4" placeholder="Mensagem"></textarea>
                        <button type="submit">Enviar</button>
                    </FormContato>
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