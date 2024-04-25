import React from 'react';
import { Container, TitleStyle, CollumnStyle, BlockStyle, CardColumn, Mural, CardMural } from "../style/style";
import Navbar from "../home/components/navbar";

export default function Eventos() {
    return (
        <Container>
            <Navbar />
            <TitleStyle>
                <h1>Eventos</h1>
                <hr></hr>
            </TitleStyle>
            <TitleStyle>
                <h1>Janeiro</h1>
                <hr></hr>
            </TitleStyle>
            <Mural>
                <CardMural>
                    <img src="https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2" alt="Culto de Celebração" />
                    <p>Evento 1</p>
                    <p>Descrição do evento 1</p>
                </CardMural>
                <CardMural>
                    <img src="https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2" alt="Culto de Celebração" />
                    <p>Evento 2</p>
                    <p>Descrição do evento 2</p>
                </CardMural>
                <CardMural>
                    <img src="https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2" alt="Culto de Celebração" />
                    <p>Evento 3</p>
                    <p>Descrição do evento 3</p>
                </CardMural>
                <CardMural>
                    <img src="https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2" alt="Culto de Celebração" />
                    <p>Evento 4</p>
                    <p>Descrição do evento 4</p>
                </CardMural>
            </Mural>
            <TitleStyle>
                <h1>Fevereiro</h1>
                <hr></hr>
            </TitleStyle>
            <Mural>
                <CardMural>
                    <img src="https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2" alt="Culto de Celebração" />
                    <p>Evento 5</p>
                    <p>Descrição do evento 5</p>
                </CardMural>
                <CardMural>
                    <img src="https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2" alt="Culto de Celebração" />
                    <p>Evento 6</p>
                    <p>Descrição do evento 6</p>
                </CardMural>
            </Mural>
        </Container>
    )
}