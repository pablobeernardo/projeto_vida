import Navbar from "../home/components/navbar";
import SectionAbout from "../home/components/section-about";
import { Container } from "../style/style";

export default function QuemSomos(){
    return(
        <Container>
            <Navbar />
            <SectionAbout>
                <h1>Quem Somos</h1>
                <hr></hr>
                <p>
                    O Projeto Vida Três Rios é uma igreja evangélica que nasceu em 2009, fruto de um chamado de Deus para a cidade de Três Rios. 
                    A igreja tem como missão transformar vidas através do amor de Deus, e para isso, busca cumprir o Ide de Jesus, levando o evangelho a toda criatura.
                </p>
                <p>
                    A igreja é liderada pelo Pr. Silas Velasco e sua esposa, a Pra. Lívia Velasco. 
                    A igreja tem como visão ser uma igreja relevante, que impacta a sociedade e que transforma vidas.
                </p>
                <p>
                    A igreja tem como valores a adoração, a comunhão, o discipulado, o serviço e a missão.
                </p>
                <p>
                    A igreja tem como lema "Nossa paixão é por vidas", e tem como objetivo alcançar vidas para Jesus.
                </p>
                <p>
                    A igreja se reúne aos domingos às 19h e às quartas-feiras às 20h.
                </p>
            </SectionAbout>
        </Container>
    )
}