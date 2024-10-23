import React from 'react';
import {GlobalStyle, FooterContainer, FooterSection, SocialIcons, Newsletter, PaymentIcons } from "./style.jsx";




// Componente de rodapé
export const Footer = () => {
  return (
    <>
      <GlobalStyle />
      <FooterContainer>

      <FooterSection>
          <h4>Receba nossas Ofertas</h4>
          <Newsletter>
            <input type="email" placeholder="Digite seu email" />
            <input type="senha" placeholder="Digite sua senha" />
            <button>Inscrever-se</button>
          </Newsletter>
        </FooterSection>

        {/* Seção Sobre */}
        <FooterSection>
          <h4>Sobre Nós</h4>
          <ul>
            <li><a href="#">Nossa História</a></li>
            <li><a href="#">Missão e Valores</a></li>
            <li><a href="#">Carreiras</a></li>
          </ul>
        </FooterSection>

        {/* Seção Atendimento */}
        <FooterSection>
          <h4>Atendimento</h4>
          <ul>
            <li><a href="#">Fale Conosco</a></li>
            <li><a href="#">Perguntas Frequentes</a></li>
            <li><a href="#">Política de Devoluções</a></li>
          </ul>
        </FooterSection>

        {/* Seção Redes Sociais */}
        <FooterSection>
          <h4>Siga-nos</h4>
          <SocialIcons>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </SocialIcons>
        </FooterSection>

        {/* Seção Pagamentos */}
        <FooterSection>
          <h4>Pagamentos Aceitos</h4>
          <PaymentIcons>
            <img src="visa.png" alt="Visa" />
            <img src="mastercard.png" alt="Mastercard" />
            <img src="elo.png" alt="Elo" />
            <img src="paypal.png" alt="Paypal" />
          </PaymentIcons>
        </FooterSection>
      </FooterContainer>
    </>
  );
};
