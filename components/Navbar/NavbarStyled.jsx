import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  height: 50px;
  background-color: var(--blue-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  -webkit-box-shadow: 0px 6px 5px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 6px 5px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Contact = styled.div`
  width: 100vw;
  height: 40px;
  background-color: var(--blue-dark-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
  z-index: 2;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    padding: 0px 10px;
  }
  @media (min-width: 992px) {
    padding: 0px 30px;
  }
`;

export const ContactData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .contact__data-text {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 10px;
    order: 2;

    h4:nth-child(2) {
      display: none;
    }

    h4 {
      margin: 0;
      font-size: 12px;
      color: white;
    }
  }

  .contact__data-social {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 10px;
    order: 1;

    i {
      margin: 0px 10px;
      font-size: 12px;
      color: white;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        color: var(--orange);
      }
    }
  }

  @media (min-width: 768px) {
    .contact__data-text {
      h4 {
        margin: 0px 10px;
      }
      h4:nth-child(2) {
        display: flex;
      }
    }
    .contact__data-social {
      i {
        font-size: 14px;
      }
    }
  }
`;

export const Logo = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-left: 10px;
  font-family: Poppins, sans-serif;
  text-transform: uppercase;

  a i {
    color: var(--orange);
    font-size: 20px;
  }
  a span {
    color: var(--white);
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    cursor: pointer;

    a span {
      transition: all 0.3s ease;
    }

    a span:hover {
      color: var(--orange);
    }
  }
`;

export const MenuLinks = styled.ul`
  width: 100vw;
  height: auto;
  position: fixed;
  top: 50px;
  left: ${(props) => (props.activeMenu ? "0" : "-100%")};
  opacity: ${(props) => (props.activeMenu ? "1" : "0")};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
  padding: 10px 0px;
  padding-left: 15px;
  -webkit-box-shadow: 0px 6px 5px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 6px 5px 2px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: all 0.5s ease;

  li {
    width: auto;
    height: auto;
    margin: 5px 0px;
    padding: 10px;
    list-style: none;
    transition: all 0.5s ease;
  }

  @media (min-width: 768px) {
    width: auto;
    position: inherit;
    opacity: 1;
    flex-direction: row;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    box-shadow: none;

    li a {
      color: var(--white);
      transition: all 0.3s ease;

      &:hover {
        color: var(--orange);
      }
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0px 10px;
  }
  @media (min-width: 992px) {
    padding: 0px 30px;
  }
`;

export const Burguer = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  color: var(--orange);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;

  i {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ContactNow = styled.div`
  outline: none;
  display: none;

  @media (min-width: 768px) {
    cursor: pointer;
    background-image: linear-gradient(
      to left,
      transparent,
      transparent 50%,
      var(--white) 50%,
      var(--white)
    );
    background-position: 100% 0;
    background-size: 200% 100%;
    transition: all 0.25s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--orange);
    width: auto;
    height: 100%;
    padding: 10px;
    border-radius: 7px;
    font-weight: 700;
    color: white;

    &:hover {
      background-position: 0 0;
      color: var(--orange-dark);
      //color: var(--blue-dark);
    }
  }
`;
