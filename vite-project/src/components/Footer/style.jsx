import { styled } from "styled-components";
import Colors from "../../Utils/Colors"

// Global Styles (para garantir um reset básico)
export const GlobalStyle = styled.div`
  * {
   
    margin: 20px;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Arial', sans-serif;
  }
`;

// Footer container principal
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.red};
  color: ${Colors.white};
  margin-top: 40px;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Estilo das seções do footer
export const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;

  h4 {
    margin-bottom: 20px;
    font-size: 18px;
    color: ${Colors.yellow};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Redes sociais e seus ícones
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  a {
    font-size: 24px;
    margin: 0 10px;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: ${Colors.yellow};
    }
  }
`;

// Newsletter
export const Newsletter = styled.div`
  margin-top: 20px;

  input {
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    width: 250px;
  }

  button {
    padding: 10px 20px;
    background-color:${Colors.yellow};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${Colors.yellow};
    }
  }
`;

// Ícones de pagamento
export const PaymentIcons = styled.div`
  margin-top: 20px;

  img {
    width: 50px;
    margin: 0 10px;
  }
`;