import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);

    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        enqueueSnackbar('Error deleting book', { variant: 'error' });
      });
  };

  return (
    <div className="p-6 flex flex-col items-center">

      {/* Back Button Styled Consistently */}
      <div className="w-full flex justify-start mb-4">
        <BackButton destination="/" />
      </div>

      <h1 className="text-3xl font-bold my-6 tracking-wide text-[#4a3f35]">
        Delete Book
      </h1>

      {loading && <Spinner />}

      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg border border-[#c28a6a] text-center">

        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
          Are you sure you want to delete this book?
        </h3>

        <button
          className="w-full py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition"
          onClick={handleDeleteBook}
        >
          Yes, Delete It
        </button>

      </div>
    </div>
  );
};

export default DeleteBook;
