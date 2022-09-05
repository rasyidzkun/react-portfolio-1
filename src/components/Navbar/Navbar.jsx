import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import Logo from "../../assets/logo/logo.webp";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] bg-[#243b67] flex justify-between items-center px-4 text-gray-200">
      <div>
        <Link to={"home"} smooth={true} duration={500}>
          <img
            src={Logo}
            alt="Logo Image"
            className="w-[100px] cursor-pointer"
          />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#c27DFC]">
          <Link to={"home"} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#c27DFC]">
          <Link to={"about"} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#c27DFC]">
          <Link to={"skills"} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-[#c27DFC]">
          <Link to={"work"} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-[#c27DFC]">
          <Link to={"contact"} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#243b67] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl hover:text-[#c27DFC]">
          <Link onClick={handleClick} to={"home"} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl hover:text-[#c27DFC]">
          <Link onClick={handleClick} to={"about"} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl hover:text-[#c27DFC]">
          <Link
            onClick={handleClick}
            to={"skills"}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl hover:text-[#c27DFC]">
          <Link onClick={handleClick} to={"work"} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-3xl hover:text-[#c27DFC]">
          <Link
            onClick={handleClick}
            to={"contact"}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
