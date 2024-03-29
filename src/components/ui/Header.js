import Link from "next/link";

const Header = () => {
  return (
    <div className=" max-w-6xl my-10 mx-20 md:mx-15">
      <Link href={"/"}>
        {" "}
        <img
          src="/logo_dark.png"
          className="max-w-[200px] md:max-w-[300px] hidden dark:flex"
        ></img>
      </Link>
      <Link href={"/"}>
        <img
          src="/logo_light.png"
          className="max-w-[200px] md:max-w-[300px] dark:hidden"
        ></img>
      </Link>
    </div>
  );
};

export default Header;
