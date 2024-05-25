import React from 'react';
import { Container, TitleStyle, RomperVideo, SectionText, Mural, CardMural, ModalContainer, ModalContent, ModalImage, CloseButton } from "../style/style";
import Navbar from "../home/components/navbar";
import { useState } from 'react';
import kids1 from "../assets/kids1.jpg";
import kids2 from "../assets/kids2.jpg";
import kids3 from "../assets/kids3.jpg";
import kids4 from "../assets/kids4.jpg";
import kids5 from "../assets/kids5.jpg";

export default function ConexaoTeen() {
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const images = [
        {
            src: kids1,
            title: "Foto 1"
        },
        {
            src: kids2,
            title: "Foto 2"
        },
        {
            src: kids3,
            title: "Foto 3"
        },
        {
            src: kids4,
            title: "Foto 4"
        },
        {
            src: kids5,
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
                <h1>Projeto Vida Kids - Uma Igreja para Crianças</h1>
                <hr />
            </TitleStyle>
            <RomperVideo>
                <iframe
                    width="560"
                    height="315"
                    src='https://www.youtube.com/embed/mH4LeV1x_oA'
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </RomperVideo>
            <SectionText>
                <p>
                    A Igreja Kids é o ministério infantil do Projeto Vida Três Rios, criado especialmente
                    para proporcionar às crianças um ambiente acolhedor, divertido e educativo onde possam
                    aprender sobre o amor de Deus. Nosso objetivo é ajudar as crianças a crescerem na fé,
                    compreenderem os princípios do evangelho e desenvolverem um relacionamento pessoal com Jesus.
                </p>
                <p>
                    A missão da Igreja Kids é plantar a semente do evangelho no coração das crianças, guiando-as no
                    caminho do amor, da fé e do serviço a Deus e ao próximo. Acreditamos que cada criança é um presente
                    precioso e nosso desejo é vê-las crescer em um ambiente seguro e amoroso, onde possam descobrir o
                    propósito de Deus para suas vidas.
                </p>
                <p>
                    A Igreja Kids é liderada por uma equipe dedicada e amorosa, comprometida em proporcionar a melhor
                    experiência para as crianças. Todos os nossos voluntários são treinados e preparados para cuidar e
                    ensinar as crianças com carinho e dedicação
                </p>
                <p>
                    Se você tem filhos, traga-os para fazer parte da Igreja Kids. Aqui, eles encontrarão um lugar
                    seguro e alegre para aprender sobre Deus, fazer novos amigos e crescer na fé. Juntos, vamos construir
                    uma base sólida de valores cristãos que irão guiar suas vidas.
                </p>
            </SectionText>
            <TitleStyle>
                <h1>Um culto para nossas crianças</h1>
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
