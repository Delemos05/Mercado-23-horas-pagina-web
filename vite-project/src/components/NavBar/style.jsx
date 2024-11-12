import { styled } from "styled-components";
import Colors from "../../Utils/Colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;

  .logo {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      width: 80px;
      height: 80px;
      cursor: pointer;
    }

    .text {
      h1 {
        font-size: 26px;
        color: ${Colors.grey};

        span {
          color: ${Colors.yellow};
          font-weight: 500;
          font-size: 20px;
        }
      }
    }
  }

  .search {
    display: flex;
    flex: 1;
    padding: 10px 30px;
    border-radius: 40px;
    border: 1px solid ${Colors.grey};
    outline: none;
    margin: 0 60px;

    .icon {
      cursor: pointer;
    }

    input {
      flex: 1;
      border: none;
      outline: none;
    }
  }

  .menu {
    ul {
      display: flex;
      align-items: center;
      gap: 20px;

      li {
        list-style: none;
        font-weight: 500;
      }
    }
  }

  /* Responsividade */
  @media (max-width: 1024px) {
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;

    .logo {
      margin-bottom: 20px;
      gap: 15px;
    }

    .search {
      margin: 0 0 20px 0;
      width: 100%;
      padding: 8px 20px;
      font-size: 14px;
    }

    .menu {
      ul {
        flex-direction: column;
        gap: 10px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    flex-direction: column;
    align-items: flex-start;

    .logo {
      margin-bottom: 15px;
      gap: 10px;

      .text h1 {
        font-size: 22px;
      }
    }

    .search {
      margin: 0 0 15px 0;
      width: 100%;
      padding: 8px 15px;
    }

    .menu {
      ul {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        li {
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .search {
      padding: 8px 10px;
    }

    .menu {
      ul {
        gap: 5px;

        li {
          font-size: 12px;
        }
      }
    }
  }
`;
