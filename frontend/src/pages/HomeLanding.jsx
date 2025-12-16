import React from "react";

const HomeLanding = () => {
  return (
    <div className="w-full min-h-screen bg-white">

      <div className="max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-center">

        {/* LEFT CONTENT */}
        <div className="flex-1 px-6">
          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-6xl" style={{ color: "#c28a6a" }}>S</span>ell <br />
            Your Book
          </h1>

          <p className="mt-6 text-gray-600 leading-relaxed">
            <b>A clean landing page to present and sell your books.</b>
          </p>
       
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Kavindya Book Store is a theme specifically created for authors and writers —
              present and sell your books with a beautiful, minimal landing page.
              Add covers, a short description and make it easy for readers to
              browse and buy.
            </p>


          <button className="mt-8 border px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
            Browse Books
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex-1 flex gap-4 px-6">
          <img src="/covers/book1.jpg" className="w-28 h-40 shadow-md rounded" />
          <img src="/covers/book2.jpg" className="w-28 h-40 shadow-md rounded" />
          <img src="/covers/book3.jpg" className="w-28 h-40 shadow-md rounded" />
          <img src="/covers/book4.jpg" className="w-28 h-40 shadow-md rounded" />
        </div>

      </div>

    </div>
  );
};

export default HomeLanding;
