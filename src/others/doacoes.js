// fazer uma pagina para doações na igreja baseada no modelo de outras paginas porém com um formulario de doação e intuitiva para o usuario

import React from 'react';
import { Container, TitleStyle, RomperVideo, SectionText, Mural, CardMural } from '../style/style';
import Navbar from '../home/components/navbar';

export default function Doacoes() {
    return (
        <Container>
            <Navbar />
            <TitleStyle>
                <h1>Doações</h1>
                <hr></hr>
            </TitleStyle>
            <SectionText>
                <h2>Como doar</h2>
                <p>
                    Sua generosidade faz uma diferença real. Sua doação ajuda a apoiar nosso ministério e missão.
                </p>
                <p>
                    Para fazer uma doação, você pode usar uma das seguintes opções:
                </p>
                <ul>
                    <li>Doação Online: Clique no botão abaixo para fazer uma doação online segura.</li>
                    <li>Doação Presencial: Você pode fazer uma doação durante nossos cultos ou eventos presenciais.</li>
                    <li>Doação por Transferência Bancária: Entre em contato conosco para obter informações sobre como fazer uma doação por transferência bancária.</li>
                </ul>
                <div>
                    <h3>Doação Online</h3>
                    <p>
                        Faça uma doação online segura usando o botão abaixo.
                    </p>
                    <button type="button" class="btn btn-warning">Doar Agora</button>
                </div>
                <div>
                    <h3>Doação Presencial</h3>
                    <p>
                        Você pode fazer uma doação durante nossos cultos ou eventos presenciais.
                    </p>
                </div>
                <div>
                    <h3>Doação por Transferência Bancária</h3>
                    <p>
                        Entre em contato conosco para obter informações sobre como fazer uma doação por transferência bancária.
                    </p>
                </div>
            </SectionText>
        </Container>
    );
}
