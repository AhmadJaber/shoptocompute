import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../constants/navlink';
// import { CHECKOUT } from '../../constants/routes';
import { Header } from './navbar.styles';
import logo from '../../assets/logo.svg';
import NavButton from '../nav-buttons/nav-button.component';

export default function NavBar() {
  return (
    <Header>
      <img src={logo} alt="vintage tech logo" className="logo" />
      <nav>
        <ul>
          <div>
            {links.map((link) => {
              const { id, text, url } = link;

              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
            {/* <li>
              <Link to={CHECKOUT}>Checkout</Link>
            </li> */}
          </div>
          <NavButton />
        </ul>
      </nav>
    </Header>
  );
}
