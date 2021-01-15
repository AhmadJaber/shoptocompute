import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../constants/navlink';
import { CHECKOUT } from '../../constants/routes';
import { Header } from './navbar.styles';
import logo from '../../assets/logo.png';
import NavButton from '../nav-buttons/nav-button.component';
import { UserContext } from '../../context/user';

export default function NavBar() {
  const { user } = useContext(UserContext);

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

            {user.token ? (
              <li>
                <Link to={CHECKOUT}>Checkout</Link>
              </li>
            ) : null}
          </div>
          <NavButton />
        </ul>
      </nav>
    </Header>
  );
}
