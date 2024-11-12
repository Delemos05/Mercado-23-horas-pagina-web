import styled from "styled-components";
import Colors from "../../Utils/Colors";

export const Wrapper = styled.div`
  margin-top: 50px;
  width: 100%;

  .produtosPub {
    h1 {
      display: flex;
      color: ${Colors.white};
      background-color: ${Colors.red};
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 112%;
      width: 100%;

      &:hover {
        color: ${Colors.yellow};
        transition: 1s ease;
      }
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .cards {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;

      .card {
        width: 250px;
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
        }

        p {
          font-weight: bold;
          font-size: 18px;
        }

        .button {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: ${Colors.red};
          border-radius: 8px;

          .btn {
            display: flex;
            justify-content: space-between;
            flex: 1;
            margin: 2px 18px;

            span {
              font-size: 20px;
              color: white;
            }

            button {
              font-size: 18px;
              color: white;
              border: none;
              background-color: transparent;
            }
          }

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
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
        }

        h2 {
          font-size: 18px;
          color: ${Colors.white};
        }

        .text {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          margin-top: 5px;
          margin-bottom: 5px;
        }
      }
    }
  }

  .category {
    display: flex;
    background-color: ${Colors.red};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20%;
    width: 100%;

    a {
      display: flex;
      background-color: ${Colors.red};
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }

    .active {
      background-color: ${Colors.yellow};
      color: ${Colors.black};
      padding: 8px 10px;
      cursor: pointer;

      h1 {
        font-size: 16px;
        font-weight: 500;
      }
    }

    .cat {
      padding: 8px 10px;
      color: ${Colors.white};
      cursor: pointer;

      &:hover {
        background-color: ${Colors.yellow};
        transition: 1s ease;
      }

      h1 {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  .cart01 {
    color: ${Colors.yellow};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 11%;
    width: 100%;
    max-width: 2655px;
    height: 20px;
  }

  /* Responsividade */
  @media (max-width: 1024px) {
    .container {
      width: 90%;
      padding: 0 10px;
    }

    .cards {
      gap: 15px;
      margin-top: 20px;
    }

    .card {
      width: 220px;
      padding: 15px;
      margin-bottom: 20px;

      h2 {
        font-size: 16px;
      }

      p {
        font-size: 16px;
      }

      .button {
        margin-top: 15px;
      }
    }

    .category {
      flex-direction: column;
      padding: 10px;
      position: relative;
      top: auto;
      gap: 10px;
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 100%;
      padding: 0 5px;
    }

    .cards {
      gap: 10px;
    }

    .card {
      width: 200px;
      padding: 12px;
      margin-bottom: 15px;
      h2 {
        font-size: 14px;
      }

      p {
        font-size: 14px;
      }

      .button {
        margin-top: 12px;
      }
    }

    .category {
      flex-direction: column;
      padding: 8px;
      position: relative;
      top: auto;
      gap: 8px;
    }
  }

  @media (max-width: 480px) {
    .produtosPub h1 {
      font-size: 16px;
    }

    .container {
      width: 100%;
      padding: 0 5px;
    }

    .cards {
      gap: 10px;
    }

    .card {
      width: 180px;
      padding: 10px;
      margin-bottom: 10px;
      h2 {
        font-size: 14px;
      }

      p {
        font-size: 14px;
      }

      .button {
        margin-top: 10px;
      }
    }

    .category {
      flex-direction: column;
      padding: 8px;
      position: relative;
      top: auto;
      gap: 6px;
    }

    .cart01 {
      display: none;
    }
  }
`;
