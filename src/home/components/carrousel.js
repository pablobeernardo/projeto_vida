import React from 'react';
import { Section } from '../../style/style';

export default function Carrousel() {
    return (
        <Section>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://scontent-gig4-2.xx.fbcdn.net/v/t1.18169-9/12642633_574536772699201_8701473913864187661_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zT7XXQpk_LAAX9bsrFJ&_nc_ht=scontent-gig4-2.xx&oh=00_AfBSxH2nS5cZJ39X4u_q96_oT7FgYo4cmE-ZADqt53qC7g&oe=662A4AA8" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://scontent-gig4-2.xx.fbcdn.net/v/t1.6435-9/61894341_1295269800625891_1763375802071646208_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0QZAYfnbqYAX-GOlGF&_nc_ht=scontent-gig4-2.xx&oh=00_AfC3TiE49kSkqVPcTJM1yjbW_Xux9e-v_-7PtnvMsWxQ3A&oe=662A63E2" class="d-block w-100" alt="..."/>
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
        </Section>
    )
};