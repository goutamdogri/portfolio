import { useEffect } from "react";
import ContactMeBtn from "./ContactMeBtn.jsx";
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";
import SideMenu from "./SideMenu.jsx";

function Navbar() {
  useEffect(() => {
    document.querySelectorAll(".btn").forEach((button) => {
      button.addEventListener("click", function () {
        document.querySelectorAll(".btn").forEach((btn) => {
          btn.classList.remove("font-medium", "border-b-2", "border-black");
          btn.classList.add("hover:border-slate-400");
        });
        this.classList.add("font-medium", "border-b-2", "border-black");
        this.classList.remove("hover:border-slate-400");
      });
    });
  }, []);
  return (
    <nav className="w-screen h-20 bg-page-light flex justify-center">
      <div className="w-10/12 h-full flex items-center justify-between sideMenuHide">
        <Logo>
          GOUTAM <br></br> DOGRI
        </Logo>
        <div className="hidden md:inline-block">
          <div className="flex">
            <Menu
              className="btn ml-6  font-medium border-b-2 border-black"
              link="#"
            >
              Home
            </Menu>
            <Menu className="btn ml-6  hover:border-slate-400" link="#aboutMe">
              About me
            </Menu>
            <Menu className="btn ml-6  hover:border-slate-400" link="#projects">
              Project
            </Menu>
            <Menu
              className="btn ml-6  hover:border-slate-400"
              link="#contactMe"
            >
              Contact me
            </Menu>
          </div>
        </div>

        <div className="flex items-center">
          <ContactMeBtn className="hidden md:inline-block" />
          <div className="md:hidden ">
            <div className=" hover:bg-blue-200 rounded-md w-10 h-10 flex items-center justify-center menuIcon">
              <i className="fa-solid fa-bars text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
      <SideMenu />
    </nav>
  );
}

export default Navbar;
