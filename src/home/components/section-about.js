import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { AboutStyle, Container } from '../../style/style';

export default function SectionAbout() {
    return (
        <Container>
            <AboutStyle>
                <div className="text-about">
                    <h1 className="title">Projeto Vida Três Rios</h1>
                    <h1>"Nossa paixão é por vidas"</h1>
                    <p>Quarta as 20h
                        <br />
                        Domingo as 19h
                    </p>
                    <p className="span-color">Pr Silas Velasco</p>
                    <a href="https://www.instagram.com/pvtr_oficial/" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/pvtr.oficial" target="_blank" rel="noreferrer">
                        <FaFacebook />
                    </a>
                </div>
                <div>
                    <img src="https://scontent-gig4-2.xx.fbcdn.net/v/t39.30808-6/430063241_18247802698217076_1250558795858395167_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1sGi13QGR7IAX8ynvCA&_nc_ht=scontent-gig4-2.xx&oh=00_AfDFO4l5iiJ4chqmr2H6aYp_W4W9eQ9bJSfcLlPEZTlhnQ&oe=6608D0D0" alt="Igreja" />
                </div>
            </AboutStyle>
        </Container>

    )
}