import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';

import HomeLanding from './pages/HomeLanding.jsx';
import Home from './pages/Home.jsx';
import CreateBooks from './pages/CreateBooks.jsx';
import ShowBook from './pages/ShowBook.jsx';
import EditBook from './pages/EditBook.jsx';
import DeleteBook from './pages/DeleteBook.jsx';

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";   // ✅ Added

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>

        
        <Route path="/" element={<HomeLanding />} />

        <Route path="/books" element={<Home />} />
        <Route path="/card" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />   {/* ← NEW ROUTE */}

      </Routes>

      <Footer />
    </>
  );
};

export default App;
