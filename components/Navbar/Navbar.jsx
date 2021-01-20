import {
  Contact,
  ContactData,
  Nav,
  Menu,
  Burguer,
  Logo,
  MenuLinks,
  ContactNow,
} from "./NavbarStyled";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [navColor, setNavColor] = useState(true);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 50) {
      return setNavColor(true);
    } else if (window.scrollY > 70) {
      return setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const handleActiveMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <Nav navColor={navColor}>
      <Contact navColor={navColor}>
        <ContactData navColor={navColor}>
          <div className="contact__data-text">
            <h4>+57 3118187878</h4>
            <h4>admin@usuario.com</h4>
          </div>
          <div className="contact__data-social">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </ContactData>
      </Contact>
      <Menu>
        <Logo>
          <Link href="/">
            <a>
              <i className="fas fa-bolt"></i>
              <span>Construcción</span>
            </a>
          </Link>
        </Logo>
        <MenuLinks activeMenu={activeMenu}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </MenuLinks>
        <ContactNow>
          <button>Contactar</button>
        </ContactNow>
      </Menu>

      <Burguer onClick={() => handleActiveMenu()}>
        {activeMenu ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </Burguer>
    </Nav>
  );
};

export default Navbar;
