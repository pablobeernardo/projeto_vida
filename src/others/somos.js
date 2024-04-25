import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../home/components/navbar";
import Contato from "../home/contato";
import { Container, RomperVideo, SectionText, TitleStyle , Mural, CardMural, ModalContainer, ModalImage, ModalContent, CloseButton } from "../style/style";


export default function Somos() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2",
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2",
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2",
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2",
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2",
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2",
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2",
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
                <h1>Quem Somos</h1>
                <hr />
            </TitleStyle>
            <RomperVideo>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0M6f5J4H2Zc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </RomperVideo>
            <SectionText>
                <p>
                    O Projeto Vida Três Rios é uma igreja evangélica que nasceu em 2009,
                    fruto de um chamado de Deus para a cidade de Três Rios. A igreja tem
                    como missão transformar vidas através do amor de Deus, e para isso,
                    busca cumprir o Ide de Jesus, levando o evangelho a toda criatura.
                </p>
                <p>
                    A igreja é liderada pelo Pr. Silas Velasco e sua esposa, a Pra. Lívia
                    Velasco. A igreja tem como visão ser uma igreja relevante, que
                    impacta a sociedade e que transforma vidas.
                </p>
                <p>
                    A igreja tem como valores a adoração, a comunhão, o discipulado, o
                    serviço e a missão.
                </p>
                <p>
                    A igreja tem como lema "Nossa paixão é por vidas", e tem como
                    objetivo alcançar vidas para Jesus.
                </p>
                <p>A igreja se reúne aos domingos às 19h e às quartas-feiras às 20h.</p>
            </SectionText>
            <div>
                <TitleStyle>
                    <h1>Nossa História</h1>
                    <hr />
                </TitleStyle>
                <Mural>
                    {images.map((image, index) => (
                        <CardMural key={index} onClick={() => openModal(image)}>
                            <img src={image} alt={`Imagem ${index}`} />
                        </CardMural>
                    ))}
                </Mural>
            </div>
            <ModalContainer show={showModal} onClick={closeModal}>
                <ModalContent>
                    <CloseButton onClick={closeModal}>&times;</CloseButton>
                    <ModalImage src={selectedImage} />
                </ModalContent>
            </ModalContainer>
        </Container>
    );
}
