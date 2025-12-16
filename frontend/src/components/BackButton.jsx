import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <Link
      to={destination}
      className="text-[#5a3a2c] hover:text-[#9f6d54] transition-colors duration-200"
    >
      <BsArrowLeft className="text-3xl" />
    </Link>
  );
};

export default BackButton;
