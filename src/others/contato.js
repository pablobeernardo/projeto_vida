import React from 'react';
import { Container, FooterStyle, SocialMedia, TitleStyle } from '../style/style';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../home/components/navbar';

export default function Contato() {
    return (
        <Container>
            <Navbar />
            <TitleStyle>
                <h1>Contato</h1>
                <hr />
            </TitleStyle>
            <FooterStyle>
                <div>
                    <h3><FaMapMarkerAlt style={{ color: '#FF5733' }} /> Endereço</h3>
                    <p>Rua Presidente Vargas 269</p>
                    <p>Centro</p>
                    <p>Três Rios - RJ</p>
                    <iframe
                        title="Localização"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.6175085888926!2d-43.207300884975104!3d-22.11678268543754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdf5ee0f54c513%3A0x201b25668cb03e69!2sRua%20Pres.%20Vargas%2C%20269%20-%20Centro%2C%20Tr%C3%AAs%20Rios%20-%20RJ%2C%2025720-000!5e0!3m2!1sen!2sbr!4v1620307927584!5m2!1sen!2sbr"
                        width="300"
                        height="200"
                        style={{ border: 0, marginTop: '10px' }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div>
                    <h3><FaPhone style={{ color: '#FFC300' }} /> Telefone</h3>
                    <a href="tel:+552432225566" style={{ textDecoration: 'none' }}>24 3222-5566</a>
                </div>
                <div>
                    <h3><FaEnvelope style={{ color: '#C70039' }} /> Email</h3>
                    <a href="mailto:projeto@gmail.com" style={{ textDecoration: 'none' }}>projeto@gmail.com</a>
                </div>
                <div>
                    <h3><FaWhatsapp style={{ color: '#25D366' }} /> WhatsApp</h3>
                    <a href="https://api.whatsapp.com/send?phone=5521999999999" target="_blank" rel="noreferrer">Iniciar uma conversa</a>
                </div>
                <h3>Redes Sociais</h3>
                <SocialMedia>
                    <a href="https://www.instagram.com/projetovidatresrios/" target="_blank" rel="noreferrer"><FaInstagram style={{ color: '#E1306C' }} /> </a>
                    <br />
                    <a href="https://www.facebook.com/projetovidatresrios" target="_blank" rel="noreferrer"><FaFacebook style={{ color: '#3B5998' }} /> </a>
                </SocialMedia>
            </FooterStyle>
        </Container>
    );
}
