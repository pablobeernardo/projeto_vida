import { Container} from "../../style/style";
import React from 'react';
import '../../style/style.css';

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
                                <a class="nav-link" aria-current="page" href="quem-somos">Quem somos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Atividades</a>
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
                        </ul>
                    </div>
                </div>
            </nav>
        </Container>

    )
};