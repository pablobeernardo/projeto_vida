import React from 'react';
import { Container, TitleStyle, AtividadeStyle, BlockStyle, CardColumn, Mural, CardMural } from "../style/style";
import Navbar from "../home/components/navbar";
import { useState } from 'react';
import CustomModal from "../home/components/modal";
import alianca from "../assets/alianca.jpg";
import rompendo from "../assets/rompendo.jpg";
import ceia from "../assets/ceia.jpg";
import day from "../assets/120day.jpg"; 
import celula from "../assets/celula.jpg";

export default function Eventos() {

    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = {
        "Junho 2024": [
            {
                image: alianca,
                title: "Batismo e Aliança de Membros",
                description: "dia 02/06 as 19h",
            },

            {
                image: rompendo,
                title: "Discipulado Rompendo Limites",
                description: "04/06 as 09h",
            },
            {
                image: ceia,
                title: "Ceia do Senhor",
                description: "09/06 as 09h e 19h",
            }
        ],

        "Julho 2024": [
            {
                image: day,
                title: "120 Day",
                description: "dia 06/07 as 19h",
            },

            {
                image: celula,
                title: "Festa das Redes",
                description: "07/07 as 09h e 19h",
            },
            {
                image: ceia,
                title: "Ceia do Senhor",
                description: "14/07 as 09h e 19h",
            }
        ]

    }

    const openModal = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    }

    const closeModal = () => {
        setSelectedEvent(null);
        setShowModal(false);
    }


    return (
        <Container>
            <Navbar />
            <TitleStyle>
                <h1>Próximos Eventos</h1>
                <hr></hr>
            </TitleStyle>
            {Object.keys(events).map(month => (
                <div key={month}>
                    <TitleStyle>
                        <h1>{month}</h1>
                        <hr></hr>
                    </TitleStyle>
                    <Mural>
                        {events[month].map((event, index) => (
                            <CardMural key={index} onClick={() => openModal(event)}>
                                <img src={event.image} alt={event.title} />
                                <p>{event.title}</p>
                                <p>{event.description}</p>
                            </CardMural>
                        ))}
                    </Mural>
                </div>
            ))}
            {showModal && selectedEvent && (
                <CustomModal show={showModal} onHide={closeModal} event={selectedEvent} />
            )}
        </Container>
    );
}   
