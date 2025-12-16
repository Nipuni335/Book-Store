// src/components/BookCover.jsx
import React from 'react';

const BookCover = ({ src, title }) => {
  return (
    <div className="w-48 sm:w-56 lg:w-60 flex-shrink-0 transform hover:scale-105 transition-all duration-300">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={src}
          alt={title}
          className="w-full h-[260px] object-cover block"
        />
      </div>
      <div className="mt-3 text-sm text-gray-600 text-center">{title}</div>
    </div>
  );
};

export default BookCover;
