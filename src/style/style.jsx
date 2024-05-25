import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

    img {
        width: 400px;
        height: 300px;
        object-fit: cover;
        margin: 10px 100px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

    @media (max-width: 768px) {
        flex-direction: column;

        img {
            width: 100%;
            height: 300px;
            margin: 20px 0;
        
    }



`;

export const SectionStyle = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
    

`;

export const TitleStyle = styled.div`
    margin: 30px 0;

    h1 {
        font-size: 30px;
        text-align: center;
    }

    hr {
        width: 50%;
        margin: 0 auto;
        border: 1px solid #ff9100;
    }

    @media (max-width: 768px) {
        
        margin: 10px 0;

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
    text-align: center;

    @media (max-width: 768px) {
        margin: 10px 0;
    }

    &:hover {
        background-color: #ff9100;
        color: #fff;
        cursor: pointer;
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
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    font-size: 20px;

    a {
        color: #c77100;
        margin: 0 10px;
        font-size: 20px;
        transition: 0.3s;
        text-decoration: none;

    }

    a:hover {
        color: #c77100;

    }

    h3{
        margin: 10px;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        a {
            font-size: 20px;}
    }
`;
export const SectionText = styled.section`
    Text-align: center;
    padding: 20px 0;

    p {
        font-size: 20px;
        margin: 10px;
    }

    @media (max-width: 768px) {
        p {
            font-size: 15px;
        }
    }

`;


export const Mural = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const CardMural = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 20px;
  border: 1px solid #ff9100;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 1px;
  }

  img {
    width: 200px;
    height: 150px;
    object-fit: cover;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    img {
      width: 100%;
      height: auto;
    }

  }
`;

export const ModalContainer = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContent = styled.div`
  margin: 15% auto;
  width: 80%;
  max-width: 700px;
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const AtividadeStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px 0;

    @media (max-width: 768px) {
        flex-direction: column;
    }

`;


export const BlockStyle = styled.div`
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

export const CardColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ff9100;
    border-radius: 10px;
    transition: 0.3s;
    text-align: center;
    width: 300px;

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

export const FormContato = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;

    input {
        width: 300px;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #ff9100;
        text-align: center;
    }

    textarea {
        width: 300px;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #ff9100;
        text-align: center;
    }

    button {
        width: 300px;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #ff9100;
        background-color: #ff9100;
        color: #fff;
        transition: 0.3s;
    }

    button:hover {
        background-color: #c77100;
    }
`;

export const SectionCarrousel = styled.section`

    img {
        width: 600px;
        height: 400px;
        object-fit: cover;
        border-radius: 10px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    }

    @media (max-width: 768px) {
        img {
            width: 100%;
            height: 300px;
        }
    }
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        text-decoration: none;
    }

    &:visited {
        color: inherit;
    }
`;

export const LogoBanco = styled.img`
    width: 100px;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        width: 50px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;

export const QRCode = styled.img`
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        width: 100px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;
