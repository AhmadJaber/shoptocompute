import React from 'react';
import { Login, Logout } from '../components';
import loginUser from '../strapi/login-user';
import registerUser from '../strapi/register-user';

export default function LoginLogout() {
  const [isMember, setIsMember] = React.useState(true);

  const toggleMember = () => {
    setIsMember((prevMember) => {
      const newMember = !prevMember;
      return newMember;
    });
  };

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? 'sign in' : 'register'}</h2>
      <p className="register-link">
        {isMember ? 'Need to register?' : 'Already a member?'}
        <button type="button" onClick={toggleMember}>
          click here
        </button>
      </p>

      {isMember ? <Login /> : <Logout />}
    </section>
  );
}
