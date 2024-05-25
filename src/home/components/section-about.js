import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { AboutStyle, Container } from '../../style/style';
import photo1 from '../../assets/vidas.jpg';

export default function SectionAbout() {
    return (
        <Container>
            <AboutStyle>
                <div className="text-about">
                    <h1 className="title">Projeto Vida Três Rios</h1>
                    <h1>"Nossa paixão é por vidas"</h1>
                    <p>Quarta as 20h
                        <br />
                        Domingo as 09 e 19h
                    </p>
                    <p className="span-color">Pr Silas Velasco</p>
                    <a href="https://www.instagram.com/projetovidatresrios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/projetovidatresrios" target="_blank" rel="noreferrer">
                        <FaFacebook />
                    </a>
                </div>
                <div>
                    <img src={photo1} alt="Igreja" />
                </div>
            </AboutStyle>
        </Container>

    )
}