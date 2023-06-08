const Header = () => {

  return (
    <div className="flex flex-row mx-auto items-center mb-10 ">
      <img
        src="/logo_dark.png"
        className="max-w-[200px] md:max-w-[300px] pl-10 pt-5 hidden dark:flex"
      ></img>

      <img
        src="/logo_light.png"
        className="max-w-[200px] md:max-w-[300px] pl-10 pt-5 dark:hidden"
      ></img>
    </div>
  );
};

export default Header;
