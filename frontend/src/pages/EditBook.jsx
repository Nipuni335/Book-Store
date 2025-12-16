import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5555/books/${id}`);

        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
      } catch (error) {
        console.log(error);
        enqueueSnackbar('Error fetching book details', { variant: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id, enqueueSnackbar]);

  const handleSaveBook = async () => {
    try {
      setLoading(true);
      const data = { title, author, publishYear };

      await axios.put(`http://localhost:5555/books/${id}`, data);

      enqueueSnackbar('Book updated successfully', { variant: 'success' });
      navigate('/');
    } catch (error) {
      console.log(error);
      enqueueSnackbar('Error updating book', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">

      {/* Back Button Styled Like ShowBook */}
      <div className="w-full flex justify-start mb-4">
        <BackButton destination="/" />
      </div>

      <h1 className="text-3xl font-bold my-6 tracking-wide text-[#4a3f35]">
        Edit Book
      </h1>

      {loading && <Spinner />}

      <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg border border-[#c28a6a]">

        <div className="my-4">
          <label className="text-lg font-semibold text-gray-600">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 px-4 py-2 border-2 border-[#c28a6a] rounded-xl focus:outline-none focus:border-[#a67153] transition"
          />
        </div>

        <div className="my-4">
          <label className="text-lg font-semibold text-gray-600">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full mt-1 px-4 py-2 border-2 border-[#c28a6a] rounded-xl focus:outline-none focus:border-[#a67153] transition"
          />
        </div>

        <div className="my-4">
          <label className="text-lg font-semibold text-gray-600">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="w-full mt-1 px-4 py-2 border-2 border-[#c28a6a] rounded-xl focus:outline-none focus:border-[#a67153] transition"
          />
        </div>

        <button
          className="w-full py-3 mt-6 bg-[#c28a6a] text-white font-semibold rounded-xl hover:bg-[#a67153] transition"
          onClick={handleSaveBook}
        >
          Save Changes
        </button>

      </div>
    </div>
  );
};

export default EditBooks;
