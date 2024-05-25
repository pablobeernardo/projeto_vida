import React, { useState } from "react";
import { CardStyle, Container, SectionStyle, TitleStyle, SectionText } from "../style/style";
import Navbar from "../home/components/navbar";
import CustomModal from "../home/components/modal";
import serie from "../assets/serie.jpg";
import encontro from "../assets/encontro.jpg";
import batismo from "../assets/batismo.jpg";
import atividade1 from "../assets/atividade1.jpg";
import celula from "../assets/celula.jpg";


export default function Atividades() {
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        {
            title: "Culto de Celebração",
            image: atividade1,
            description: "Domingo as 09h e 19h",
            date: "20/05/2024",
        },
        {
            title: "Série de Palavras",
            image: serie,
            description: "Quarta as 20h",
            date: "22/05/2024",
        },
        {
            title: "Células",
            image: celula,
            description: "Rede por 100 ovelhas",
            date: "24/05/2024",
        },
        {
            title: "O Encontro",
            image: encontro,
            description: "Todo último sábado do mês",
            date: "26/05/2024",
        },
        {
            title: "Batismo",
            image: batismo,
            description: "02/06/2024",
            date: "02/06/2024",
        },
    ];

    const openModal = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <Navbar />
            <div>
                <TitleStyle>
                    <h1>Nossas Atividades</h1>
                    <hr />
                </TitleStyle>
                <SectionText>
                    <p>
                        Explore as diversas atividades que oferecemos para fortalecer a sua jornada espiritual
                        e construir laços com a comunidade. Na Projeto Vida Três Rios, estamos comprometidos em
                        fornecer oportunidades significativas para crescimento pessoal e conexão espiritual.
                        Descubra como você pode se envolver e participar das atividades emocionantes que
                        preparamos para você e sua família:
                    </p>
                </SectionText>
                <SectionStyle>
                    {events.map((event, index) => (
                        <CardStyle key={index} onClick={() => openModal(event)}>
                            <h2>{event.title}</h2>
                            <img src={event.image} alt={event.title} />
                            <p>{event.description}</p>
                            <p>Data: {event.date}</p>
                        </CardStyle>
                    ))}
                </SectionStyle>
            </div>
            <CustomModal show={showModal} onHide={closeModal} event={selectedEvent} />
        </Container>
    );
}
