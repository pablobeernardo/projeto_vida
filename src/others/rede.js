import React, { useState } from 'react';
import { Container, TitleStyle, RomperVideo, SectionText, Mural, CardMural, ModalContainer, ModalContent, ModalImage, CloseButton } from "../style/style";
import Navbar from "../home/components/navbar";
import celula1 from "../assets/celula1.jpg";
import celula2 from "../assets/celula2.jpg";
import celula3 from "../assets/celula3.jpg";
import celula4 from "../assets/celula4.jpg";
import celula5 from "../assets/celula5.jpg";

export default function RedePor100Ovelhas() {
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const images = [
        {
            src: celula1,
            title: "Foto 1"
        },
        {
            src: celula2,
            title: "Foto 2"
        },
        {
            src: celula3,
            title: "Foto 3"
        },
        {
            src: celula4,
            title: "Foto 4"
        },
        {
            src: celula5,
            title: "Foto 5"
        }
    ];

    const openModal = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedEvent(null);
        setShowModal(false);
    };

    return (
        <Container>
            <Navbar />
            <TitleStyle>
                <h1>Rede por 100 Ovelhas - Projeto de Células</h1>
                <hr />
            </TitleStyle>
            <RomperVideo>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/nfZaF1RahdE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </RomperVideo>
            <SectionText>
                <p>
                    A Rede por 100 Ovelhas é o projeto de células do Projeto Vida Três Rios, focado em criar pequenos grupos
                    de comunhão, discipulado e crescimento espiritual. Nossa missão é fortalecer a fé dos membros da igreja,
                    proporcionando um espaço onde possam compartilhar suas vidas, aprender juntos e servir uns aos outros.
                </p>
                <p>
                    Cada célula é uma pequena comunidade que se reúne semanalmente em diferentes lares ou locais, permitindo
                    um ambiente mais íntimo e acolhedor. É um lugar onde todos são bem-vindos, onde podem se sentir amados,
                    apoiados e encorajados a crescer na fé e no conhecimento de Jesus Cristo.
                </p>
                <p>
                    A liderança das células é composta por membros dedicados e treinados, comprometidos em guiar e nutrir
                    espiritualmente cada participante. Através de estudos bíblicos, momentos de oração e comunhão, buscamos
                    promover um crescimento integral que afeta todas as áreas da vida.
                </p>
                <p>
                    Se você está procurando um lugar para se conectar mais profundamente com Deus e com outras pessoas, convidamos
                    você a se juntar a uma de nossas células. Juntos, vamos viver a verdadeira essência da igreja, que é ser uma
                    família unida pelo amor de Cristo.
                </p>
            </SectionText>
            <TitleStyle>
                <h1>Momentos da Rede por 100 Ovelhas</h1>
                <hr />
            </TitleStyle>
            <Mural>
                {images.map((image, index) => (
                    <CardMural key={index} onClick={() => openModal(image.src)}>
                        <img src={image.src} alt={image.title} />
                    </CardMural>
                ))}
            </Mural>
            {showModal && (
                <ModalContainer show={showModal} onClick={closeModal}>
                    <ModalContent>
                        <CloseButton onClick={closeModal}>&times;</CloseButton>
                        <ModalImage src={selectedEvent} alt="Imagem ampliada" />
                    </ModalContent>
                </ModalContainer>
            )}
        </Container>
    );
}
