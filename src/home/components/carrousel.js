import React from 'react';
import { SectionCarrousel } from '../../style/style';
import imagem1 from '../../assets/ano_da_travessia.jpg';
import imagem2 from '../../assets/maio.jpg';


export default function Carrousel() {
    
    return (
        <SectionCarrousel>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={imagem1} alt="Ano da Travessia"/>
                    </div>
                    <div class="carousel-item">
                        <img src={imagem2} alt="Proclamação de maio"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </SectionCarrousel>
    )
};