import React, { useState } from "react";
import { CardStyle, Container, SectionStyle, TitleStyle } from "../style/style";
import CustomModal from "../home/components/modal";

export default function IgrejaSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: "Culto de Celebração",
      image:
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2",
      description: "Domingo as 19h",
      date: "20/05/2024",
    },
    {
      title: "Série de Palavras",
      image:
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.18169-9/12642633_574536772699201_8701473913864187661_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zT7XXQpk_LAAX9bsrFJ&_nc_ht=scontent-gig4-2.xx&oh=00_AfBSxH2nS5cZJ39X4u_q96_oT7FgYo4cmE-ZADqt53qC7g&oe=662A4AA8",
      description: "Quarta as 20h",
      date: "22/05/2024",
    },
    {
      title: "Células",
      image:
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2",
      description: "Rede por 100 ovelhas",
      date: "24/05/2024",
    },
    {
      title: "O Encontro",
      image:
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.18169-9/12642633_574536772699201_8701473913864187661_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zT7XXQpk_LAAX9bsrFJ&_nc_ht=scontent-gig4-2.xx&oh=00_AfBSxH2nS5cZJ39X4u_q96_oT7FgYo4cmE-ZADqt53qC7g&oe=662A4AA8",
      description: "Todo último sábado do mês",
      date: "26/05/2024",
    },
    {
      title: "Pentencostes",
      image:
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2",
      description: "20/05/2024",
      date: "20/05/2024",
    },
    {
      title: "Batismo",
      image:
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.18169-9/12642633_574536772699201_8701473913864187661_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zT7XXQpk_LAAX9bsrFJ&_nc_ht=scontent-gig4-2.xx&oh=00_AfBSxH2nS5cZJ39X4u_q96_oT7FgYo4cmE-ZADqt53qC7g&oe=662A4AA8",
      description: "02/06/2024",
      date: "02/06/2024",
    },
    {
      title: "O Encontro",
      image:
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2",
      description: "10/07/2024",
      date: "10/07/2024",
    },
    {
      title: "Aniversário da Igreja",
      image:
        "https://scontent-gig4-2.xx.fbcdn.net/v/t1.18169-9/12642633_574536772699201_8701473913864187661_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zT7XXQpk_LAAX9bsrFJ&_nc_ht=scontent-gig4-2.xx&oh=00_AfBSxH2nS5cZJ39X4u_q96_oT7FgYo4cmE-ZADqt53qC7g&oe=662A4AA8",
      description: "09/09/2024",
      date: "09/09/2024",
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
      <div>
        <TitleStyle>
          <h1>Nossas Atividades</h1>
          <hr />
        </TitleStyle>
        <SectionStyle>
          {events.map((event, index) => (
            <CardStyle key={index} onClick={() => openModal(event)}>
              <h2>{event.title}</h2>
              <img src={event.image} alt={event.title} />
              <p>{event.description}</p>
            </CardStyle>
          ))}
        </SectionStyle>
      </div>

      <CustomModal show={showModal} onHide={closeModal} event={selectedEvent} />
    </Container>
  );
}
