// criar estilos responsivos em styled-components
import styled from 'styled-components';

// criar container sendo responsivo com todas as telas
export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
`;

export const Section = styled.section`
    text-align: center;
    padding: 30px 0;
`;

export const AboutStyle = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px 0;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    img {
        width: 400px;
        height: 300px;
        object-fit: cover;
        margin: 10px 100px;
    }

    a {
        color: #ff9100;
        margin-right: 10px;
        font-size: 40px;
        transition: 0.3s;
    }

    a:hover {
        color: #c77100;
    }

`;

export const SectionStyle = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }

`;

export const TitleStyle = styled.div`
    margin: 30px 0;

    h1 {
        font-size: 40px;
    }

    hr {
        width: 50%;
        margin: 0 auto;
        border: 1px solid #ff9100;
    }

    @media (max-width: 768px) {
        h1 {
            text-align: center;
            font-size: 30px;
        }
    }
`;

export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ff9100;
    border-radius: 10px;
    transition: 0.3s;

    @media (max-width: 768px) {
        margin: 10px 0;
    }

    &:hover {
        background-color: #ff9100;
        color: #fff;
    }

    h2 {
        font-size: 20px;
    }

    p {
        font-size: 15px;
    }

    img {
        width: 200px;
        height: 150px;
        object-fit: cover;
        margin: 10px;
    }
`;

export const RomperVideo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;

    iframe {
        width: 560px;
        height: 315px;
    }

    @media (max-width: 768px) {
        iframe {
            width: 100%;
        }
    }
`;

export const FooterStyle = styled.div`
    color: #fff;
    padding: 30px 0;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;

    a {
        color: #fff;
        margin: 0 10px;
        font-size: 20px;
        transition: 0.3s;
        font-size: 30px;
    }

    a:hover {
        color: #c77100;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        a {
            font-size: 20px;}
    }
`;

