import logoIcon from "../assets/logo dark.png";
import MyContainer from "../shared/MyContainer/MyContainer";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const NavBar = () => {
  const navItems = (
    <>
      <li className="md:text-base text-sm font-medium">
        <a>Home</a>
      </li>
      <li className="md:text-base text-sm font-medium">
        <a>Services</a>
      </li>
      <li className="md:text-base text-sm font-medium">
        <a>Blog</a>
      </li>
      <li className="md:text-base text-sm font-medium">
        <a>About Us</a>
      </li>
    </>
  );

  return (
    <>
      <MyContainer className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img
              className="md:w-28 sm:w-22 w-16"
              src={logoIcon}
              alt="Logo icon"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="md:btn btn-sm  border md:border-gray-500 border-gray-500 md:rounded-xl rounded-lg md:px-5 px-4">
            Appointment
            <FaArrowUpRightFromSquare />
          </a>
        </div>
      </MyContainer>
    </>
  );
};

export default NavBar;
