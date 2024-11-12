import styled from "styled-components";
import Colors from "../../Utils/Colors";

export const Wrapper = styled.div`
  .show {
    display: block;
    width: 50%;
    height: 1000%;
    background-color: ${Colors.white};
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;

    .header {
      display: flex;
      justify-content: space-between;
      background-color: ${Colors.yellow};

      .h1 {
        color: ${Colors.red};
        font-size: 30px;
        font-weight: bold;
        right: 400px;
        left: 200px;
      }
      button {
        color: ${Colors.red};
        background-color: transparent;
        font-weight: bold;
        font-size: 30px;
        border: none;
        left: 50px;
      }
    }

    .item {
      margin: 15px auto;
      width: 150px;
      height: 200px;
      font-size: 1px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: ${Colors.yellow};
      padding: 20px;
      border-radius: 20px;
      box-shadow: 4px 4px 4px gray;
      cursor: pointer;

      &:hover {
        box-shadow: 4px 6px 6px 6px gray;
        transition: 1s ease;
        cursor: pointer;
      }

      p {
        font-weight: bold;
        font-size: 10px;
      }

      .button {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${Colors.red};
        border-radius: 8px;

        .cart {
          background-color: ${Colors.white};
          color: white;
          padding: 8px;
          border-start-end-radius: 8px;
          border-bottom-left-radius: 8px;
          border: none;
          height: 100%;
          justify-content: center;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
      }

      img {
        width: 10%;
        height: 5%;
        object-fit: cover;
        border-radius: 20px;
      }

      h2 {
        background-color: ${Colors.red};
        font-size: 10px;
        color: ${Colors.white};
        border-radius: 5px;
      }

      .text {
        display: flex;
        gap: 6px;
        flex-direction: column;
        align-items: center;
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }

    .comprar {
      display: flex;
      justify-content: center;
      button {
        background-color: ${Colors.red};
        color: ${Colors.white};
        height: 40px;
        width: 150px;
        justify-content: center;
        border-radius: 5px;
      }
    }
  }

  .hidden {
    display: none;
    .vazio {
      color: ${Colors.red};
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .show {
      width: 80%;  /* Ajusta a largura da tela para dispositivos menores */
    }

    .header {
      flex-direction: column;
      align-items: center;

      .h1 {
        font-size: 24px;
        left: 0;
        right: 0;
        text-align: center;
      }

      button {
        font-size: 24px;
        left: 0;
        text-align: center;
        margin-top: 10px;
      }
    }

    .item {
      width: 80%;  /* Ajusta a largura das cartas dos itens */
      margin: 10px auto;
      height: auto; /* Ajusta a altura para dispositivos menores */
      padding: 10px;
      font-size: 12px;
    }

    img {
      width: 50%;
      height: auto;
    }

    .comprar {
      margin-top: 20px;
      button {
        width: 100%; /* Faz o botão ocupar toda a largura */
      }
    }
  }

  @media (max-width: 480px) {
    .show {
      width: 100%;  /* Ajusta para tela cheia em dispositivos muito pequenos */
    }

    .header {
      .h1 {
        font-size: 20px;
      }

      button {
        font-size: 20px;
      }
    }

    .item {
      width: 90%;  /* Ajusta a largura para dispositivos pequenos */
      margin: 10px auto;
      font-size: 14px;
    }

    img {
      width: 70%;
    }

    .comprar button {
      width: 100%;
      font-size: 16px;
    }
  }
`;
