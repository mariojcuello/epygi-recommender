import Link from "next/link";

const Header = () => {

  return (
    <div className=" max-w-6xl mx-auto items-center my-10">
      <Link 
      href={'/'}
      > <img
        src="/logo_dark.png"
        className="max-w-[200px] md:max-w-[300px] hidden dark:flex"
      ></img>
      </Link>

      <img
        src="/logo_light.png"
        className="max-w-[200px] md:max-w-[300px] dark:hidden"
      ></img>
    </div>
  );
};

export default Header;
