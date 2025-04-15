import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="px-2 sm:px-4 py-[17px] flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="flex gap-1.5 items-center">
        <img
          src="youtube.png"
          className="w-[41px] sm:w-12"
          alt="youtube-logo"
        />
        <h1 className="text-[22px] sm:text-2xl font-mono">Youtube</h1>
      </Link>

      {/* Arama çubuğu */}
      <form onSubmit={handleSubmit} className="flex border border-gray-400 rounded-[20px] overflow-hidden">
        <input
          type="search"
          className="bg-[#0f0f0f] sm:px-5 py-1 sm:py-2 border border-transparent rounded-l-[20px] text-white"
          placeholder="Ara..."
        />
        <button className="px-3 sm:px-4 sm:text-2xl bg-zinc-800 cursor-pointer hover:bg-zinc-600 transition duration-300 text-white">
          <CiSearch />
        </button>
      </form>

      {/* Sağdaki ikonlar */}
      <div className="flex gap-3 text-xl cursor-pointer max-sm:hidden">
        <FaBell className="hover:text-gray-400 transition duration-200" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-200" />
        <IoIosVideocam className="hover:text-gray-400 transition duration-200" />
      </div>
    </header>
  );
};

export default Header;
