const Header = () => {
  return (
    <header className="w-full h-14 top-0 left-0 flex justify-between items-center text-xl">
      {/* <div className="w-64 bg-gray-700 h-full flex items-center justify-center text-white font-sans cursor-pointer">
7        <p>City Point Restaurant</p>
      </div> */}
      <div className="h-full bg-gray-100 w-full flex justify-between items-center px-5 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:text-gray-400 duration-300 hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div className="flex gap-2 items-center hover:text-gray-400 duration-300 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
            />
          </svg>

          <p>Logout</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
