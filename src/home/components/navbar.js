import { Container} from "../../style/style";
import React from 'react';
import '../../style/style.css';
import { Link } from "react-router-dom";
import Somos from "../../others/somos";

export default function Navbar() {
    return (
        <Container>
            <nav class="navbar navbar-expand-lg "  data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand nav-link" href="#">Projeto Vida Três Rios</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/somos">Quem somos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/atividades">Atividades</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to={"/eventos"}>Eventos</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ministérios
                                </a>
                                <ul class="dropdown-menu" >
                                    <li><Link class="dropdown-item nav-link" to={"/conexaoteen"} >Conexão Teen</Link></li>
                                    <li><Link class="dropdown-item nav-link" to={"/kids"}>Projeto Vida Kids</Link></li>
                                    <li><Link class="dropdown-item nav-link" to={'/louvor'}>Louvor</Link></li>
                                    <li><Link class="dropdown-item nav-link" to={'/rede'}>Rede por 100</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to={"/doacoes"}>Doações</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link"  aria-current="page" to={"/contato"}>Contato</Link>    
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Container>

    )
};