import { FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialIcons = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]">
          <a
            href="https://github.com/rasyidzkun/"
            className="flex justify-between items-center w-full text-gray-200"
            target="_blank"
          >
            Github <FaGithub size={25} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C13584]">
          <a
            href="https://www.instagram.com/kucingscript/"
            className="flex justify-between items-center w-full text-gray-200"
            target="_blank"
          >
            Instagram <FaInstagram size={25} />
          </a>
        </li>

        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4267B2]">
          <a
            href="https://www.facebook.com/RasyidzScreamo.221016"
            className="flex justify-between items-center w-full text-gray-200"
            target="_blank"
          >
            Facebook <FaFacebookF size={25} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c71610]">
          <a
            href="mailto:kucingscript@gmail.com"
            className="flex justify-between items-center w-full text-gray-200"
            target="_blank"
          >
            Email <SiGmail size={25} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
