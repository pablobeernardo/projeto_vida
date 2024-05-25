import React from 'react';
import { Container, TitleStyle, SectionText, CustomLink, LogoBanco, QRCode } from '../style/style';
import Navbar from '../home/components/navbar';
import logo from '../assets/logo-banco.png';
import qrcode from '../assets/qrcode.png';

export default function Doacoes() {
    return (
        <Container>
            <Navbar />
            <TitleStyle>
                <h1 style={{ marginBottom: '20px' }}>Doações</h1>
                <hr style={{ borderColor: '#ff9100' }} />
            </TitleStyle>
            <SectionText>
                <h2 style={{ marginBottom: '15px' }}>Como doar</h2>
                <p>
                    Sua generosidade faz uma diferença real. Sua doação ajuda a apoiar nosso ministério e missão.
                </p>
                <p>
                    Para fazer uma doação, você pode usar uma das seguintes opções:
                </p>
                <div style={{ marginBottom: '20px' }}>
                    <span style={{ color: '#ff9100', fontWeight: 'bold' }}>Doação Online:</span> Faça sua transferência, ou use a chave PIX ou o QR code abaixo para fazer uma doação.
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <span style={{ color: '#ff9100', fontWeight: 'bold' }}>Doação Presencial:</span> Você pode fazer uma doação durante nossos cultos ou eventos presenciais.
                </div>
                <div>
                    <h3 style={{ marginBottom: '10px', color: '#ff9100' }}>Doação por Transferência Bancária</h3>
                    <p>
                        Você pode fazer uma transferência para a seguinte conta:
                        <br />
                        Banco: Banco Fictício
                        <br />
                        Agência: 1234
                        <br />
                        Conta Corrente: 5678-9
                        <br />
                        CNPJ: 00.000.000/0001-00
                        <br />
                        <LogoBanco src={logo} alt="Logo do Banco" style={{ width: '100px', marginTop: '10px' }} />
                    </p>
                </div>
                <div>
                    <h3 style={{ marginBottom: '10px', color: '#ff9100' }}>Doação por Pix</h3>
                    <p>Faça uma doação online usando a chave PIX ou o QR code abaixo:</p>
                    <p><strong>Chave PIX:</strong> 123.456.789-00</p>
                    <QRCode src={qrcode} alt="QR Code para doação via PIX" />
                </div>
                <div>
                    <h3 style={{ marginBottom: '10px', color: '#ff9100' }}>Doação Presencial</h3>
                    <p>Você pode fazer uma doação durante nossos cultos ou eventos presenciais.</p>
                </div>
            </SectionText>
        </Container>
    );
}
