import React, { useState } from 'react';
import { Container, TitleStyle, RomperVideo, SectionText, Mural, CardMural, ModalContainer, ModalImage, ModalContent, CloseButton } from "../style/style";
import Navbar from "../home/components/navbar";
import teen1 from "../assets/teen1.jpg";
import teen2 from "../assets/jovem.jpg";
import teen3 from "../assets/teen3.jpg";
import teen4 from "../assets/teen4.jpg";
import teen5 from "../assets/teen5.jpg";

export default function ConexaoTeen() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: teen1, title: "Foto 1" },
        { src: teen2, title: "Foto 2" },
        { src: teen3, title: "Foto 3" },
        { src: teen4, title: "Foto 4" },
        { src: teen5, title: "Foto 5" }
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <Container>
            <Navbar />
            <TitleStyle>
                <h1>Conexão Teen - Uma Igreja de Adolescentes</h1>
                <hr />
            </TitleStyle>
            <RomperVideo>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/wuMlncf1tS8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </RomperVideo>
            <SectionText>
                <p>
                    O Conexão Teen é o ministério de adolescentes do Projeto Vida Três Rios, uma igreja evangélica que
                    nasceu em 2009 com a missão de transformar vidas através do amor de Deus.
                    Nosso objetivo é criar um ambiente acolhedor e dinâmico onde os adolescentes possam crescer na fé,
                    encontrar propósito e construir amizades verdadeiras.
                </p>
                <p>
                    Liderado por uma equipe dedicada e apaixonada pelo chamado de Deus, o Conexão Teen busca
                    impactar a vida dos jovens com os valores do evangelho. Acreditamos que a adoração,
                    a comunhão, o discipulado, o serviço e a missão são fundamentais para o crescimento
                    espiritual e pessoal dos nossos adolescentes.
                </p>
                <p>
                    Nosso lema é "Conectando Vidas, Transformando Gerações", e queremos que cada adolescente
                    saiba que tem um lugar especial aqui. Nossos encontros acontecem aos sábados às 18h, 
                    oferecendo momentos de louvor, ensinamentos relevantes e atividades que fortalecem os 
                    laços de amizade.
                </p>
                <p>
                    No Conexão Teen, acreditamos que cada jovem tem um potencial incrível para fazer a 
                    diferença no mundo. Nosso desejo é vê-los crescer firmes na fé, equipados para enfrentar
                    os desafios da vida e prontos para impactar a sociedade de maneira positiva.
                </p>
                <p>
                    Venha fazer parte dessa jornada incrível com a gente. Juntos, vamos viver grandes 
                    aventuras na presença de Deus e descobrir o propósito maravilhoso que Ele tem para 
                    cada um de nós!
                </p>
            </SectionText>
            <TitleStyle>
                <h1>Uma Igreja de Adolescentes</h1>
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
                        <ModalImage src={selectedImage} alt="Imagem ampliada" />
                    </ModalContent>
                </ModalContainer>
            )}
        </Container>
    );
}
