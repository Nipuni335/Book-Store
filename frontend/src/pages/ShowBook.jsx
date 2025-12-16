import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5555/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  return (
    <div className="p-6 flex flex-col items-center">

      {/* Back Button Left-Aligned */}
      <div className="w-full flex justify-start">
        <BackButton destination="/" />
      </div>

      <h1 className="text-3xl font-bold my-6 tracking-wide text-[#4a3f35]">
        Book Details
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-lg border border-[#c28a6a]">

          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">ID</span>
            <span>{book._id}</span>
          </div>

          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">Title</span>
            <span>{book.title}</span>
          </div>

          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">Author</span>
            <span>{book.author}</span>
          </div>

          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>

          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">Created At</span>
            <span>
              {book.createdAt ? new Date(book.createdAt).toLocaleString() : "N/A"}
            </span>
          </div>

          <div className="my-4 flex justify-between">
            <span className="text-lg font-semibold text-gray-600">Last Updated</span>
            <span>
              {book.updatedAt ? new Date(book.updatedAt).toLocaleString() : "N/A"}
            </span>
          </div>

        </div>
      )}
    </div>
  );
};

export default ShowBook;
