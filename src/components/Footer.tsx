const Footer = () => {
  return (
    <footer className="flex w-full h-10 bottom-0 left-0 fixed text-gray-700 bg-gray-50 items-center">
      <div className="w-full flex justify-between">
        <div className="flex items-center md:ml-60">
          <strong className="p-2">Copyright @ Career Infotech 2024</strong>
          <p>All Rights Reserved</p>
        </div>
        <div className="flex items-center">
          <strong>Version</strong>
          <p className="p-2">1.0.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
