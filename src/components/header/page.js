const Header = () => {
  return (
    <div className="Header shadow-custom p-4 bg-white">
      <div className="container">
        <div className="flex items-center justify-between ">
          <h2 className="font-nunito text-custom-24 font-extrabold leading-custom-32.74 text-left py-[24px]">
            Where in the world?
          </h2>
          <button>Dark Mode</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
