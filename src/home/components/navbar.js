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
                                <a class="nav-link" href="#">Eventos</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ministérios
                                </a>
                                <ul class="dropdown-menu" >
                                    <li><a class="dropdown-item nav-link" href="#">Action</a></li>
                                    <li><a class="dropdown-item nav-link" href="#">Another action</a></li>
                                    <li><a class="dropdown-item nav-link" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pedidos de Oração</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Doações</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contato</a>    
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Container>

    )
};