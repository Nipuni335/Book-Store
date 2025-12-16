import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    if (!title || !author || !publishYear) {
      enqueueSnackbar('All fields are required', { variant: 'warning' });
      return;
    }

    const data = { title, author, publishYear };
    setLoading(true);

    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        enqueueSnackbar('Book Created Successfully', { variant: 'success' });
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error creating book', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto">
        <BackButton />

        <h1 className="text-4xl font-bold text-center text-[#5a3a2c] mt-4 mb-8">
          Add a New Book
        </h1>

        {loading && <Spinner />}

        <div className="shadow-lg rounded-2xl p-8 border border-[#c28a6a] bg-white">
          
          {/* Title */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-[#5a3a2c] mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-[#c28a6a] rounded-xl focus:ring-2 focus:ring-[#c28a6a] focus:border-[#c28a6a] outline-none transition-all"
              placeholder="Enter book title"
            />
          </div>

          {/* Author */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-[#5a3a2c] mb-2">
              Author
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-3 border border-[#c28a6a] rounded-xl focus:ring-2 focus:ring-[#c28a6a] focus:border-[#c28a6a] outline-none transition-all"
              placeholder="Enter author's name"
            />
          </div>

          {/* Publish Year */}
          <div className="mb-6">
            <label className="block text-lg font-semibold text-[#5a3a2c] mb-2">
              Publish Year
            </label>
            <input
              type="number"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="w-full p-3 border border-[#c28a6a] rounded-xl focus:ring-2 focus:ring-[#c28a6a] focus:border-[#c28a6a] outline-none transition-all"
              placeholder="2025"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleSaveBook}
            className="w-full py-3 bg-[#c28a6a] text-white text-lg font-semibold rounded-xl shadow-md hover:bg-[#a9745a] hover:shadow-lg active:scale-95 transition-all"
          >
            Save Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBooks;
