import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[750px] max-w-full bg-white rounded-2xl p-6 flex flex-col relative shadow-xl"
      >
        {/* Close Button */}
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-500 cursor-pointer"
          onClick={onClose}
        />

        {/* Publish Year Badge */}
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg text-sm font-semibold mb-3">
          {book.publishYear}
        </h2>

        {/* Book ID */}
        <h4 className="text-gray-600 text-sm mb-4">{book._id}</h4>

        {/* Title Row */}
        <div className="flex items-center gap-x-3 mb-4">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="text-xl font-medium">{book.title}</h2>
        </div>

        {/* Author Row */}
        <div className="flex items-center gap-x-3 mb-4">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="text-lg">{book.author}</h2>
        </div>

        {/* Extra Description Like Screenshot */}
        <p className="mt-4 text-gray-700 leading-relaxed">
          Anything you want to show
        </p>

        <p className="mt-2 text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptates? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
