import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
        <p className="mx-2 w-10 text-4xl">CwS</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://np.linkedin.com/"><FaLinkedin /></a>
        <a href="https://github.com/"><FaGithub /></a>
        <a href="https://x.com/?lang=en"><FaSquareXTwitter /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
