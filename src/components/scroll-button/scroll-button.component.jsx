import React, { useContext } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { UserContext } from '../../context/user';

export default function ScrollButton() {
  const { height } = useContext(UserContext);
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={height > 150 ? 'scroll-btn show-scroll-btn' : 'scroll-btn'}
      onClick={scrollBackToTop}
      type="button"
    >
      <FaAngleDoubleUp />
    </button>
  );
}
