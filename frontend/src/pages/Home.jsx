import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/Bookscard';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  // set initial view based on URL
  const initialView = location.pathname === '/card' ? 'card' : 'table';
  const [showType, setShowType] = useState(initialView);

  useEffect(() => {
    // when pathname changes, update showType (so nav link /card works)
    if (location.pathname === '/card') {
      setShowType('card');
    } else if (location.pathname === '/' || location.pathname === '/books') {
      // keep default table for these routes
      setShowType('table');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <h1 className="text-4xl text-[#5a3a2c] my-8"><b>Books List</b></h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-700 text-4xl " />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} showType={showType} />
      )}
    </div>
  );
};

export default Home;
