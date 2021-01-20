import {
  ContactFooter,
  FooterContainer,
  LogoFooter,
  Map,
  QuickLinks,
} from "./FooterStyled";

import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoFooter>
        <i className="fas fa-bolt"></i>
        <span>Construcción</span>
      </LogoFooter>
      <QuickLinks>
        <h2>Accesos directos</h2>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </QuickLinks>
      <ContactFooter>
        <h2>Contacto</h2>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i> 98 West 21th Street, New
            York
          </li>
          <li>
            <i className="fas fa-mobile-alt"></i> +95 (0) 123 456 789
          </li>
        </ul>
      </ContactFooter>
      <Map>
        <img src="/img/map.png" alt="Map Contact" />
      </Map>
    </FooterContainer>
  );
};

export default Footer;
