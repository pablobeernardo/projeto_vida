import React, { useState } from 'react';
import { Container, TitleStyle, RomperVideo, SectionText, Mural, CardMural, ModalContainer, ModalContent, ModalImage, CloseButton } from "../style/style";
import Navbar from "../home/components/navbar";
import worship1 from "../assets/worship1.jpg";
import worship2 from "../assets/worship2.jpg";
import worship3 from "../assets/worship3.jpg";
import worship4 from "../assets/worship4.jpg";
import worship5 from "../assets/worship5.jpg";

export default function MinisterioLouvor() {
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const images = [
        {
            src: worship1,
            title: "Foto 1"
        },
        {
            src: worship2,
            title: "Foto 2"
        },
        {
            src: worship3,
            title: "Foto 3"
        },
        {
            src: worship4,
            title: "Foto 4"
        },
        {
            src: worship5,
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
                <h1>Ministério de Louvor - Adorando a Deus com Excelência</h1>
                <hr />
            </TitleStyle>
            <RomperVideo>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6OLoXb6fozE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </RomperVideo>
            <SectionText>
                <p>
                    O Ministério de Louvor do Projeto Vida Três Rios é dedicado a conduzir a congregação em momentos de
                    adoração profunda e genuína. Nossa missão é criar um ambiente onde cada pessoa possa experimentar a
                    presença de Deus através da música e da adoração.
                </p>
                <p>
                    Nossa equipe é composta por músicos e cantores talentosos, comprometidos em oferecer o seu melhor
                    para Deus. Acreditamos que a adoração vai além da música; é uma expressão de amor e devoção a Deus.
                    Por isso, buscamos excelência em tudo o que fazemos, desde a escolha das canções até a performance
                    ao vivo.
                </p>
                <p>
                    No Ministério de Louvor, valorizamos a comunhão, o serviço e o crescimento espiritual. Estamos
                    sempre buscando novas maneiras de melhorar e expandir nosso ministério, com ensaios regulares,
                    treinamentos e workshops para nossos membros.
                </p>
                <p>
                    Se você tem o dom da música e deseja servir a Deus através do louvor, convidamos você a se juntar a
                    nós. Juntos, vamos elevar o nome de Jesus e criar momentos inesquecíveis de adoração.
                </p>
            </SectionText>
            <TitleStyle>
                <h1>Nosso Ministério de Louvor em Ação</h1>
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
