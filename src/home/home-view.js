import { Container } from "../style/style";
import IgrejaHeader from "./igreja-header";
import Navbar from "./components/navbar";
import IgrejaSection from "./igreja-section";
import RomperSection from "./romper-section";
import MinisteriosSection from "./ministerios-section";
import Footer from "./contato";

export default function HomeView() {
    return (
        <Container>
            <header>
                <Navbar />
                <IgrejaHeader />
            </header>
            <section>
                <IgrejaSection/>
                <MinisteriosSection/>
                <RomperSection/>
            </section>
            <footer>
                <Footer/>
            </footer>
        </Container>
    )
};